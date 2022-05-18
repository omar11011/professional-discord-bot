const data = require('../../data/contests')
const transformWord = require('../../util/transformWord')

module.exports = async (req, res) => {
    const result = data.find(e => transformWord(e.name) == transformWord(req.params.name))

    if (!result) return res.json({ error: "No se encontró este tipo de concurso." })
    
    return res.json(result)
}