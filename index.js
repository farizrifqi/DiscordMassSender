const discord = require("discord.js-self")
const Client = new discord.Client()

Client.config = require('./config');
Client.funct = require('./func'); //https://github.com/farizrifqi/myOwnLib
let {convertDay, timeImprove} = Client.funct

Client.on('ready', async ()=>{
	console.clear()
    	console.log(`MassSend ready, logged as: ${Client.user.tag}\n\n`)
		Client.config.channels.forEach(async (data) => {
			let date_ob = new Date();
			var message = "🔴 **LIVE**\n\n"+Client.config.message.title+" - *"+convertDay(date_ob.getDay(), false)+", "+timeImprove(date_ob, "date")+"*\n"+Client.config.message.link
			await Client.channels.cache.get(data).send(message).then(i => {
				console.log('Sent to '+i.channel.guild.name+' - #'+i.channel.name)
			});
		})
})
Client.login(Client.config.token)
