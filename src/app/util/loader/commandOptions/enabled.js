const bot = require('../../../config')
const i18n = require('../../../../translate')('handler')

async function enabled(message, command, props) {
    
    if(command.enabled) return false

    if(bot.developers.includes(message.member.user.id)) return false
    else {
        message.channel.send(i18n.res('enabled', props.lang))
        return true
    }

}

module.exports = enabled