const db = require('../config/dbConfig');

class detallePedidos {

    getDetallePedidos(callback) {
        const sql = `
            SELECT id_detalle, id_pedido, id_producto,
                   cantidad, precio_unitario, subtotal, estado
            FROM detalle_pedidos
        `;

        db.query(sql, callback);
    }

    getDetallePedidoById(id_detalle, callback) {
        const sql = `
            SELECT id_detalle, id_pedido, id_producto,
                   cantidad, precio_unitario, subtotal, estado
            FROM detalle_pedidos
            WHERE id_detalle = ?
        `;

        db.query(sql, [id_detalle], callback);
    }

    postDetallePedido(id_pedido, id_producto, cantidad, precio_unitario, estado, callback) {
        const sql = `
            INSERT INTO detalle_pedidos
            (id_pedido, id_producto, cantidad, precio_unitario, estado)
            VALUES (?, ?, ?, ?, ?)
        `;

        db.query(sql, [id_pedido, id_producto, cantidad, precio_unitario, estado], (err, result) => {
            if (err) {
                return callback(err, null);
            }

            callback(null, result.insertId);
        });
    }

    putDetallePedido(id_detalle, id_pedido, id_producto, cantidad, precio_unitario, estado, callback) {
        const sql = `
            UPDATE detalle_pedidos
            SET id_pedido = ?, id_producto = ?, cantidad = ?,
                precio_unitario = ?, estado = ?
            WHERE id_detalle = ?
        `;

        db.query(sql, [id_pedido, id_producto, cantidad, precio_unitario, estado, id_detalle], callback);
    }

    deleteDetallePedido(id_detalle, callback) {
        const sql = `
            DELETE FROM detalle_pedidos
            WHERE id_detalle = ?
        `;

        db.query(sql, [id_detalle], callback);
    }

}

module.exports = new detallePedidos();
