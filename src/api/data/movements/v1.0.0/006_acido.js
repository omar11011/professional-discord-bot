const Movement = require('../base')

module.exports = new Movement({
    uuid: 6,
    name: "acido",
    combat: {
        type: "veneno",
        class: "especial",
        power: 40,
        effect: {
            user: {},
            rival: { spdefense: -1 },
        },
    },
    move_z: {
        power: 100,
        effect: {
            user: {},
            rival: {},
        },
    },
})