const express = require('express');
const router = express.Router();
const FaqController = require('../controller/faqController')

router.post('/create', FaqController.createData)
router.get('/all', FaqController.getAll)
router.get('/:id', FaqController.getOne)
router.put('/:id', FaqController.updateOne)
router.delete('/:id', FaqController.deleteOne)


module.exports = router