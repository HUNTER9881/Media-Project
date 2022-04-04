const express = require('express');
const router = express.Router();
const ContactController = require('../controller/contactController')

router.post('/create', ContactController.createData)
router.get('/all', ContactController.getAll)
router.get('/:id', ContactController.getOne)
router.put('/:id', ContactController.updateOne)
router.delete('/:id', ContactController.deleteOne)


module.exports = router