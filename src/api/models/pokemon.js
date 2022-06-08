module.exports = (sequelize, DataTypes) => {

    const pokemon = sequelize.define("pokemon", {
        pokemon: { type: DataTypes.STRING, allowNull: false },
        name: { type: DataTypes.STRING, allowNull: true },
        current: { type: DataTypes.BOOLEAN, defaultValue: false },
        shiny: { type: DataTypes.BOOLEAN, defaultValue: false },
        xp: { type: DataTypes.INTEGER, defaultValue: 0 },
        level: { type: DataTypes.INTEGER, defaultValue: 5 },
        hp: { type: DataTypes.INTEGER, defaultValue: 5 },
        attack: { type: DataTypes.INTEGER, defaultValue: 5 },
        defense: { type: DataTypes.INTEGER, defaultValue: 5 },
        spattack: { type: DataTypes.INTEGER, defaultValue: 5 },
        spdefense: { type: DataTypes.INTEGER, defaultValue: 5 },
        speed: { type: DataTypes.INTEGER, defaultValue: 5 },
        iv: { type: DataTypes.DECIMAL(10,2), allowNull: false },
        friendship: { type: DataTypes.INTEGER, defaultValue: 0 },
        hpPE: { type: DataTypes.INTEGER, defaultValue: 0 },
        attackPE: { type: DataTypes.INTEGER, defaultValue: 0 },
        defensePE: { type: DataTypes.INTEGER, defaultValue: 0 },
        spattackPE: { type: DataTypes.INTEGER, defaultValue: 0 },
        spdefensePE: { type: DataTypes.INTEGER, defaultValue: 0 },
        speedPE: { type: DataTypes.INTEGER, defaultValue: 0 },
        gender: { type: DataTypes.STRING, defaultValue: 'male' },
        nature: { type: DataTypes.STRING, allowNull: false },
        movements: { type: DataTypes.STRING, allowNull: true },
        item: { type: DataTypes.STRING, allowNull: true },
        date: { type: DataTypes.DATE, allowNull: false },
    },  {
        sequelize,
        modelName: "pokemon",
        timestamps: false,
    })

    pokemon.associate = models => {   
        pokemon.belongsTo(models.user, { as: "user" })
    }

    return pokemon

}