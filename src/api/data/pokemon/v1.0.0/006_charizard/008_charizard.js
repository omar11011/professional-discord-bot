const Charizard = require('./base')

module.exports = new Charizard({
    uuid: 8,
    name: "Charizard",
    evolutions: {
        mega: [
            { pokemon: 'Mega Charizard X', item: 'charizardita x' },
            { pokemon: 'Mega Charizard Y', item: 'charizardita y' },
        ],
        giga: { pokemon: 'Charizard Gigamax' },
    },
})