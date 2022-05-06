const axios = require('axios')
const { api } = require('../../config')

module.exports = async props => (await axios.get(`${api}/inventory/${props.user}/${props.item}`)).data