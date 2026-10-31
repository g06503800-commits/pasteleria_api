
const db = require('../config/dbConfig');

class productos {

    getProductos(callback) {
        const sql = `
            SELECT id_producto, nombre, descripcion, precio,
                   stock, id_categoria, estado
            FROM productos
        `;

        console.log('Ejecutando consulta GET productos...');

        db.query(sql, (err, result) => {

            if (err) {
                console.error('ERROR REAL DE MYSQL:', err);
                return callback(err, null);
            }

            console.log('Consulta ejecutada correctamente');
            callback(null, result);

        });
    }

    getProductoById(id_producto, callback) {
        const sql = `
            SELECT id_producto, nombre, descripcion, precio,
                   stock, id_categoria, estado
            FROM productos
            WHERE id_producto = ?
        `;

        db.query(sql, [id_producto], (err, result) => {

            if (err) {
                console.error('ERROR GET producto por ID:', err);
                return callback(err, null);
            }

            callback(null, result);

        });
    }

    postProducto(nombre, descripcion, precio, stock, id_categoria, estado, callback) {
        const sql = `
            INSERT INTO productos
            (nombre, descripcion, precio, stock, id_categoria, estado)
            VALUES (?, ?, ?, ?, ?, ?)
        `;

        db.query(sql, [nombre, descripcion, precio, stock, id_categoria, estado], (err, result) => {

            if (err) {
                console.error('ERROR POST productos:', err);
                return callback(err, null);
            }

            callback(null, result.insertId);

        });
    }

    putProducto(id_producto, nombre, descripcion, precio, stock, id_categoria, estado, callback) {
        const sql = `
            UPDATE productos
            SET nombre = ?, descripcion = ?, precio = ?,
                stock = ?, id_categoria = ?, estado = ?
            WHERE id_producto = ?
        `;

        db.query(sql, [nombre, descripcion, precio, stock, id_categoria, estado, id_producto], (err, result) => {

            if (err) {
                console.error('ERROR PUT productos:', err);
                return callback(err, null);
            }

            callback(null, result);

        });
    }

    deleteProductos(id_producto, callback) {
        const sql = `
            DELETE FROM productos
            WHERE id_producto = ?
        `;

        db.query(sql, [id_producto], (err, result) => {

            if (err) {
                console.error('ERROR DELETE productos:', err);
                return callback(err, null);
            }

            callback(null, result);

        });
    }

}

module.exports = new productos();
