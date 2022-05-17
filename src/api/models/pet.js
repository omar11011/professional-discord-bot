module.exports = (sequelize, DataTypes) => {

    const pet = sequelize.define("pet", {
        uuid: { type: DataTypes.INTEGER, allowNull: false },
        name: { type: DataTypes.STRING, allowNull: false },
        male: { type: DataTypes.INTEGER, defaultValue: 50 },
        female: { type: DataTypes.INTEGER, defaultValue: 50 },
        hp: { type: DataTypes.INTEGER, defaultValue: 30 },
        attack: { type: DataTypes.INTEGER, defaultValue: 30 },
        defense: { type: DataTypes.INTEGER, defaultValue: 30 },
        speed: { type: DataTypes.INTEGER, defaultValue: 30 },
        spattack: { type: DataTypes.INTEGER, defaultValue: 30 },
        spdefense: { type: DataTypes.INTEGER, defaultValue: 30 },
    },  {
        sequelize,
        modelName: "pet",
        timestamps: false,
    })

    pet.associate = models => {
        // pet.belongsTo(models.type, { as: "type" })
    }

    return pet

}