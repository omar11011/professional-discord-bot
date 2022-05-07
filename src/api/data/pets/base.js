class Pet {
    constructor(props) {
        this.uuid = props.uuid || null
        this.name = props.name || undefined
        this.type = props.type || null
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