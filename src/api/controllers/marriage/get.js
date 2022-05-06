const db = require('../../models')

module.exports = async (req, res) => {
    const proposals = await db.user.findOne({
        where: { userId: req.params.id },
        attributes: [],
        include: [
            {
                model: db.marriage,
                as: "sent",
                attributes: ["id", "date"],
                include: [ { model: db.user, as: "received", attributes: ["id", "userId", "username"] } ],
            },
            {
                model: db.marriage,
                as: "received",
                attributes: ["id", "date"],
                include: [ { model: db.user, as: "sent", attributes: ["id", "userId", "username"] } ],
            },
        ],
    })

    if (!proposals) return res.json({ error: "No existe este usuario." })

    const marriages = []

    for (let i = 0; i < proposals.sent.length; i++) marriages.push({
        id: proposals.sent[i].id,
        userId: proposals.sent[i].received.userId,
        username: proposals.sent[i].received.username,
        date: proposals.sent[i].date,
    })

    for (let i = 0; i < proposals.received.length; i++) marriages.push({
        id: proposals.received[i].id,
        userId: proposals.received[i].sent.userId,
        username: proposals.received[i].sent.username,
        date: proposals.received[i].date,
    })

    return res.json(marriages)
}