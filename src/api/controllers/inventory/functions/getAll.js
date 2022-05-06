const models = require('../../../models')
const data = JSON.parse(JSON.stringify(require('../../../data/items')))

module.exports = async params => {
    let inventory = (await models.user.findOne({
        where: { userId: params.userId },
        attributes: ['id'],
        include: [
            {
                model: models.inventory,
                as: "inventory",
                attributes: ["id", "code", "category", "quantity"],
            }
        ],
    }))

    if (!inventory) return false
    else inventory = inventory.inventory
    
    if (params.category) {
        if (Object.keys(data).includes(params.category.toLowerCase())) inventory = inventory.filter(e => e.dataValues.category.toLowerCase() == params.category.toLowerCase())
        else inventory = inventory.filter(e => e.dataValues.code.toLowerCase() == params.category.toLowerCase())
    }

    for (let i = 0; i < inventory.length; i++) {
        inventory[i].dataValues.item = (data[inventory[i].category.toLowerCase()]).find(e => e.code == inventory[i].dataValues.code).name
    }
    
    return inventory
}