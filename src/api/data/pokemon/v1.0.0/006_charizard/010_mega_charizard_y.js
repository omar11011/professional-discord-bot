const Charizard = require('./base')

module.exports = new Charizard({
    uuid: 10,
    name: "Mega Charizard Y",
    stats: {
        hp: 78,
        attack: 104,
        defense: 78,
        spattack: 159,
        spdefense: 115,
        speed: 100,
    },
    spawn: false,
})