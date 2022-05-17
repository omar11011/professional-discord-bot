const Movement = require('../base')

const { planta } = require('../../types')
const { especial } = require('../../movement_class')

module.exports = new Movement({
    uuid: 5,
    name: "absorber",
    combat: {
        type: planta,
        class: especial,
        power: 20,
        precision: 100,
        effect: {
            user: {},
            rival: {},
        },
    },
    move_z: {
        type: planta,
        power: 100,
        effect: {
            user: {},
            rival: {},
        },
    },
})