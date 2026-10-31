
const db = require('../config/dbConfig');

class clientes {

    getClientes(callback) {
        const sql = `
            SELECT id_cliente, nombres, apellidos, documento,
                   telefono, correo, direccion, estado
            FROM clientes
        `;

        db.query(sql, callback);
    }

    getClienteById(id_cliente, callback) {
        const sql = `
            SELECT id_cliente, nombres, apellidos, documento,
                   telefono, correo, direccion, estado
            FROM clientes
            WHERE id_cliente = ?
        `;

        db.query(sql, [id_cliente], callback);
    }

    postCliente(nombres, apellidos, documento, telefono, correo, direccion, estado, callback) {
        const sql = `
            INSERT INTO clientes
            (nombres, apellidos, documento, telefono, correo, direccion, estado)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `;

        db.query(sql, [nombres, apellidos, documento, telefono, correo, direccion, estado], (err, result) => {
            if (err) {
                return callback(err, null);
            }

            callback(null, result.insertId);
        });
    }

    putCliente(id_cliente, nombres, apellidos, documento, telefono, correo, direccion, estado, callback) {
        const sql = `
            UPDATE clientes
            SET nombres = ?, apellidos = ?, documento = ?,
                telefono = ?, correo = ?, direccion = ?, estado = ?
            WHERE id_cliente = ?
        `;

        db.query(sql, [nombres, apellidos, documento, telefono, correo, direccion, estado, id_cliente], callback);
    }

    deleteCliente(id_cliente, callback) {
        const sql = `
            DELETE FROM clientes
            WHERE id_cliente = ?
        `;

        db.query(sql, [id_cliente], callback);
    }

}

module.exports = new clientes();
