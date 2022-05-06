const megadb = require('megadb')
const i18n = require('../../../translate')('handler')

async function cooldown(message, command, props) {

    const folder = new megadb.crearDB(command.name, 'cooldown')
    const data = await folder.obtener(message.member.user.id)

    if(!data) {
        await folder.establecer(message.member.user.id, Date.now())
        return false
    }

    const timeElapsed = Math.floor((Date.now() - data) / 1000)
    const missingTime = command.cooldown - timeElapsed

    if(missingTime <= 0) {
        await folder.establecer(message.member.user.id, Date.now())
        return false
    }
    
    await message.reply(i18n.res('cooldown', props.lang, { time: missingTime }))
        .then(e => {
            setTimeout(async () => {
                try {
                    await e.delete()
                } catch(err) {
                    console.log(err)
                }
            }, 4000)
        })
    return true

}

module.exports = cooldown