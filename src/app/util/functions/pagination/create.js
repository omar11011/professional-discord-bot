const getRow = require('./getRow')

module.exports = async (message, embeds) => {
    const pages = {}
    const id = message.member.user.id

    embeds = embeds.map(e => e.embeds)
    pages[id] = pages[id] || 0
    
    const embed = embeds[pages[id]][0]
    const filter = i => i.member.user.id === message.member.user.id
    const time = 1000 * 60 * 5

    reply = await message.reply({
        embeds: [ embed ],
        components: [getRow(id, embeds, pages)]
    })
    collector = message.channel.createMessageComponentCollector({ filter, time })

    collector.on('collect', async btnInt => {
        if (!btnInt) return
        btnInt.deferUpdate()
            
        if (
            btnInt.customId !== 'prev_embed' &&
            btnInt.customId !== 'next_embed' &&
            btnInt.customId !== 'end_embed' &&
            btnInt.customId !== 'initial_embed'
        ) return

        if (btnInt.customId === 'initial_embed' && pages[id] > 0) pages[id] = 0
        else if (btnInt.customId === 'prev_embed' && pages[id] > 0) pages[id] -= 1
        else if (btnInt.customId === 'next_embed' && pages[id] < embeds.length - 1) pages[id] += 1
        else if (btnInt.customId === 'end_embed' && pages[id] < embeds.length - 1) pages[id] = embeds.length - 1
        
        await reply.edit({
            embeds: embeds[pages[id]],
            components: [getRow(id, embeds, pages)],
        })
    })
}