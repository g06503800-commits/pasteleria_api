
const express = require('express');
const router = express.Router();

const productosController = require('../controllers/productosController');

router.get('/getProductos', productosController.getProductos);

router.get('/getProductosById/:id_producto', productosController.getProductosById);

router.post('/postProductos', productosController.postProductos);

router.put('/putProductos/:id_producto', productosController.putProductos);

router.delete('/deleteProductos/:id_producto', productosController.deleteProductos);

module.exports = router;
