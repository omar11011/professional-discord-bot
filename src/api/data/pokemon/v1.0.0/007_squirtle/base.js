const Pokemon = require('../../base')

module.exports = class Squirtle extends Pokemon {
    constructor(props) {
        super(props)

        this._pokedex = 7
        this._type = props.type || "agua"
        this._increase = props.increase || "parabolico"
        this._gender = props.gender || { male: 87.5, female: 12.5 }
        this._friendship = props.friendship || 50
        this._stats = props.stats || {
            hp: 44,
            attack: 48,
            defense: 65,
            spattack: 50,
            spdefense: 64,
            speed: 43,
        }
        this._movements = props.movements || [
            ['placaje', 1], ['latigo', 1],
            ['pistola agua', 3], 
            ['refugio', 6],
            ['giro rapido', 9],
            ['mordisco', 12],
            ['hidropulso', 15],
            ['proteccion', 18],
            ['danza lluvia', 21],
            ['acua cola', 24],
            ['rompecoraza', 27],
            ['defensa ferrea', 30],
            ['hidrobomba', 33],
            ['cabezazo', 36],
        ]
    }
}