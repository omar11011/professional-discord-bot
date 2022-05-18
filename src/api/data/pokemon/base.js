const { normal } = require('../types')

class Pet {
    constructor(props) {
        this.uuid = props.uuid || null
        this.pokedex = props.pokedex || null
        this.name = props.name || undefined
        this.type = props.type || [ normal ]
        this.gender = {
            male: props.gender ? (props.gender.male || 50) : 50,
            female: props.gender ? (props.gender.female || 50) : 50,
        }
        this.stats = {
            hp: props.stats ? (props.stats.hp || 30) : 30,
            attack: props.stats ? (props.stats.attack || 30) : 30,
            defense: props.stats ? (props.stats.defense || 30) : 30,
            speed: props.stats ? (props.stats.speed || 30) : 30,
            spattack: props.stats ? (props.stats.spattack || 30) : 30,
            spdefense: props.stats ? (props.stats.spdefense || 30) : 30,
        }
    }
}

module.exports = Pet