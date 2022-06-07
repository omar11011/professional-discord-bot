const Pokemon = require('../../base')

module.exports = class Charmander extends Pokemon {
    constructor(props) {
        super(props)

        this._pokedex = 4
        this._type = props.type || "fuego"
        this._increase = props.increase || "parabolico"
        this._friendship = props.friendship || 50
        this._stats = props.stats || {
            hp: 39,
            attack: 52,
            defense: 43,
            spattack: 60,
            spdefense: 50,
            speed: 65,
        }
        this._movements = props.movements || [
            ['aranazo', 1], ['grunido', 1],
            ['ascuas', 4],
            ['pantalla humo', 8],
            ['dragoaliento', 12],
            ['colmillo igneo', 17],
            ['cuchillada', 20],
            ['lanzallamas', 24],
            ['cara susto', 28],
            ['giro fuego', 32],
            ['infierno', 36],
            ['envite igneo', 40],
        ]
    }
}