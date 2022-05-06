const { readdirSync } = require('fs')

function loadEvent(client, route) {

    for(const file of readdirSync(route)) {
        if (file.endsWith('.js')) {
            const event = require(`${route}/${file}`)
            
            client.on(event.name, event.run.bind(null, client))
        }
    }

}

module.exports = loadEvent