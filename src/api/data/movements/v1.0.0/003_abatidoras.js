const Movement = require('../base')

module.exports = new Movement({
    uuid: 3,
    name: "abatidoras",
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
            user: { speed: 1 },
            rival: {},
        },
    },
})