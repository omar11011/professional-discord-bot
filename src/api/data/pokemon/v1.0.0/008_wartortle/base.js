const Pokemon = require('../../base')

module.exports = class Wartortle extends Pokemon {
    constructor(props) {
        super(props)

        this._pokedex = 8
        this._type = props.type || "agua"
        this._increase = props.increase || "parabolico"
        this._gender = props.gender || { male: 87.5, female: 12.5 }
        this._friendship = props.friendship || 50
        this._stats = props.stats || {
            hp: 59,
            attack: 63,
            defense: 80,
            spattack: 65,
            spdefense: 80,
            speed: 58,
        }
        this._movements = props.movements || [
            ['placaje', 1], ['latigo', 1], ['pistola agua', 1], ['refugio', 1],
            ['giro rapido', 9],
            ['mordisco', 12],
            ['hidropulso', 15],
            ['proteccion', 20],
            ['danza lluvia', 25],
            ['acua cola', 30],
            ['rompecoraza', 35],
            ['defensa ferrea', 40],
            ['hidrobomba', 45],
            ['cabezazo', 50],
        ]
    }
}