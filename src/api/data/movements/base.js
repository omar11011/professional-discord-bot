const { normal } = require('../types')
const { fisico } = require('../movement_class')

class Movement {
    constructor(props) {
        this.uuid = props.uuid || null
        this.name = props.name || undefined
        this.combat = {
            type: props.combat.type || normal,
            class: props.combat.class || fisico,
            power: props.combat.power || 0,
            precision: props.combat.precision || 100,
            priority: props.combat.priority || 0,
            effect: {
                user: {
                    attack: props.combat.effect.user.attack || 0,
                    defense: props.combat.effect.user.defense || 0,
                    speed: props.combat.effect.user.speed || 0,
                    spattack: props.combat.effect.user.spattack || 0,
                    spdefense: props.combat.effect.user.spdefense || 0,
                },
                rival: {
                    attack: props.combat.effect.rival.attack || 0,
                    defense: props.combat.effect.rival.defense || 0,
                    speed: props.combat.effect.rival.speed || 0,
                    spattack: props.combat.effect.rival.spattack || 0,
                    spdefense: props.combat.effect.rival.spdefense || 0,
                },
            },
        }
        this.move_z = {
            crystal: props.move_z.crystal || null,
            type: props.move_z.type || normal,
            power: props.move_z.power || 0,
            effect: {
                user: {
                    attack: props.move_z.effect.user.attack || 0,
                    defense: props.move_z.effect.user.defense || 0,
                    speed: props.move_z.effect.user.speed || 0,
                    spattack: props.move_z.effect.user.spattack || 0,
                    spdefense: props.move_z.effect.user.spdefense || 0,
                },
                rival: {
                    attack: props.move_z.effect.rival.attack || 0,
                    defense: props.move_z.effect.rival.defense || 0,
                    speed: props.move_z.effect.rival.speed || 0,
                    spattack: props.move_z.effect.rival.spattack || 0,
                    spdefense: props.move_z.effect.rival.spdefense || 0,
                },
            },
        }
    }
}

module.exports = Movement