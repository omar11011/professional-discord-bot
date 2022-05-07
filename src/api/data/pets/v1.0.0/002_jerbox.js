const Pet = require('../base')

const { lucha } = require('../../types')

module.exports = new Pet({
    uuid: 2,
    name: 'Jerbox',
    type: [ lucha ],
    stats: {
        hp: 50,
        attack: 60,
        defense: 55,
        speed: 40,
        spattack: 35,
        spdefense: 30,
    },
})