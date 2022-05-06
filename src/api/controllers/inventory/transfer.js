const models = require('../../models')
const getAll = require('./functions/getAll')

module.exports = async (req, res) => {
    const props = req.body

    if (!props.quantity) props.quantity = 1
    if (isNaN(props.quantity)) return res.json({ error: "Ingresa una cantidad válida." })
    else props.quantity = parseInt(props.quantity)
    if (props.quantity < 0) props.quantity *= (-1)

    const inv1 = await getAll({ userId: props.person1, category: props.code })
    const inv2 = await getAll({ userId: props.person2, category: props.code })

    if (inv1.error || inv1[0].quantity < props.quantity) return res.json({ error: "No tiene suficientes unidades de este producto." })

    if (inv1[0].quantity - props.quantity > 0) await models.inventory.increment({ quantity: -props.quantity }, { where: { id: inv1[0].id } })
    else await models.inventory.destroy({ where: { id: inv1[0].id } })

    if (inv2.length > 0) await models.inventory.increment({ quantity: +props.quantity }, { where: { id: inv2[0].id } })
    else await models.inventory.create({
        code: inv1[0].code,
        category: inv1[0].category,
        quantity: props.quantity,
        userId: props.receivedId,
    })

    return res.json({ success: true })
}