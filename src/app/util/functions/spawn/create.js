const megadb = require('megadb')
const db = new megadb.crearDB('pokemon', 'spawn')

const embed = require('../embed/create')
const spawn = require('../../../database/pokemon/spawn')

module.exports = async (client, server, channel) => {
    const { name } = await spawn()

    await db.establecer(`${server}-${channel}`, name)

    const Embed = await embed({
        description: '¿Quién es este pokémon?',
        attachment: { dir: 'pokemon', img: name + '.png' },
        footer: `Responde correctamente el nombre de este pokémon con el comando catch para atraparlo.`,
    })

    return client.channels.cache.get(channel).send(Embed)
}