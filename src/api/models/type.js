module.exports = (sequelize, DataTypes) => {

    const type = sequelize.define("type", {
        uuid: { type: DataTypes.INTEGER, allowNull: false },
        name: { type: DataTypes.STRING, allowNull: false },
    },  {
        sequelize,
        modelName: "type",
        indexes: [ { unique: true, fields: ['uuid'] } ],
        timestamps: false,
    })

    type.associate = models => {
        // type.hasMany(models.pet, { as: "pet", foreignKey: "typeId" })
    }

    return type

}