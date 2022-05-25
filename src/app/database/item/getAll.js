const axios = require('axios')
const { api } = require('../../config')

module.exports = async () => (await axios.get(`${api}/item`)).data