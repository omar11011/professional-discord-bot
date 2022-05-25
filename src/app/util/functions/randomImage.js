const { join } = require('path')
const { readdir } = require('fs')
const createEmbed = require('./embed/create')

const randomImage = async (message, command, msg) => {
    readdir(join(__dirname, "../../../client/assets/img", command), async (err, folder) => {
        if (folder.length < 1) return

        const result = folder[Math.floor(Math.random() * folder.length)]
        const embed = await createEmbed({
            description: String(msg),
            attachment: { dir: command, img: result },
        })

        await message.reply(embed)
    })
}

module.exports = randomImage