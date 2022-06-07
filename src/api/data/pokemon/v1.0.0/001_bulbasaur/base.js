const Pokemon = require('../../base')

module.exports = class Bulbasaur extends Pokemon {
    constructor(props) {
        super(props)

        this._pokedex = 1
        this._type = props.type || "planta/veneno"
        this._increase = props.increase || "parabolico"
        this._friendship = props.friendship || 50
        this._stats = props.stats || {
            hp: 45,
            attack: 49,
            defense: 49,
            spattack: 65,
            spdefense: 65,
            speed: 45,
        }
        this._movements = props.movements || [
            ['placaje', 1], ['grunido', 1],
            ['latigo cepa', 3],
            ['desarrollo', 6],
            ['drenadoras', 9],
            ['hoja afilada', 12],
            ['polvo veneno', 15], ['somnifero', 15],
            ['bomba germen', 18],
            ['derribo', 21],
            ['dulce aroma', 24],
            ['sintesis', 27],
            ['abatidoras', 30],
            ['doble filo', 33],
            ['rayo solar', 36],
        ]
    }
}