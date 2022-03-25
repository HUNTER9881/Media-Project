const express = require('express');
const router = express.Router();
const LanguageController = require('../controller/languageController')

router.post('/create', LanguageController.createData)
router.get('/all', LanguageController.getAll)
router.get('/:id', LanguageController.getOne)
router.put('/:id', LanguageController.updateOne)
router.delete('/:id', LanguageController.deleteOne)


module.exports = router