const megadb = require('megadb')
const i18n = require('../../../../translate')('handler')

async function requiredArgs(message, command, props) {
    if(!command.args || (command.args && props.args.length > 0)) return false

    const folder = new megadb.crearDB(command.name, 'cooldown')

    await folder.establecer(message.member.user.id, Date.now() - ((command.cooldown - 3) * 1000))
    return message.reply(i18n.res('requiredArgs', props.lang))

}

module.exports = requiredArgs