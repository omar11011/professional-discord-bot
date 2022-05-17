const Crystal = require('../base')
const { electrico } = require('../../../move_z')

module.exports = new Crystal({
    uuid: 5,
    name: "electrostal z",
    move_z: electrico,
})