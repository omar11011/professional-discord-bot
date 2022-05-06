const Television = require('./base')
const data = JSON.parse(JSON.stringify(require('./data')))

module.exports = data.map(e => new Television(e))