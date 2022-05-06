require('dotenv').config()

const { port } = require('./config')
const app = require('./app')
const database = require('./models')

try {
    app.listen(port, () => {
        database.sequelize.sync({ force: false })
            .then(() => console.log('Base de datos sincronizada.'))
            .catch(err => console.log(err))
        console.log(`Server on port ${port}.`)
    })
} catch (err) {
    console.error(err)
    process.exit(0)
}