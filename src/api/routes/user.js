const { Router } = require('express')
const controller = require('../controllers/user')

const router = Router()

router.get('/:id', async (req, res) => await controller.get(req, res))
router.post('/', async (req, res) => await controller.create(req, res))

module.exports = router