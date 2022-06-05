const create = require('./create')
const findChannel = require('./findChannel')
const countMessages = require('./countMessages')

module.exports = async (client, message) => {
    const send = await countMessages(message.guild.id)
    if (!send) return

    const channel = await findChannel(message.guild.id) || message.channel.id

    return create(client, message.guild.id, channel)
}