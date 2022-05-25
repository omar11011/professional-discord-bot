const Pet = require('../base')

module.exports = new Pet({
    uuid: 3,
    pokedex: 3,
    name: 'Venusaur',
    region: "kanto",
    type: ["planta", "veneno"],
    eggGroup: ["monstruo", "planta"],
    gender: {
        male: 87.5,
        female: 12.5,
    },
    friendship: 50,
    movements: [
        ["placaje", 1],
        ["gruñido", 1],
        ["latigo cepa", 1],
        ["desarrollo", 1],
        ["drenadoras", 9],
        ["hoja afilada", 12],
        ["polvo veneno", 15],
        ["somnifero", 15],
        ["bomba germen", 20],
        ["derribo", 25],
        ["dulce aroma", 30],
        ["sintesis", 35],
        ["abatidoras", 40],
        ["doble filo", 45],
        ["rayo solar", 50],
    ],
    stats: {
        hp: 60,
        attack: 62,
        defense: 63,
        speed: 80,
        spattack: 80,
        spdefense: 60,
    },
    evolution: {
        level: { uuid: 3, level: 36 },
    }
})