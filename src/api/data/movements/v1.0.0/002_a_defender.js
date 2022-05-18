const Movement = require('../base')

module.exports = new Movement({
    uuid: 2,
    name: "a defender",
    combat: {
        type: "bicho",
        class: "estado",
        effect: {
            user: { defense: 1, spdefense: 1 },
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