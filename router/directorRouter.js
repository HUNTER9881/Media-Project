const express = require('express');
const router = express.Router();
const DirectorController = require('../controller/directorController')

router.post('/create', DirectorController.createData)
router.get('/all', DirectorController.getAll)
router.get('/:id', DirectorController.getOne)
router.put('/:id', DirectorController.updateOne)
router.delete('/:id', DirectorController.deleteOne)


module.exports = router