const { Router } = require('express')
const controller = require('../controllers/catch')

const router = Router()

router.get('/id/:id', async (req, res) => await controller.getPerID(req, res))

router.post('/', async (req, res) => await controller.create(req, res))

module.exports = router