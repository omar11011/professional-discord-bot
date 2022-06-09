const { pokemon } = require('../../../database')

module.exports = async (props, points) => {
    props.friendship += points

    const evolutions = ((await pokemon.getPerName(props.pokemon)).evolutions.friendship).filter(e => props.friendship >= e.points)
    
    if (evolutions.length > 0) {
        const form = evolutions[Math.floor(Math.random() * evolutions.length)].pokemon
        const evolution = await pokemon.getPerName(form)
        
        props.pokemonId = evolution.uuid
        props.pokemon = evolution.name
    }

    return props
}