const express = require('express');
const router = express.Router();
const YearController = require('../controller/yearController')

router.post('/create', YearController.createData)
router.get('/all', YearController.getAll)
router.get('/:id', YearController.getOne)
router.put('/:id', YearController.updateOne)
router.delete('/:id', YearController.deleteOne)


module.exports = router