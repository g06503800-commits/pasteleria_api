
const clientesModel = require('../models/clientesModel');

module.exports = {

    getClientes: (req, res) => {

        clientesModel.getClientes((err, result) => {

            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            res.status(200).json({ data: result });

        });

    },

    getClientesById: (req, res) => {

        const { id_cliente } = req.params;

        clientesModel.getClienteById(id_cliente, (err, result) => {

            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            if (result.length === 0) {
                res.status(404).json({
                    message: 'Cliente no encontrado'
                });
                return;
            }

            res.status(200).json({ data: result });

        });

    },

    postClientes: (req, res) => {

        const { nombres, apellidos, documento, telefono, correo, direccion, estado } = req.body;

        clientesModel.postCliente(nombres, apellidos, documento, telefono, correo, direccion, estado, (err, result) => {

            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            res.status(201).json({
                message: 'Cliente creado correctamente',
                data: {
                    idInsertado: result
                }
            });

        });

    },

    putClientes: (req, res) => {

        const { id_cliente } = req.params;

        const { nombres, apellidos, documento, telefono, correo, direccion, estado } = req.body;

        clientesModel.putCliente(id_cliente, nombres, apellidos, documento, telefono, correo, direccion, estado, (err, result) => {

            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            if (result.affectedRows === 0) {
                res.status(404).json({ message: 'Cliente no encontrado' });
                return;
            }

            res.status(200).json({
                message: 'Cliente actualizado correctamente'
            });

        });

    },

    deleteClientes: (req, res) => {

        const { id_cliente } = req.params;

        clientesModel.deleteCliente(id_cliente, (err, result) => {

            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            if (result.affectedRows === 0) {
                res.status(404).json({ message: 'Cliente no encontrado' });
                return;
            }

            res.status(200).json({
                message: 'Cliente eliminado correctamente'
            });

        });

    }

};
