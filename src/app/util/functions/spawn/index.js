const create = require('./create')
const countMessages = require('./countMessages')

module.exports = async (client, message) => {
    const send = await countMessages(message.guild.id)
    if (!send) return

    return create(client, message.guild.id, message.channel.id)
}