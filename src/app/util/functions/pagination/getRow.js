const { MessageActionRow, MessageButton } = require('discord.js')

module.exports = (id, embeds, pages) => {
    const row = new MessageActionRow()

    if (embeds.length > 2) row.addComponents(
        new MessageButton()
            .setCustomId('initial_embed')
            .setStyle('SECONDARY')
            .setEmoji('⏮️')
            .setDisabled(pages[id] === 0)
    )

    if (embeds.length > 1) row.addComponents(
        new MessageButton()
            .setCustomId('prev_embed')
            .setStyle('SECONDARY')
            .setEmoji('⬅️')
            .setDisabled(pages[id] === 0)
    )

    if (embeds.length > 1) row.addComponents(
        new MessageButton()
            .setCustomId('next_embed')
            .setStyle('SECONDARY')
            .setEmoji('➡️')
            .setDisabled(pages[id] === embeds.length - 1)
    )

    if (embeds.length > 2) row.addComponents(
        new MessageButton()
            .setCustomId('end_embed')
            .setStyle('SECONDARY')
            .setEmoji('⏭️')
            .setDisabled(pages[id] === embeds.length - 1)
    )

    return row
}