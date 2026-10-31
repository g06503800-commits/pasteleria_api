
const db = require('../config/dbConfig');

class pedidos {

    getPedidos(callback) {
        const sql = `
            SELECT id_pedido, codigo_pedido, id_cliente,
                   fecha_pedido, estado, observaciones
            FROM pedidos
        `;

        db.query(sql, callback);
    }

    getPedidoById(id_pedido, callback) {
        const sql = `
            SELECT id_pedido, codigo_pedido, id_cliente,
                   fecha_pedido, estado, observaciones
            FROM pedidos
            WHERE id_pedido = ?
        `;

        db.query(sql, [id_pedido], callback);
    }

    postPedido(codigo_pedido, id_cliente, fecha_pedido, estado, observaciones, callback) {
        const sql = `
            INSERT INTO pedidos
            (codigo_pedido, id_cliente, fecha_pedido, estado, observaciones)
            VALUES (?, ?, ?, ?, ?)
        `;

        db.query(sql, [codigo_pedido, id_cliente, fecha_pedido, estado, observaciones], (err, result) => {
            if (err) {
                return callback(err, null);
            }

            callback(null, result.insertId);
        });
    }

    putPedido(id_pedido, codigo_pedido, id_cliente, fecha_pedido, estado, observaciones, callback) {
        const sql = `
            UPDATE pedidos
            SET codigo_pedido = ?, id_cliente = ?, fecha_pedido = ?,
                estado = ?, observaciones = ?
            WHERE id_pedido = ?
        `;

        db.query(sql, [codigo_pedido, id_cliente, fecha_pedido, estado, observaciones, id_pedido], callback);
    }

    deletePedido(id_pedido, callback) {
        const sql = `
            DELETE FROM pedidos
            WHERE id_pedido = ?
        `;

        db.query(sql, [id_pedido], callback);
    }

}

module.exports = new pedidos();
