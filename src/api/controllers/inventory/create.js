const models = require('../../models')

module.exports = async (req, res) => {
    const props = req.body
    const exists = await models.inventory.findOne({
        where: { code: props.code, userId: props.userId },
    })

    if (isNaN(props.quantity)) return res.json({ error: "Ingresa una cantidad válida." })
    else props.quantity = parseInt(props.quantity)

    if (!exists) {
        await models.inventory.create(props)
            .then(e => res.json(e.dataValues))
            .catch(err => {
                if(err.name == "SequelizeValidationError") return res.json({ error: "Campos vacíos." })
                else return res.json({ error: true })
            })
    } else {
        exists.quantity += (props.quantity || 1)
        await models.inventory.update({ quantity: exists.quantity }, { where: { id: exists.id } })
        return res.json(exists)
    }
}