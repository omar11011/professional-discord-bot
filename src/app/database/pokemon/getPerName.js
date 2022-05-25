const axios = require('axios')
const { api } = require('../../config')

module.exports = async name => (await axios.get(`${api}/pokemon/name/${name}`)).data