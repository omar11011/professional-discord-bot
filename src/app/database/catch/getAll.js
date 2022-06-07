const axios = require('axios')
const { api } = require('../../config')

module.exports = async props => (await axios.get(`${api}/catch/list`, props)).data