
const express = require('express');
const router = express.Router();

const pedidosController = require('../controllers/pedidosController');

router.get('/getPedidos', pedidosController.getPedidos);

router.get('/getPedidosById/:id_pedido', pedidosController.getPedidosById);

router.post('/postPedidos', pedidosController.postPedidos);

router.put('/putPedidos/:id_pedido', pedidosController.putPedidos);

router.delete('/deletePedidos/:id_pedido', pedidosController.deletePedidos);

module.exports = router;
