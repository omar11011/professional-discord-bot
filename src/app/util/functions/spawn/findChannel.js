const megadb = require('megadb')
const channels_db = new megadb.crearDB('channels', 'spawn')

module.exports = async server => await channels_db.obtener(server)