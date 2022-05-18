const data = require('../../data/egg_groups')
const transformWord = require('../../util/transformWord')

module.exports = async (req, res) => {
    const result = data.find(e => transformWord(e.name) == transformWord(req.params.name))

    if (!result) return res.json({ error: "No se encontró este grupo huevo." })
    
    return res.json(result)
}