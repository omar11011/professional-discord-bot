const Ring = require('./base')
const data = JSON.parse(JSON.stringify(require('./data')))

module.exports = data.map(e => new Ring(e))