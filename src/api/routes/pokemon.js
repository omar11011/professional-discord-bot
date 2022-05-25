const { Router } = require('express')
const controller = require('../controllers/pokemon')

const router = Router()

router.get('/id/:id', async (req, res) => await controller.getPerID(req, res))
router.get('/pokedex/:id', async (req, res) => await controller.getPerDex(req, res))
router.get('/name/:name', async (req, res) => await controller.getPerName(req, res))

module.exports = router