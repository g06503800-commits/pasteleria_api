
const pedidosModel = require('../models/pedidosModel');

module.exports = {

    getPedidos: (req, res) => {

        pedidosModel.getPedidos((err, result) => {

            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            res.status(200).json({ data: result });

        });

    },

    getPedidosById: (req, res) => {

        const { id_pedido } = req.params;

        pedidosModel.getPedidoById(id_pedido, (err, result) => {

            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            if (result.length === 0) {
                res.status(404).json({
                    message: 'Pedido no encontrado'
                });
                return;
            }

            res.status(200).json({ data: result });

        });

    },

    postPedidos: (req, res) => {

        const { codigo_pedido, id_cliente, fecha_pedido, estado, observaciones } = req.body;

        pedidosModel.postPedido(codigo_pedido, id_cliente, fecha_pedido, estado, observaciones, (err, result) => {

            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            res.status(201).json({
                message: 'Pedido creado correctamente',
                data: {
                    idInsertado: result
                }
            });

        });

    },

    putPedidos: (req, res) => {

        const { id_pedido } = req.params;

        const { codigo_pedido, id_cliente, fecha_pedido, estado, observaciones } = req.body;

        pedidosModel.putPedido(id_pedido, codigo_pedido, id_cliente, fecha_pedido, estado, observaciones, (err, result) => {

            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            if (result.affectedRows === 0) {
                res.status(404).json({ message: 'Pedido no encontrado' });
                return;
            }

            res.status(200).json({
                message: 'Pedido actualizado correctamente'
            });

        });

    },

    deletePedidos: (req, res) => {

        const { id_pedido } = req.params;

        pedidosModel.deletePedido(id_pedido, (err, result) => {

            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            if (result.affectedRows === 0) {
                res.status(404).json({ message: 'Pedido no encontrado' });
                return;
            }

            res.status(200).json({
                message: 'Pedido eliminado correctamente'
            });

        });

    }

};
