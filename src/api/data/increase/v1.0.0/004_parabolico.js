const Increase = require('../base')

module.exports = new Increase({
    uuid: 4,
    name: "parabolico",
    needExp: level => Math.round((6 * Math.pow(level, 3) / 5) - (15 * Math.pow(level, 2)) + (100 * level) - 140)
})