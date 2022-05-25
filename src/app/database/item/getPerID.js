const axios = require('axios')
const { api } = require('../../config')

module.exports = async id => (await axios.get(`${api}/item/id/${id}`)).data