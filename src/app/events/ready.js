const figlet = require('figlet')
const Event = require('../util/class/Event')

module.exports = new Event({
    name: "ready",
    run: async client => {
        
        client.user.setPresence({
            activities: [{ name: '!help', type: 'PLAYING' }],
            status: 'on',
        })
    
        figlet(client.bot.name, (err, data) => {
            if(err) return console.log('Ocurrió el siguiente error: ' + err)
                
            console.log(data + ' v' + client.bot.version)
        })
    
    }
})