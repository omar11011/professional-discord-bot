module.exports = (sequelize, DataTypes) => {

    const marriage = sequelize.define("marriage", {
        date: { type: DataTypes.DATE, allowNull: false },
    },  {
        sequelize,
        modelName: "marriage",
        timestamps: false,
    })

    marriage.associate = models => {
        marriage.belongsTo(models.user, { as: "sent", foreignKey: "person1" })
        marriage.belongsTo(models.user, { as: "received", foreignKey: "person2" })
    }

    return marriage

}