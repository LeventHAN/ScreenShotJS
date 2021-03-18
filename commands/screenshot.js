require("dotenv").config();
const SETTINGS = process.env;

const { MessageEmbed } = require("discord.js");
const puppeteer = require("puppeteer");

module.exports = {
  name: SETTINGS.screenShotTag,
  cooldown: 0,
  aliases: ["s"],
  description: "Takes an screenshot from the stats.ger-squad webpage.",
  example: `76561198110941835`, // example UID for the help command's example
  async execute(message, args) {
    let fetchingData = new MessageEmbed()
      .setTitle("We are taking the screenshot, please wait... ")
      .setColor("#f2f20e");
    let fetchingSend = await message.channel.send(fetchingData);
    function wrongSyntax() {
      let wrongSyntaxEmbed = new MessageEmbed()
        .setTitle(`Ooops! Wrong Syntax`)
        .setDescription(
          `**Usage of the command: \`${SETTINGS.prefix}${SETTINGS.screenShotTag} <Website's URL>\`.**`
        )
        .setColor("#ff0300")
        .setThumbnail(
          "https://avatars2.githubusercontent.com/u/25463237?s=400&u=eccc0ee1cd33352f75338889e791a04d1909bcce&v=4"
        );
      wrongSyntaxEmbed.addField(
        `Example`,
        `\`${SETTINGS.prefix}${SETTINGS.screenShotTag} 76561198255784011\``
      );
      wrongSyntaxEmbed.setTimestamp();
      wrongSyntaxEmbed.setFooter(SETTINGS.author, SETTINGS.footerImg);
      message.channel
        .send(wrongSyntaxEmbed)
        .then((msg) => {
          msg.delete({ timeout: 10000 });
        })
        .then(
          SETTINGS.deleteUsersCommandOnError === "true"
            ? message.delete({ timeout: 10000 })
            : ""
        )
        .then(fetchingSend.delete({ timeout: 10 }))
        .catch(console.error);
    }
    if (!args.length) {
      wrongSyntax();
      return;
    }

    const steamIDpatter = /^[0-9]{17}$/;
    const uid = args[0];
    const uidValid = steamIDpatter.test(args[0]);

    if (!uidValid) {
      wrongSyntax();
      return;
    }
    const urlToStats = `https://stats.ger-squad.community/player-detail.php?steamUID=${uid}`;

    (async () => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      page.setViewport({ width: 1200, height: 800, deviceScaleFactor: 1 });
      await page.goto(urlToStats, { waitUntil: "networkidle2" });
      const [button] = await page.$x("//a[contains(., '×')]");
      if (button) {
        await button.click();
      } else {
        console.log("Button not found.");
      }
      /**
       * Takes a screenshot of a DOM element on the page, with optional padding.
       *
       * @param {!{path:string, selector:string, padding:(number|undefined)}=} opts
       * @return {!Promise<!Buffer>}
       */
      async function screenshotDOMElement(opts = {}) {
        const padding = "padding" in opts ? opts.padding : 0;
        const path = "path" in opts ? opts.path : null;
        const selector = opts.selector;

        if (!selector) throw Error("Please provide a selector.");

        const rect = await page.evaluate((selector) => {
          const element = document.querySelector(selector);
          if (!element) return null;
          const { x, y, width, height } = element.getBoundingClientRect();
          return { left: x, top: y, width, height, id: element.id };
        }, selector);

        if (!rect)
          throw Error(
            `Could not find element that matches selector: ${selector}.`
          );

        return await page.screenshot({
          path,
          clip: {
            x: rect.left - padding,
            y: rect.top - padding,
            width: rect.width + padding * 2,
            height: rect.height + padding * 2,
          },
        });
      }

      const imageScreenshot = await screenshotDOMElement({
        path: "element.png",
        selector: "#datatable",
        padding: 16,
      });
      if (imageScreenshot) {
        let searchEmbed = await new MessageEmbed()
          .setTitle(`Fetched from our server.`)
          .setDescription(
            `Command usage: \`${SETTINGS.prefix}${SETTINGS.screenShotTag} <SteamID64>\``
          )
          .setColor("#f82d2a")
          .setAuthor(
            message.author.username,
            message.author.avatarURL(),
            urlToStats
          )
          .addField(`To See In Our Website:`, `[Click Here](${urlToStats})`)
          .attachFiles([{ name: "element.png", attachment: imageScreenshot }])
          .setImage("attachment://element.png");

        searchEmbed.setTimestamp();
        searchEmbed.setFooter(SETTINGS.author, SETTINGS.footerImg);
        message.channel.send(searchEmbed);
        if (SETTINGS.deleteScreenShots === "true") {
          message.channel
            .send(searchEmbed)
            .then((msg) => {
              msg.delete({ timeout: SETTINGS.deleteScreenShotsTimeout });
            })
            .then(
              SETTINGS.deleteUsersCommandOnSuccess === "true"
                ? message.delete({ timeout: 29000 })
                : ""
            )
            .then(fetchingSend.delete({ timeout: 10 }))
            .catch(console.error);
        } else {
          message.channel
            .send(searchEmbed)
            .then(
              SETTINGS.deleteUsersCommandOnSuccess === "true"
                ? message.delete({ timeout: 29000 })
                : ""
            )
            .then(fetchingSend.delete({ timeout: 10 }))
            .catch(console.error);
        }
      } else {
        return;
      }
      await browser.close();
    })();
  },
};
