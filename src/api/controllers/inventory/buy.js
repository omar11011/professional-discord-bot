const models = require('../../models')

module.exports = async (req, res) => {
    let data = req.body
    if (!data.token || data.token != process.env.API_TOKEN) return res.json({ error: "Sin autorización." })
    if (!data.userId || !data.item) return res.json({ error: 'Faltan datos.' })
    if (!data.quantity) data.quantity = 1
    if (isNaN(data.quantity)) return res.json({ error: 'Cantidad inválida.' })
    else data.quantity = Math.abs(parseInt(data.quantity))

    let i = await models.inventory.findOne({ where: { item: data.item, userId: data.userId } })
    if (!i) {
        await models.inventory.create({
            item: data.item,
            quantity: data.quantity,
            userId: data.userId,
        })
            .then(e => {
                i = e.dataValues
            })
    } else {
        i.quantity += data.quantity
        i = i.dataValues
        await models.inventory.increment({ quantity: +data.quantity }, { where: { id: i.id } })
    }

    return res.json(i)
}