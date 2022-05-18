const Movement = require('../base')

module.exports = new Movement({
    uuid: 4,
    name: "absorbefuerza",
    combat: {
        type: "planta",
        class: "estado",
        effect: {
            user: {},
            rival: {},
        },
    },
    move_z: {
        effect: {
            user: { defense: 1 },
            rival: {},
        },
    },
})