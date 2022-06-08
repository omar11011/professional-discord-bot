const { Router } = require('express')
const controller = require('../controllers/user')

const router = Router()

router.post('/get', async (req, res) => await controller.get(req, res))
router.post('/create', async (req, res) => await controller.create(req, res))

router.put('/', async (req, res) => await controller.update(req, res))

module.exports = router