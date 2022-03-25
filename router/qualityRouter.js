const express = require('express');
const router = express.Router();
const QualityController = require('../controller/qualityController')

router.post('/create', QualityController.createData)
router.get('/all', QualityController.getAll)
router.get('/:id', QualityController.getOne)
router.put('/:id', QualityController.updateOne)
router.delete('/:id', QualityController.deleteOne)


module.exports = router