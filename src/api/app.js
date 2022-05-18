const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const routes = require('./routes')

app.use('/v1/user', routes.user)
app.use('/v1/item', routes.item)
app.use('/v1/inventory', routes.inventory)
app.use('/v1/marriage', routes.marriage)
app.use('/v1/pet', routes.pet)
app.use('/v1/movement', routes.movement)

// RUTAS YA CONFIRMADAS
app.use('/v1/move_z', routes.move_z)
app.use('/v1/egg_group', routes.egg_group)
app.use('/v1/movement_class', routes.movement_class)
app.use('/v1/contest', routes.contest)
app.use('/v1/type', routes.type)
app.use('/v1/movement', routes.movement)
app.use('/v1/item', routes.item)
app.use('/v1/region', routes.region)

module.exports = app