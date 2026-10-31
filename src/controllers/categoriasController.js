
const categoriasModel = require('../models/categoriasModel');

module.exports = {

    getCategorias: (req, res) => {

        categoriasModel.getCategorias((err, result) => {

            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            res.status(200).json({ data: result });

        });

    },

    getCategoriasById: (req, res) => {

        const { id_categoria } = req.params;

        categoriasModel.getCategoriaById(id_categoria, (err, result) => {

            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            if (result.length === 0) {
                res.status(404).json({
                    message: 'Categoria no encontrada'
                });
                return;
            }

            res.status(200).json({ data: result });

        });

    },

    postCategorias: (req, res) => {

        const { nombre, descripcion, estado } = req.body;

        categoriasModel.postCategoria(nombre, descripcion, estado, (err, result) => {

            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            res.status(201).json({
                message: 'Categoria creada correctamente',
                data: {
                    idInsertado: result
                }
            });

        });

    },

    putCategorias: (req, res) => {

        const { id_categoria } = req.params;

        const { nombre, descripcion, estado } = req.body;

        categoriasModel.putCategoria(id_categoria, nombre, descripcion, estado, (err, result) => {

            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            if (result.affectedRows === 0) {
                res.status(404).json({ message: 'Categoria no encontrada' });
                return;
            }

            res.status(200).json({
                message: 'Categoria actualizada correctamente'
            });

        });

    },

    deleteCategorias: (req, res) => {

        const { id_categoria } = req.params;

        categoriasModel.deleteCategoria(id_categoria, (err, result) => {

            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }

            if (result.affectedRows === 0) {
                res.status(404).json({ message: 'Categoria no encontrada' });
                return;
            }

            res.status(200).json({
                message: 'Categoria eliminada correctamente'
            });

        });

    }

};
