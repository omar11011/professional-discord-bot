module.exports = (sequelize, DataTypes) => {

    const movement = sequelize.define("movement", {
        movement: { type: DataTypes.INTEGER, defaultValue: 5 },
        level: { type: DataTypes.INTEGER, defaultValue: 1 },
    },  {
        sequelize,
        modelName: "movement",
        timestamps: false,
    })

    movement.associate = models => {   
        movement.belongsTo(models.pokemon, { as: "pokemon" })
    }

    return movement

}