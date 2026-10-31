
const detallePedidosModel = require('../models/detallePedidosModel');

module.exports = {

    getDetallePedidos: (req, res) => {

        detallePedidosModel.getDetallePedidos((err, result) => {

            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            res.status(200).json({ data: result });

        });

    },

    getDetallePedidoById: (req, res) => {

        const { id_detalle } = req.params;

        detallePedidosModel.getDetallePedidoById(id_detalle, (err, result) => {

            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            if (result.length === 0) {
                res.status(404).json({
                    message: 'Detalle del pedido no encontrado'
                });
                return;
            }

            res.status(200).json({ data: result });

        });

    },

    postDetallePedido: (req, res) => {

        const { id_pedido, id_producto, cantidad, precio_unitario, estado } = req.body;

        detallePedidosModel.postDetallePedido(id_pedido, id_producto, cantidad, precio_unitario, estado, (err, result) => {

            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            res.status(201).json({
                message: 'Detalle del pedido creado correctamente',
                data: {
                    idInsertado: result
                }
            });

        });

    },

    putDetallePedido: (req, res) => {

        const { id_detalle } = req.params;

        const { id_pedido, id_producto, cantidad, precio_unitario, estado } = req.body;

        detallePedidosModel.putDetallePedido(id_detalle, id_pedido, id_producto, cantidad, precio_unitario, estado, (err, result) => {

            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            if (result.affectedRows === 0) {
                res.status(404).json({ message: 'Detalle del pedido no encontrado' });
                return;
            }

            res.status(200).json({
                message: 'Detalle del pedido actualizado correctamente'
            });

        });

    },

    deleteDetallePedido: (req, res) => {

        const { id_detalle } = req.params;

        detallePedidosModel.deleteDetallePedido(id_detalle, (err, result) => {

            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            if (result.affectedRows === 0) {
                res.status(404).json({ message: 'Detalle del pedido no encontrado' });
                return;
            }

            res.status(200).json({
                message: 'Detalle del pedido eliminado correctamente'
            });

        });

    }

};
