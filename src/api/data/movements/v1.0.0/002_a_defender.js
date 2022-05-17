const Movement = require('../base')

const { bicho } = require('../../types')
const { estado } = require('../../movement_class')

module.exports = new Movement({
    uuid: 2,
    name: "a defender",
    combat: {
        type: bicho,
        class: estado,
        effect: {
            user: { defense: 1, spdefense: 1 },
            rival: {},
        },
    },
    move_z: {
        type: bicho,
        effect: {
            user: { defense: 1 },
            rival: {},
        },
    },
})