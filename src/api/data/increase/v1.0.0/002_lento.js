const Increase = require('../base')

module.exports = new Increase({
    uuid: 2,
    name: "lento",
    needExp: level => Math.round(5 * Math.pow(level, 3) / 4)
})