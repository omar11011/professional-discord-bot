const Movement = require('../base')

module.exports = new Movement({
    uuid: 1,
    name: "a bocajarro",
    combat: {
        type: "lucha",
        class: "fisico",
        power: 100,
        effect: {
            user: { defense: -1, spdefense: -1 },
            rival: {},
        },
    },
    move_z: {
        power: 190,
        effect: {
            user: {},
            rival: {},
        },
    },
})