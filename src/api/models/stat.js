module.exports = (sequelize, DataTypes) => {

    const stat = sequelize.define("stat", {
        hp: { type: DataTypes.INTEGER, defaultValue: 5 },
        attack: { type: DataTypes.INTEGER, defaultValue: 5 },
        defense: { type: DataTypes.INTEGER, defaultValue: 5 },
        spattack: { type: DataTypes.INTEGER, defaultValue: 5 },
        spdefense: { type: DataTypes.INTEGER, defaultValue: 5 },
        speed: { type: DataTypes.INTEGER, defaultValue: 5 },
        hpPE: { type: DataTypes.INTEGER, defaultValue: 0 },
        attackPE: { type: DataTypes.INTEGER, defaultValue: 0 },
        defensePE: { type: DataTypes.INTEGER, defaultValue: 0 },
        spattackPE: { type: DataTypes.INTEGER, defaultValue: 0 },
        spdefensePE: { type: DataTypes.INTEGER, defaultValue: 0 },
        speedPE: { type: DataTypes.INTEGER, defaultValue: 0 },
    },  {
        sequelize,
        modelName: "stat",
        timestamps: false,
    })

    stat.associate = models => {   
        stat.belongsTo(models.pokemon, { as: "pokemon" })
    }

    return stat

}