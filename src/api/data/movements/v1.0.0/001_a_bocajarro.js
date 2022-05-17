const Movement = require('../base')

const { lucha } = require('../../types')
const { fisico } = require('../../movement_class')

module.exports = new Movement({
    uuid: 1,
    name: "a bocajarro",
    combat: {
        type: lucha,
        class: fisico,
        power: 100,
        effect: {
            user: { defense: -1, spdefense: -1 },
            rival: {},
        },
    },
    move_z: {
        type: lucha,
        power: 190,
        effect: {
            user: {},
            rival: {},
        },
    },
})