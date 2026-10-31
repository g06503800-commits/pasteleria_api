
const productosModel = require('../models/productosModel');

module.exports = {

    getProductos: (req, res) => {

        console.log('ENTRE AL CONTROLADOR GET PRODUCTOS');

        productosModel.getProductos((err, result) => {

            if (err) {
                console.error('Error GET productos:', err);

                return res.status(500).json({
                    error: err.message
                });
            }

            console.log('Productos obtenidos correctamente');

            res.status(200).json({
                data: result
            });

        });

    },

    getProductosById: (req, res) => {

        const { id_producto } = req.params;

        productosModel.getProductoById(id_producto, (err, result) => {

            if (err) {
                console.error('Error GET producto por ID:', err);

                return res.status(500).json({
                    error: err.message
                });
            }

            if (result.length === 0) {
                return res.status(404).json({
                    message: 'Producto no encontrado'
                });
            }

            res.status(200).json({
                data: result
            });

        });

    },

    postProductos: (req, res) => {

        const { nombre, descripcion, precio, stock, id_categoria, estado } = req.body;

        productosModel.postProducto(
            nombre,
            descripcion,
            precio,
            stock,
            id_categoria,
            estado,
            (err, result) => {

                if (err) {
                    console.error('Error POST productos:', err);

                    return res.status(500).json({
                        error: err.message
                    });
                }

                res.status(201).json({
                    message: 'Producto creado correctamente',
                    data: {
                        idInsertado: result
                    }
                });

            }
        );

    },

    putProductos: (req, res) => {

        const { id_producto } = req.params;

        const { nombre, descripcion, precio, stock, id_categoria, estado } = req.body;

        productosModel.putProducto(
            id_producto,
            nombre,
            descripcion,
            precio,
            stock,
            id_categoria,
            estado,
            (err, result) => {

                if (err) {
                    console.error('Error PUT productos:', err);

                    return res.status(500).json({
                        error: err.message
                    });
                }

                if (result.affectedRows === 0) {
                    return res.status(404).json({
                        message: 'Producto no encontrado'
                    });
                }

                res.status(200).json({
                    message: 'Producto actualizado correctamente'
                });

            }
        );

    },

    deleteProductos: (req, res) => {

        const { id_producto } = req.params;

        productosModel.deleteProductos(id_producto, (err, result) => {

            if (err) {
                console.error('Error DELETE productos:', err);

                return res.status(500).json({
                    error: err.message
                });
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({
                    message: 'Producto no encontrado'
                });
            }

            res.status(200).json({
                message: 'Producto eliminado correctamente'
            });

        });

    }

};
