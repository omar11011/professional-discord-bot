const Pet = require('../base')

const { psiquico } = require('../../types')

module.exports = new Pet({
    uuid: 1,
    name: 'Urbinyan',
    type: [ psiquico ],
    stats: {
        hp: 40,
        attack: 55,
        defense: 55,
        speed: 35,
        spattack: 45,
        spdefense: 40,
    },
})