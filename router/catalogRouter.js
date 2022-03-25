const express = require('express');
const router = express.Router();
const CatalogRouter = require('../controller/catalogController')

router.post('/create', CatalogRouter.createData)
router.get('/all', CatalogRouter.getAll)
router.get('/:id', CatalogRouter.getOne)
router.put('/:id', CatalogRouter.updateOne)
router.delete('/:id', CatalogRouter.deleteOne)


module.exports = router