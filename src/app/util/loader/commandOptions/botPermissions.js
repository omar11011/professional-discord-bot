const { Permissions } = require('discord.js')
const i18n = require('../../../../translate')('handler')

async function botPermissions(message, command, props) {

    if(command.permissions.bot.length < 1) return false
    
    const missing = []

    command.permissions.bot.forEach(i => {
        if(!message.guild.me.permissions.has(Permissions.FLAGS[i])) missing.push(i)
    })

    if(missing.length < 1) return false

    message.reply(i18n.res('botPermissions', props.lang, { permissions: missing.join(", ") }))
    return true

}

module.exports = botPermissions