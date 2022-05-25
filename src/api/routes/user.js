const { Router } = require('express')
const controller = require('../controllers/user')

const router = Router()

router.get('/id/:id', async (req, res) => await controller.getPerID(req, res))
router.get('/user/:id', async (req, res) => await controller.getPerUser(req, res))

router.post('/', async (req, res) => await controller.create(req, res))

router.put('/', async (req, res) => await controller.update(req, res))

module.exports = router