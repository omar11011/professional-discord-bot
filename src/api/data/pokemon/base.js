const types = require('../types')
const regions = require('../regions')
const eggGroups = require('../egg_groups')
const movements = require('../movements')

class Pet {
    constructor(props) {
        this.uuid = props.uuid || null
        this.pokedex = props.pokedex || null
        this.name = props.name || undefined
        this.region = regions.find(e => e.name == (props.region.toLowerCase() || "kanto"))
        this.type = types.filter(e => (props.type || ["normal"]).includes(e.name))
        this.eggGroup = eggGroups.filter(e => (props.eggGroup || ["campo"]).includes(e.name))
        this.gender = {
            male: props.gender.male || 50,
            female: props.gender.female || 50,
        }
        this.capture = props.capture || 45
        this.friendship = props.friendship || 70
        this.movements = (movements.filter(e  => props.movements.map(m => m[0].toLowerCase()).includes(e.name))).map(e => {
            e.level = props.movements.map(m => m[1])[0]
            return e
        })
        this.stats = {
            hp: props.stats.hp || 30,
            attack: props.stats.attack || 30,
            defense: props.stats.defense || 30,
            speed: props.stats.speed || 30,
            spattack: props.stats.spattack || 30,
            spdefense: props.stats.spdefense || 30,
        }
        this.evolution = {
            level: props.evolution.level,
        }
    }
}

module.exports = Pet