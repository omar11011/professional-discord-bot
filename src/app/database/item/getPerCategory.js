const axios = require('axios')
const { api } = require('../../config')

module.exports = async category => (await axios.get(`${api}/item/category/${category}`)).data