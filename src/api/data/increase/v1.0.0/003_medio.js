const Increase = require('../base')

module.exports = new Increase({
    uuid: 3,
    name: "medio",
    needExp: level => Math.round(Math.pow(level, 3))
})