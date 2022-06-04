const Blastoise = require('./base')

module.exports = new Blastoise({
    uuid: 14,
    name: "Blastoise",
    evolutions: {
        mega: { pokemon: 'Mega Blastoise', item: 'blastoisita' },
        giga: { pokemon: 'Blastoise Gigamax' },
    },
})