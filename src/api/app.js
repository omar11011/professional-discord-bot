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

module.exports = app