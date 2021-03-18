<div align="center">

<img src="https://i.imgur.com/B1RjBvq.png" alt="Logo" width="500"/>

#### ScreenShotJS (GER-SQUAD)
[![GitHub contributors](https://img.shields.io/github/contributors/11TStudio/ScreenShotJS.svg?style=flat-square)](https://github.com/11TStudio/ScreenShotJS/graphs/contributors)
[![GitHub release](https://img.shields.io/github/license/11TStudio/ScreenShotJS.svg?style=flat-square)](https://github.com/11TStudio/ScreenShotJS/blob/master/LICENSE)

<br>

[![GitHub issues](https://img.shields.io/github/issues/11TStudio/ScreenShotJS.svg?style=flat-square)](https://github.com/11TStudio/ScreenShotJS/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/11TStudio/ScreenShotJS.svg?style=flat-square)](https://github.com/11TStudio/ScreenShotJS/pulls)
[![GitHub issues](https://img.shields.io/github/stars/11TStudio/ScreenShotJS.svg?style=flat-square)](https://github.com/11TStudio/ScreenShotJS/stargazers)



<br><br>
</div>

## About
This bot is **custom made** for <a href="https://ger-squad.community/" target="_blank">German Squad Community</a>

**Soon a general multi-purpose bot will be shared.** 
Meanwhile you can take your time and check the code.

## Using ScreenShotJS [v. GER.SQUAD]
Usage is simple the bot is using Puppeteer to take screenshots and DiscordJS to connect and show those to in the channel.

### Prerequisites
 * Git
 * [Node.js](https://nodejs.org/en/) (Current) - [Download](https://nodejs.org/en/)

### Installation
1. Clone the repository via your terminal/cmd: ```git clone https://github.com/11TStudio/ScreenShotJS```
2. Configure the `.env.example` file. And when done SAVE and delete the .example. (At the end the file should look like: `.env`)
3. Run `npm install` via the terminal.
4. Start your bot: `node index.js&`. (**I recommend you to use [pm2](https://pm2.keymetrics.io)**)
5. Star this repo if you liked!

### Configuring ScreenShotJS (GER-SQUAD)
ScreenShotJS (GER-SQUAD) can be configured via .env file which by default is called .env.example.

The config file needs to be called .env at the end and a example can be found below:
```json
# Main Settings
communityName="GER-SQUAD | ger-squad.community"
screenShotTag="search"
screenShotLeaderboardTag="leaderboard"
prefix="!"

# Channel Restriction
channelRestricted=true
statChannel="CHANGE THIS TO YOUR CHANNELID"

# Embed settings false = do not delete / true = delete | timeout is in milliseconds
deleteScreenShots=true
deleteScreenShotsAfter="29000"

# User's Send Message Settings
deleteUsersCommandOnError=true
deleteUsersCommandOnSuccess=false
deleteUsersCommandOnTooFast=true
deleteUsersCommandOnWrongChannel=true

# Tokens
DISCORD_BOT_TOKEN=""

# Visual Settings
footerImg="https://ger-squad.community/images/styleLogo-mobile-370c44e9b3f240ce666358e1e299707154cda826.png"

# Do not change if you want to support me
author="©️ LeventHAN [https://github.com/11TStudio]"
```
 * `communityName` - Default For ger-squad.community
 * `screenShotTag` - Changes the tag name that the bots responds for searching stats of the players
 * `screenShotLeaderboardTag` - Changes the tag name that the bots responds for searching for specific clan stats of the players. `Usage example` -`!l TOP10 INF MONTH`
 * `prefix` - The symbol/letter that your bot will use, default is `!`.
 * `channelRestricted` - You can choose between `true` and `false`. `false`: Players can use the commands everywehere in the servr. `true`: Will check the channelID (see `statChannel`) and respond only for that room. It will promt an error if you use it elsewhere.
 * `statChannel` - The room/channelID that players can use the bot (only works if `channelRestricted=true`).
 * `deleteScreenShots` - Toggles the delete function of the bot on/off for the Player Stats Embed (`true`: on | `false`: off)
 * `deleteScreenShotsAfter` - Timeout for the delete in ms
 * `deleteUsersCommandOnError` - `true`(default) - `false` is vice-versa of `true`
 * `deleteUsersCommandOnSuccess` - `true`(default) - `false` is vice-versa of `true`
 * `deleteUsersCommandOnNotFound` - `true`(default) - `false` is vice-versa of `true`
 * `deleteUsersCommandOnTooFast` - `true`(default) - `false` is vice-versa of `true`
 * `deleteUsersCommandOnWrongChannel` - `true`(default) - `false` is vice-versa of `true`
 * `DISCORD_BOT_TOKEN` - Obvius your bot token. You can find out how to get it here: [How to make a bot and get token](https://www.writebots.com/discord-bot-token/).
 * `footerImg` - The little logo/image on the footer of each embed.
 * `author` - The text next to `footerImg`


## Commands and Examples
The following is a list of commands built into SquadJS, you can click their title for more information:

<details>
      <summary>screenShotTag [!s | !search]</summary>
      <h2>Search for players statistics</h2>
      <p>The <code>search</code> command will automatically screenshot the players stats from your stat page.</p>
      <h3>Example GIF</h3>
       <div align="center">
       <img src="https://i.gyazo.com/1f63c9f9f30d6afc7fdcc17590917584.gif" alt="Example !search"/>
       </div>
</details>
<details>
      <summary>screenShotLeaderboardTag [!l | !leaderboard]</summary>
      <h2>Search for specific clan's players statistics</h2>
      <p>The <code>sclan</code> command usage is as following: 
      <pre><code>
      !leaderboard [TOP10/TOP20/TOP30] [INF/VEH] [ALL/MONTH/WEEK]
      // OR
      !l [TOP10/TOP20/TOP30] [INF/VEH] [ALL/MONTH/WEEK]
      </code></pre>
      <h3>Example GIF</h3>
       <div align="center">
       <img src="https://i.gyazo.com/dd47b14a0ac13220eeb0887ea9f56df3.gif" alt="Example !leaderboard"/>
       </div>
</details>


## License
```
MIT License

Copyright (c) 2021 11T Studio

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

```
