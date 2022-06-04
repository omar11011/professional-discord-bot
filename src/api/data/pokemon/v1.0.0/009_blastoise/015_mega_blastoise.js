const Blastoise = require('./base')

module.exports = new Blastoise({
    uuid: 15,
    name: "Mega Blastoise",
    stats: {
        hp: 79,
        attack: 103,
        defense: 120,
        spattack: 135,
        spdefense: 115,
        speed: 78,
    },
    spawn: false,
})