const Pokemon = require('../../base')

module.exports = class Venusaur extends Pokemon {
    constructor(props) {
        super(props)

        this._pokedex = 3
        this._type = props.type || "planta/veneno"
        this._increase = props.increase || "parabolico"
        this._gender = props.gender || { male: 87.5, female: 12.5 }
        this._friendship = props.friendship || 50
        this._stats = props.stats || {
            hp: 80,
            attack: 82,
            defense: 83,
            spattack: 100,
            spdefense: 100,
            speed: 80,
        }
        this._movements = props.movements || [
            ['placaje', 1], ['grunido', 1], ['latigo cepa', 1], ['desarrollo', 1], ['danza petalo', 1], ['tormental floral', 1],
            ['drenadoras', 9],
            ['hoja afilada', 12],
            ['polvo veneno', 15], ['somnifero', 15],
            ['bomba germen', 20],
            ['derribo', 25],
            ['dulce aroma', 30],
            ['sintesis', 37],
            ['abatidoras', 44],
            ['doble filo', 51],
            ['rayo solar', 58],
        ]
    }
}