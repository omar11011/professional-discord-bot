const { pokemon } = require('../../../database')

module.exports = async (props, xp) => {
    props.xp += xp

    if (props.xp >= props.needExp) {
        props.xp -= props.needExp
        props.level += 1

        let evolutions = (await pokemon.getPerName(props.pokemon)).evolutions.level
        evolutions = evolutions.filter(e => props.level >= e.level)

        if (evolutions.length > 0) {
            let forms = evolutions.filter(e => Object.keys(e).includes('male') || Object.keys(e).includes('region'))

            if (forms.length == 0) forms = evolutions
            else {
                forms = forms.filter(e => {
                    if (e.region && e.region == props.region) return e
                    else if (Object.keys(e).includes('male') && ((e.male && props.gender == 'male') || (!e.male && props.gender == 'female'))) return e
                })
            }
            
            if (forms.length > 0) {
                const form = forms[Math.floor(Math.random() * forms.length)].pokemon
                const evolution = await pokemon.getPerName(form)
                
                props.pokemonId = evolution.uuid
                props.pokemon = evolution.name
            }
        }
    }

    return props
}