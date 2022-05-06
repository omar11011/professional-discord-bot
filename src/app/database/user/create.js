const axios = require('axios')
const { api } = require('../../config')

module.exports = async props => (await axios.post(`${api}/user`, props)).data