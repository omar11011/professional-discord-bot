const path = require('path')
const client = require('../../class/Client')

const loadCommands = require('./command')
const loadEvents = require('./event')

function load(route) {

    try {
        loadCommands(client, path.join(route, '/commands'))
        loadEvents(client, path.join(route, '/events'))
    } catch(err) {
        return console.log(err)
    }

}

module.exports = load