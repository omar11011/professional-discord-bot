module.exports = (sequelize, DataTypes) => {

    const inventory = sequelize.define("inventory", {
        code: { type: DataTypes.STRING, allowNull: false },
        category: { type: DataTypes.STRING, allowNull: false },
        quantity: { type: DataTypes.INTEGER, defaultValue: 1 },
    },  {
        sequelize,
        modelName: "inventory",
        timestamps: false,
    })

    inventory.associate = models => {
        inventory.belongsTo(models.user, { as: "user" })
    }

    return inventory

}