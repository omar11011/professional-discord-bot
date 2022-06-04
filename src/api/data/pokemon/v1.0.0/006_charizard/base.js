const Pokemon = require('../../base')

module.exports = class Charizard extends Pokemon {
    constructor(props) {
        super(props)

        this._pokedex = 6
        this._type = props.type || "fuego/volador"
        this._increase = props.increase || "parabolico"
        this._gender = props.gender || { male: 87.5, female: 12.5 }
        this._friendship = props.friendship || 50
        this._stats = props.stats || {
            hp: 78,
            attack: 84,
            defense: 78,
            spattack: 109,
            spdefense: 85,
            speed: 100,
        }
        this._movements = props.movements || [
            ['aranazo', 1], ['grunido', 1], ['ascuas', 1], ['pantalla humo', 1], ['tajo aereo', 1], ['onda ignea', 1], ['garra dragon', 1],
            ['dragoaliento', 12],
            ['colmillo igneo', 19],
            ['cuchillada', 24],
            ['lanzallamas', 30],
            ['cara susto', 37],
            ['giro fuego', 46],
            ['infierno', 54],
            ['envite igneo', 62],
        ]
    }
}