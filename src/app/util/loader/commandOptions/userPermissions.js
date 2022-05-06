const { Permissions } = require('discord.js')
const i18n = require('../../../translate')('handler')

async function userPermissions(message, command, props) {

    if(command.permissions.user.length < 1) return false
    
    const missing = []

    command.permissions.user.forEach(i => {
        if(!message.member.permissions.has(Permissions.FLAGS[i])) missing.push(i)
    })

    if(missing.length < 1) return false

    await message.channel.send(i18n.res('userPermissions', props.lang, { permissions: missing.join(", ") }))
    return true

}

module.exports = userPermissions