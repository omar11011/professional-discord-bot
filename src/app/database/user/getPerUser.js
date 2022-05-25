const axios = require('axios')
const { api } = require('../../config')

module.exports = async user => (await axios.get(`${api}/user/user/${user}`)).data