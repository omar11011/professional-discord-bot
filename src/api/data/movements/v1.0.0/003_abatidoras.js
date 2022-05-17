const Movement = require('../base')

const { planta } = require('../../types')
const { estado } = require('../../movement_class')

module.exports = new Movement({
    uuid: 3,
    name: "abatidoras",
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
            user: { speed: 1 },
            rival: {},
        },
    },
})