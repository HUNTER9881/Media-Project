const express = require('express');
const router = express.Router();
const ActorController = require('../controller/actorController')

router.post('/create', ActorController.createData)
router.get('/all', ActorController.getAll)
router.get('/:id', ActorController.getOne)
router.put('/:id', ActorController.updateOne)
router.delete('/:id', ActorController.deleteOne)


module.exports = router