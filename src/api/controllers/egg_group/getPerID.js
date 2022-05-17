const data = require('../../data/egg_groups')

module.exports = async (req, res) => {
    const result = Object.values(data).find(e => e.uuid == parseInt(req.params.id))

    if (!result) return res.json({ error: "No se encontró este tipo de concurso." })
    
    return res.json(result)
}