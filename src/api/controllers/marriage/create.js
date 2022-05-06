const db = require('../../models')

module.exports = async (req, res) => {
    const data = req.body
    const proposal = {
        person1: data.person1,
        person2: data.person2,
        date: new Date(),
    }

    if (data.accept) proposal.accept = data.accept
    if (data.teammate) proposal.teammate = data.teammate

    await db.marriage.create(proposal)
        .then(async e => {
            return res.json(e.dataValues)
        })
        .catch(err => {
            console.log(err.name)
            if (err.name == "SequelizeForeignKeyConstraintError") return res.json({ error: "Hay usuarios no registrados." })
            else return res.json({ error: true })
        })
}