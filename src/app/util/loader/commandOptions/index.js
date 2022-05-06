const ownerOnly = require('./ownerOnly')
const enabled = require('./enabled')
const botPermissions = require('./botPermissions')
const userPermissions = require('./userPermissions')
const cooldown = require('./cooldown')
const requiredArgs = require('./requiredArgs')

async function load(message, command, props) {

    if(await enabled(message, command, props)) return true
    else if(await ownerOnly(message, command, props)) return true
    else if(await botPermissions(message, command, props)) return true
    else if(await userPermissions(message, command, props)) return true
    else if(await cooldown(message, command, props)) return true
    else if(await requiredArgs(message, command, props)) return true
    
    return false

}

module.exports = load