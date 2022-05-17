const { Router } = require('express')
const controller = require('../controllers/movement')

const router = Router()

router.get('/id/:id', async (req, res) => await controller.getPerID(req, res))
router.get('/type/:type', async (req, res) => await controller.getPerType(req, res))
router.get('/class/:class', async (req, res) => await controller.getPerClass(req, res))
router.get('/name/:name', async (req, res) => await controller.getPerName(req, res))

module.exports = router