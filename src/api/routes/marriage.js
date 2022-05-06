const { Router } = require('express')
const controller = require('../controllers/marriage')

const router = Router()

router.get('/:id', async (req, res) => await controller.get(req, res))
router.post('/', async (req, res) => await controller.create(req, res))
router.delete('/:id', async (req, res) => await controller.delete(req, res))

module.exports = router