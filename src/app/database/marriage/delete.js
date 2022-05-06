const axios = require('axios')
const { api } = require('../../config')

module.exports = async id => (await axios.delete(`${api}/marriage/${id}`)).data