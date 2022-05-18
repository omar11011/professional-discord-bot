const Movement = require('../base')

module.exports = new Movement({
    uuid: 5,
    name: "absorber",
    combat: {
        type: "planta",
        class: "especial",
        power: 20,
        effect: {
            user: {},
            rival: {},
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