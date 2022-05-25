const { join } = require('path')
const { readFileSync } = require('fs')
const { MessageEmbed, MessageAttachment } = require('discord.js')

module.exports = async props => {
    const options = {}
    const embed = new MessageEmbed()
        .setColor(props.color || 'RANDOM')

    if (props.title) embed.setTitle(String(props.title))
    if (props.author) {
        const opts = {}

        if (typeof props.author != 'object') opts.name = String(props.author)
        else {
            if (props.author.name) opts.name = String(props.author.name)
            if (props.author.iconURL) opts.iconURL = String(props.author.iconURL)
            if (props.author.url) opts.url = String(props.author.url)
        }
        
        if (opts.name) embed.setAuthor(opts)
    }
    if (props.description) embed.setDescription(String(props.description))
    if (props.fields) {
        for (let i = 0; i < props.fields.length; i++) embed.addField(props.fields[i].name, props.fields[i].value, props.fields[i].inline)
    }
    if (props.attachment) {
        const image = readFileSync(join(__dirname, "../../../../client/assets/img", props.attachment.dir, props.attachment.img))
        const attachment = new MessageAttachment(image, props.attachment.img)

        if (!props.attachment.position) props.attachment.position = 'image'
        if (props.attachment.position == 'image') embed.setImage(`attachment://${props.attachment.img}`)
        else if (props.attachment.position == 'thumb') embed.setThumbnail(`attachment://${props.attachment.img}`)

        options.files = [ attachment ]
    }
    if (props.footer) {
        const opts = {}

        if (typeof props.footer != 'object') opts.text = String(props.footer)
        else {
            if (props.footer.text) opts.text = String(props.footer.text)
            if (props.footer.iconURL) opts.iconURL = String(props.footer.iconURL)
        }

        if (opts.text) embed.setFooter(opts)
    }

    options.embeds = [ embed ]
    
    return options
}