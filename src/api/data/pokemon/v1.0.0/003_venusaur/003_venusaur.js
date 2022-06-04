const Venusaur = require('./base')

module.exports = new Venusaur({
    uuid: 3,
    name: "Venusaur",
    evolutions: {
        mega: { pokemon: 'Mega Venusaur', item: 'venusaurita' },
        giga: { pokemon: 'Venusaur Gigamax' },
    },
})