const Pokemon = require('../../base')

module.exports = class Blastoise extends Pokemon {
    constructor(props) {
        super(props)

        this._pokedex = 9
        this._type = props.type || "agua"
        this._increase = props.increase || "parabolico"
        this._gender = props.gender || { male: 87.5, female: 12.5 }
        this._friendship = props.friendship || 50
        this._stats = props.stats || {
            hp: 79,
            attack: 83,
            defense: 100,
            spattack: 85,
            spdefense: 105,
            speed: 78,
        }
        this._movements = props.movements || [
            ['placaje', 1], ['latigo', 1], ['pistola agua', 1], ['refugio', 1], ['foco resplandor', 1],
            ['giro rapido', 9],
            ['mordisco', 12],
            ['hidropulso', 15],
            ['proteccion', 20],
            ['danza lluvia', 25],
            ['acua cola', 30],
            ['rompecoraza', 35],
            ['defensa ferrea', 42],
            ['hidrobomba', 49],
            ['cabezazo', 56],
        ]
    }
}