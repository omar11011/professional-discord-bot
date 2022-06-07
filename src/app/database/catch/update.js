const axios = require('axios')
const { api } = require('../../config')

module.exports = async props => (await axios.put(`${api}/catch`, {
    ...props,
    token: process.env.API_TOKEN,
})).data