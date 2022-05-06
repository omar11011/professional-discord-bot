const bot = require('../../../config')
const i18n = require('../../../translate')('handler')

async function ownerOnly(message, command, props) {
    
    if(!command.ownerOnly) return false
    
    if(bot.developers.includes(message.member.user.id)) return false
    else {
        message.channel.send(i18n.res("ownerOnly", props.lang))
        return true
    }

}

module.exports = ownerOnly