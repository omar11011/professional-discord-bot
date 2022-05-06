const { join } = require('path')
const { readFileSync, readdir } = require('fs')
const { MessageEmbed, MessageAttachment } = require('discord.js')

const randomImage = async (message, command, msg) => {
    readdir(join(__dirname, "../img/" + command), async (err, folder) => {
        if(folder.length < 1) return

        const result = folder[Math.floor(Math.random() * folder.length)]
        const image = readFileSync(join(__dirname, "../img/" + command +'/' + result))
        const attachment = new MessageAttachment(image, result)

        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setDescription(String(msg))
            .setImage(`attachment://${result}`)

        await message.reply({ embeds: [embed], files: [ attachment ] })
    })
}

module.exports = randomImage