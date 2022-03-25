const express = require('express');
const router = express.Router();
const GenreController = require('../controller/genreController')

router.post('/create', GenreController.createData)
router.get('/all', GenreController.getAll)
router.get('/:id', GenreController.getOne)
router.put('/:id', GenreController.updateOne)
router.delete('/:id', GenreController.deleteOne)


module.exports = router