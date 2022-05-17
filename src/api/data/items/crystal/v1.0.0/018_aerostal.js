const Crystal = require('../base')
const { volador } = require('../../../move_z')

module.exports = new Crystal({
    uuid: 18,
    name: "aerostal z",
    move_z: volador,
})