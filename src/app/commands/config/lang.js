const Command = require('../../util/class/Command')
const i18n = require('../../../translate')('commands/config')

const megadb = require('megadb')
const lang_db = new megadb.crearDB('lang', 'config')

module.exports = new Command({
    name: "lang",
    alias: ["lenguaje", "idioma"],
    run: async (client, message, props) => {
        if (props.args.length == 0) return message.reply(i18n.res("lang.langs", props.lang, { options: i18n.locales.join(", ") }))

        const newLang = props.args[0].toLowerCase()

        if (!i18n.locales.includes(newLang)) return message.reply(i18n.res("lang.langs", props.lang, { content: i18n.locales.join(", ") }))

        if (newLang != client.bot.lang) await lang_db.establecer(message.member.user.id, newLang)
        else await lang_db.eliminar(message.member.user.id)

        return message.reply(i18n.res("lang.success", newLang))
    }
})