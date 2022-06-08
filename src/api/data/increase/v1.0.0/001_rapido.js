const Increase = require('../base')

module.exports = new Increase({
    uuid: 1,
    name: "rapido",
    needExp: level => Math.round(4 * Math.pow(level, 3) / 5)
})