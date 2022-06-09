module.exports = (sequelize, DataTypes) => {

    const pokemon = sequelize.define("pokemon", {
        pokemon: { type: DataTypes.STRING, allowNull: false },
        name: { type: DataTypes.STRING, allowNull: true },
        current: { type: DataTypes.BOOLEAN, defaultValue: false },
        shiny: { type: DataTypes.BOOLEAN, defaultValue: false },
        xp: { type: DataTypes.INTEGER, defaultValue: 0 },
        level: { type: DataTypes.INTEGER, defaultValue: 5 },
        iv: { type: DataTypes.DECIMAL(10,2), allowNull: false },
        friendship: { type: DataTypes.INTEGER, defaultValue: 0 },
        gender: { type: DataTypes.STRING, defaultValue: 'male' },
        nature: { type: DataTypes.STRING, allowNull: false },
        category: { type: DataTypes.STRING, defaultValue: "comun" },
        item: { type: DataTypes.STRING, allowNull: true },
        date: { type: DataTypes.DATE, allowNull: false },
    },  {
        sequelize,
        modelName: "pokemon",
        timestamps: false,
    })

    pokemon.associate = models => {   
        pokemon.belongsTo(models.user, { as: "user" })
        pokemon.hasOne(models.stat, { as: "stat", foreignKey: "pokemonId" })
        pokemon.hasMany(models.movement, { as: "movement", foreignKey: "pokemonId" })
    }

    return pokemon

}