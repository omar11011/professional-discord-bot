const models = require('../../models')

module.exports = async (req, res) => {
    const data = req.body
    const user = {
        userId: String(data.userId),
        username: String(data.username) || "Player#" + Date.now(),
        date: new Date(),
    }
   
    if (data.money) user.money = parseInt(data.money)
    if (data.reputation) user.reputation = parseInt(data.reputation)

    await models.user.create(user)
        .then(e => res.json(e.dataValues))
        .catch(err => {
            if (err.name == "SequelizeUniqueConstraintError") return res.json({ error: "Usuario ya registrado." })
            else if(err.name == "SequelizeValidationError") return res.json({ error: "Campos vacíos." })
            else return res.json({ error: true })
        })
}