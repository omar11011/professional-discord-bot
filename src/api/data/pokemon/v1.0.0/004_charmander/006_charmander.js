const Charmander = require('./base')

module.exports = new Charmander({
    uuid: 6,
    name: "Charmander",
    evolutions: {
        level: { pokemon: 'Charmeleon', level: 16 },
    },
})