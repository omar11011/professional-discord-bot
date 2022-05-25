const Pet = require('../base')

module.exports = new Pet({
    uuid: 1,
    pokedex: 1,
    name: 'Bulbasaur',
    region: "kanto",
    type: ["planta", "veneno"],
    eggGroup: ["monstruo", "planta"],
    gender: {
        male: 87.5,
        female: 12.5,
    },
    friendship: 50,
    movements: [
        ["placaje", 5],
        ["gruñido", 1],
        ["latigo cepa", 3],
        ["desarrollo", 6],
        ["drenadoras", 9],
        ["hoja afilada", 12],
        ["polvo veneno", 15],
        ["somnifero", 15],
        ["bomba germen", 18],
        ["derribo", 21],
        ["dulce aroma", 24],
        ["sintesis", 27],
        ["abatidoras", 30],
        ["doble filo", 33],
        ["rayo solar", 36],
    ],
    stats: {
        hp: 45,
        attack: 49,
        defense: 49,
        speed: 65,
        spattack: 65,
        spdefense: 45,
    },
    evolution: {
        level: { uuid: 2, level: 16 },
    }
})