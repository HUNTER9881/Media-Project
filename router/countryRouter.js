const express = require('express');
const router = express.Router();
const CountryController = require('../controller/countryController')

router.post('/create', CountryController.createData)
router.get('/all', CountryController.getAll)
router.get('/:id', CountryController.getOne)
router.put('/:id', CountryController.updateOne)
router.delete('/:id', CountryController.deleteOne)


module.exports = router