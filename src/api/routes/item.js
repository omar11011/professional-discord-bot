const { Router } = require('express')
const controller = require('../controllers/item')

const router = Router()

router.get('/:category', async (req, res) => await controller.getAll(req, res))
router.get('/:category/:code', async (req, res) => await controller.get(req, res))

module.exports = router