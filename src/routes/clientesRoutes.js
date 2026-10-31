
const express = require('express');
const router = express.Router();

const clientesController = require('../controllers/clientesController');

router.get('/getClientes', clientesController.getClientes);

router.get('/getClientesById/:id_cliente', clientesController.getClientesById);

router.post('/postClientes', clientesController.postClientes);

router.put('/putClientes/:id_cliente', clientesController.putClientes);

router.delete('/deleteClientes/:id_cliente', clientesController.deleteClientes);

module.exports = router;
