module.exports = (sequelize, DataTypes) => {

    const user = sequelize.define("user", {
        userId: { type: DataTypes.STRING, allowNull: false },
        username: { type: DataTypes.STRING, allowNull: true },
        money: { type: DataTypes.INTEGER, defaultValue: 0 },
        date: { type: DataTypes.DATE, allowNull: false },
    },  {
        sequelize,
        modelName: "user",
        indexes: [ { unique: true, fields: ['userId'] } ],
        timestamps: false,
    })

    user.associate = models => {   
        user.hasMany(models.marriage, { as: "sent", foreignKey: "person1" })
        user.hasMany(models.marriage, { as: "received", foreignKey: "person2" })
        user.hasMany(models.inventory, { as: "inventory", foreignKey: "userId" })
    }

    return user

}