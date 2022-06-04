const megadb = require('megadb')
const db = new megadb.memoDB('count-spawn')

module.exports = async server => {
    const limit = 5
    const count = (await db.obtener(server) || 0) + 1

    if (count >= limit) {
        await db.eliminar(server)
        return true
    }
    else {
        await db.establecer(server, count)
        return false
    }
}