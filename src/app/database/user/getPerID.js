const axios = require('axios')
const { api } = require('../../config')

module.exports = async user => (await axios.get(`${api}/user/id/${user}`)).data