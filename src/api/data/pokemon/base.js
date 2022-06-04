const items = require('../items')
const types = require('../types')
const regions = require('../regions')
const movements = require('../movements')
const increase = require('../increase')

module.exports = class Pokemon {
    constructor(props) {
        this._uuid = props.uuid
        this._pokedex = props.pokedex || '???'
        this._name = props.name ? props.name.trim() : null
        this._region = props.region ? props.region.toLowerCase() : "kanto"
        this._type = (props.type ? props.type.toLowerCase() : "normal").split("/")
        this._increase = props.increase ? props.increase.toLowerCase() : "medio"
        this._gender = props.gender || {}
        this._friendship = props.friendship || 70
        this._movements = props.movements || []
        this._stats = props.stats
        this._evolutions = props.evolutions ? props.evolutions : {}
        this._spawn = props.spawn != null ? props.spawn : true
    }

    get uuid() {
        return this._uuid
    }
    get pokedex() {
        return this._pokedex
    }
    get name() {
        return this._name
    }
    get region() {
        return regions.find(e => e.name == this._region)
    }
    get type() {
        return types.filter(e => this._type.includes(e.name))
    }
    get increase() {
        return increase.find(e => e.name == this._increase)
    }
    get gender() {
        if (!this._gender.male) this._gender.male = 0
        if (!this._gender.female) this._gender.female = 0

        if (this._gender.male > 0) this._gender.female = 100 - this._gender.male
        if (this._gender.female > 0) this._gender.male = 100 - this._gender.female
        if (this._gender.male + this._gender.female > 100) this._gender.male = this._gender.female = 50

        return this._gender
    }
    get friendship() {
        return this._friendship
    }
    get movements() {
        return movements.filter(m => this._movements.map(e => e[0].trim().toLowerCase()).includes(m.name)).map(e => {
            e.level = this._movements.find(m => e.name == m[0])[1]
            return e
        })
    }
    get stats() {
        const value = 30
        
        if (!this._stats.hp) this._stats.hp = value
        if (!this._stats.attack) this._stats.attack = value
        if (!this._stats.defense) this._stats.defense = value
        if (!this._stats.spattack) this._stats.spattack = value
        if (!this._stats.spdefense) this._stats.spdefense = value
        if (!this._stats.speed) this._stats.speed = value
        
        return this._stats
    }
    get evolutions() {
        const types = ['level', 'item', 'mega', 'giga', 'friendship']

        for (let i = 0; i < types.length; i++) {
            if (!this._evolutions[types[i]]) this._evolutions[types[i]] = []
            if (!Array.isArray(this._evolutions[types[i]])) this._evolutions[types[i]] = [ this._evolutions[types[i]] ]
        }

        if (this._evolutions.item.length > 0) {
            for (let i = 0; i < this._evolutions.item.length; i++) {
                if (this._evolutions.item[i].item != null) this._evolutions.item[i].item = items.find(e => e.name == this._evolutions.item[i].item)
            }
        }
        if (this._evolutions.mega.length > 0) {
            for (let i = 0; i < this._evolutions.mega.length; i++) {
                if (this._evolutions.mega[i].item != null) this._evolutions.mega[i].item = items.find(e => e.name == this._evolutions.mega[i].item)
            }
        }

        return this._evolutions
    }
    get spawn() {
        return this._spawn
    }
}