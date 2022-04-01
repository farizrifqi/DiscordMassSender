# DiscordMassSender
Bulk message sender for Discord. I create this to post my streamlink in many discord servers.

## Preview
Discord

<img src="https://cdn.discordapp.com/attachments/831620169011953714/959467175633121320/unknown.png" width="500"/>

Terminal

<img src="https://cdn.discordapp.com/attachments/831620169011953714/959467502000283668/unknown.png" width="500"/>

## Requirements
NodeJS module: <a href="https://www.npmjs.com/package/discord.js-self" target="_blank">discord.js-self</a>

My own module: <a href="https://github.com/farizrifqi/myOwnLib/blob/main/modules/time.js" target="_blank">time.js</a>

## Install
run `npm i discordjs-self`

## Config
`token` fill with ur own token. Get it from chrome dev console by debugging a post/get **discord web app** request. Or see <a href="https://www.youtube.com/watch?v=YEgFvgg7ZPI" target="_blank">this video</a>

`channel` fill channel id. Get it by turning on **Developer Mode** on Discord, and just do *right-click > Copy Id* on discord text channel. Or see <a href="https://www.youtube.com/watch?v=NLWtSHWKbAI" target="_blank">this video</a>

*those videos are not mine*

## Note
You need my time.js (above) as the func.js file on **index.js:5**
