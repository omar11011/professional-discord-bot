const Command = require('../../util/class/Command')
const i18n = require('../../translate')('dict')

const { MessageEmbed } = require('discord.js')
const { user } = require('../../database')

module.exports = new Command({
    name: "balance",
    alias: ["bal"],
    cooldown: 4,
    run: async (client, message, props) => {
        const data = await user.revalidate({
            userId: message.member.user.id,
            username: message.member.user.username,
        })

        const embed = new MessageEmbed()
            .setColor('GREEN')
            .setAuthor({ name: data.username, iconURL: message.member.user.displayAvatarURL({ format: 'jpg' }) })
            .addFields(
                { name: i18n.res("money", props.lang), value: String(data.money), inline: true },
                { name: i18n.res("gems", props.lang), value: String(data.gems), inline: true },
            )

        return message.reply({ embeds: [ embed ] })
    }
})