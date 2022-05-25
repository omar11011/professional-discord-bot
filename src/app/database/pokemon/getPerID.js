const axios = require('axios')
const { api } = require('../../config')

module.exports = async id => (await axios.get(`${api}/pokemon/id/${id}`)).data