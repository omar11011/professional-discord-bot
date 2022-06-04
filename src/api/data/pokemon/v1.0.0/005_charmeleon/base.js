const Pokemon = require('../../base')

module.exports = class Charmeleon extends Pokemon {
    constructor(props) {
        super(props)

        this._pokedex = 5
        this._type = props.type || "fuego"
        this._increase = props.increase || "parabolico"
        this._gender = props.gender || { male: 87.5, female: 12.5 }
        this._friendship = props.friendship || 50
        this._stats = props.stats || {
            hp: 58,
            attack: 64,
            defense: 58,
            spattack: 80,
            spdefense: 65,
            speed: 80,
        }
        this._movements = props.movements || [
            ['aranazo', 1], ['grunido', 1], ['ascuas', 1], ['pantalla humo', 1],
            ['dragoaliento', 12],
            ['colmillo igneo', 19],
            ['cuchillada', 24],
            ['lanzallamas', 30],
            ['cara susto', 37],
            ['giro fuego', 42],
            ['infierno', 48],
            ['envite igneo', 54],
        ]
    }
}