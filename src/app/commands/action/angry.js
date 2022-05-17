const Command = require('../../util/class/Command')
const i18n = require('../../../translate')('commands/action')
const randomImage = require('../../util/functions/randomImage')

module.exports = new Command({
    name: "angry",
    alias: ["enojarse"],
    run: async (client, message, props) => {
        const mention = message.mentions.users.first()
        const msg = i18n.res("angry." + (mention ? "mention" : "only"), props.lang, {
            user: message.author.username,
            mention: mention ? mention.username : null,
        })
        
        return await randomImage(message, "angry", msg)
    }
})