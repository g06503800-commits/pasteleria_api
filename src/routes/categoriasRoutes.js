
const express = require('express');
const router = express.Router();

const categoriasController = require('../controllers/categoriasController');

router.get('/getCategorias', categoriasController.getCategorias);

router.get('/getCategoriasById/:id_categoria', categoriasController.getCategoriasById);

router.post('/postCategorias', categoriasController.postCategorias);

router.put('/putCategorias/:id_categoria', categoriasController.putCategorias);

router.delete('/deleteCategorias/:id_categoria', categoriasController.deleteCategorias);

module.exports = router;
