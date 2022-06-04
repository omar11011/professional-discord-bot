const Charizard = require('./base')

module.exports = new Charizard({
    uuid: 9,
    name: "Mega Charizard X",
    type: "fuego/dragon",
    stats: {
        hp: 78,
        attack: 130,
        defense: 111,
        spattack: 130,
        spdefense: 85,
        speed: 100,
    },
    spawn: false,
})