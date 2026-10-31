const mysql = require('mysql2');
const fs = require('fs');
const path = require('path');

const db = mysql.createConnection({
    host: 'pasteleria-mysql-ginethb04-8441.e.aivencloud.com',
    user: 'avnadmin',
    password: process.env.DB_PASSWORD,
    database: 'pasteleria_db',
    port: 25687,
    connectTimeout: 15000,
    ssl: {
        rejectUnauthorized: true,
        ca: fs.readFileSync(
            path.join(__dirname, '../../certs/ca.pem')
        )
    }
});

module.exports = db;
