const Crystal = require('../base')
const { agua } = require('../../../move_z')

module.exports = new Crystal({
    uuid: 2,
    name: "hidrostal z",
    move_z: agua,
})