
const express = require('express');
const router = express.Router();

const detallePedidosController = require('../controllers/detallePedidosController');

router.get('/getDetallePedidos', detallePedidosController.getDetallePedidos);

router.get('/getDetallePedidoById/:id_detalle', detallePedidosController.getDetallePedidoById);

router.post('/postDetallePedido', detallePedidosController.postDetallePedido);

router.put('/putDetallePedido/:id_detalle', detallePedidosController.putDetallePedido);

router.delete('/deleteDetallePedido/:id_detalle', detallePedidosController.deleteDetallePedido);

module.exports = router;
