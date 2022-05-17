const Movement = require('../base')

const { veneno } = require('../../types')
const { especial } = require('../../movement_class')

module.exports = new Movement({
    uuid: 6,
    name: "acido",
    combat: {
        type: veneno,
        class: especial,
        power: 40,
        effect: {
            user: {},
            rival: { spdefense: -1 },
        },
    },
    move_z: {
        type: veneno,
        power: 100,
        effect: {
            user: {},
            rival: {},
        },
    },
})