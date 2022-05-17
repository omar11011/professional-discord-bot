const Movement = require('../base')

const { planta } = require('../../types')
const { estado } = require('../../movement_class')

module.exports = new Movement({
    uuid: 4,
    name: "absorbefuerza",
    combat: {
        type: planta,
        class: estado,
        effect: {
            user: {},
            rival: {},
        },
    },
    move_z: {
        type: planta,
        effect: {
            user: { defense: 1 },
            rival: {},
        },
    },
})