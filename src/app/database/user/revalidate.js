const create = require('./create')
const getPerUser = require('./getPerUser')

module.exports = async props => {
    const user = await getPerUser(props.userId)

    if (!user.error) return user
    else return await create(props)
}