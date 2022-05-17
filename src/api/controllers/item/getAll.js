const data = require('../../data/items')

module.exports = async (req, res) => res.json({ total: data.length })