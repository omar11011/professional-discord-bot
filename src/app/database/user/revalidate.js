const add = require('./create')
const get = require('./get')

module.exports = async props => {
    const user = await get(props.userId)

    if (!user.error) return user
    else return await add(props)
}