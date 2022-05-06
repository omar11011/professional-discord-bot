module.exports = (sequelize, DataTypes) => {

    const pet = sequelize.define("pet", {
        breed: { type: DataTypes.STRING, allowNull: false },
        alias: { type: DataTypes.STRING, allowNull: true },
        purity: { type: DataTypes.INTEGER, defaultValue: 0 },
        level: { type: DataTypes.INTEGER, defaultValue: 1 },
        xp: { type: DataTypes.INTEGER, defaultValue: 0 },
        hungry: { type: DataTypes.INTEGER, defaultValue: 100 },
        fun: { type: DataTypes.INTEGER, defaultValue: 100 },
        cleaning: { type: DataTypes.INTEGER, defaultValue: 100 },
        current: { type: DataTypes.BOOLEAN, defaultValue: false },
        date: { type: DataTypes.DATE, allowNull: false },
    },  {
        sequelize,
        modelName: "pet",
        timestamps: false,
    })

    pet.associate = models => {
        pet.belongsTo(models.user, { as: "user" })
    }

    return pet

}