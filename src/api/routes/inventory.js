const { Router } = require('express')
const controller = require('../controllers/inventory')

const router = Router()

router.get('/:userId', async (req, res) => await controller.getAll(req, res))
router.get('/:userId/:category', async (req, res) => await controller.getAllOfCategory(req, res))

router.post('/', async (req, res) => await controller.create(req, res))
router.post('/transfer', async (req, res) => await controller.transfer(req, res))

module.exports = router