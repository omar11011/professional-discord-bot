const { Router } = require('express')
const controller = require('../controllers/contest')

const router = Router()

router.get('/', async (req, res) => await controller.getAll(req, res))
router.get('/id/:id', async (req, res) => await controller.getPerID(req, res))
router.get('/name/:name', async (req, res) => await controller.getPerName(req, res))

module.exports = router