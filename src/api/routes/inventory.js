const { Router } = require('express')
const controller = require('../controllers/inventory')

const router = Router()

router.post('/create', async (req, res) => await controller.create(req, res))

module.exports = router