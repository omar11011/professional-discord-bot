const { readdirSync } = require('fs')

function loadCommands(client, route) {

    client.commands = []

    readdirSync(route).map(sub => {
        readdirSync(`${route}/${sub}/`).map(commands => {
            let command = require(`${route}/${sub}/${commands}`)
            client.commands.push(command)
        })
    })

}

module.exports = loadCommands