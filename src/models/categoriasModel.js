
const db = require('../config/dbConfig');

class categorias {

    getCategorias(callback) {
        const sql = `
            SELECT id_categoria, nombre, descripcion, estado
            FROM categorias
        `;

        db.query(sql, callback);
    }

    getCategoriaById(id_categoria, callback) {
        const sql = `
            SELECT id_categoria, nombre, descripcion, estado
            FROM categorias
            WHERE id_categoria = ?
        `;

        db.query(sql, [id_categoria], callback);
    }

    postCategoria(nombre, descripcion, estado, callback) {
        const sql = `
            INSERT INTO categorias
            (nombre, descripcion, estado)
            VALUES (?, ?, ?)
        `;

        db.query(sql, [nombre, descripcion, estado], (err, result) => {
            if (err) {
                return callback(err, null);
            }

            callback(null, result.insertId);
        });
    }

    putCategoria(id_categoria, nombre, descripcion, estado, callback) {
        const sql = `
            UPDATE categorias
            SET nombre = ?, descripcion = ?, estado = ?
            WHERE id_categoria = ?
        `;

        db.query(sql, [nombre, descripcion, estado, id_categoria], callback);
    }

    deleteCategoria(id_categoria, callback) {
        const sql = `
            DELETE FROM categorias
            WHERE id_categoria = ?
        `;

        db.query(sql, [id_categoria], callback);
    }

}

module.exports = new categorias();
