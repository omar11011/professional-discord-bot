const db = require('../../models')

module.exports = async (req, res) => {
    try {
        await db.marriage.destroy({
            where: { id: req.params.id },
        })

        return res.json({ success: true })
    } catch(err) {
        return res.json({ error: err.name })
    }
}