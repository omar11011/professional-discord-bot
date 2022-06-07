const Pokemon = require('../../base')

module.exports = class Ivysaur extends Pokemon {
    constructor(props) {
        super(props)

        this._pokedex = 2
        this._type = props.type || "planta/veneno"
        this._increase = props.increase || "parabolico"
        this._friendship = props.friendship || 50
        this._stats = props.stats || {
            hp: 60,
            attack: 62,
            defense: 63,
            spattack: 80,
            spdefense: 80,
            speed: 60,
        }
        this._movements = props.movements || [
            ['placaje', 1], ['grunido', 1], ['latigo cepa', 1], ['desarrollo', 1],
            ['drenadoras', 9],
            ['hoja afilada', 12],
            ['polvo veneno', 15], ['somnifero', 15],
            ['bomba germen', 20],
            ['derribo', 25],
            ['dulce aroma', 30],
            ['sintesis', 35],
            ['abatidoras', 40],
            ['doble filo', 45],
            ['rayo solar', 50],
        ]
    }
}