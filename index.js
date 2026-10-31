
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const db = require('./src/config/dbConfig');

const productosRoutes = require('./src/routes/productosRoutes');
const pedidosRoutes = require('./src/routes/pedidosRoutes');
const detallePedidosRoutes = require('./src/routes/detallePedidosRoutes');
const clientesRoutes = require('./src/routes/clientesRoutes');
const categoriasRoutes = require('./src/routes/categoriasRoutes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/productos', productosRoutes);
app.use('/api/pedidos', pedidosRoutes);
app.use('/api/detallePedidos', detallePedidosRoutes);
app.use('/api/clientes', clientesRoutes);
app.use('/api/categorias', categoriasRoutes);

const PORT = process.env.PORT || 3000;

db.connect((err) => {

    if (err) {
        console.error('ERROR AL CONECTAR CON AIVEN:', err);
        process.exit(1);
        return;
    }

    console.log('CONEXION MYSQL EXITOSA');

    app.listen(PORT, '0.0.0.0', () => {
        console.log(`Servidor ejecutandose en el puerto ${PORT}`);
    });

});
