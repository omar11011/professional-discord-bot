const Charmeleon = require('./base')

module.exports = new Charmeleon({
    uuid: 7,
    name: "Charmeleon",
    evolutions: {
        level: { pokemon: 'Charizard', level: 36 },
    },
})