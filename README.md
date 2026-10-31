

API REST desarrollada con Node.js, Express y MySQL, orientada a la administración de los procesos de una pastelería. Permite gestionar categorías, productos, clientes, pedidos y detalles de pedidos. La base de datos está alojada en Aiven Cloud (MySQL) y la API se encuentra desplegada en Render.
Las tecnologías que utilice fueron Node.js, Express, MySQL, mysql2, Aiven Cloud, Render e Insomnia para pruebas de endpoints.

Requisitos previos

Para ejecutar el proyecto localmente se necesita:

Node.js instalado.

npm.

Acceso al servicio MySQL de Aiven.

Certificado SSL ca.pem.

-Clonar el repositorio de GitHub:
git clone https://github.com/g06503800-commits/pasteleria_api.git

Ingresar al directorio:
cd pasteleria_api

Instalar las dependencias:

npm install

Para iniciar el servidor en el entorno local:

node index.js

Endpoints de la API

Todos los endpoints utilizan el método HTTP correspondiente y la siguiente URL base:

https://pasteleria-api-1wlz.onrender.com

por ejemplo:
https://pasteleria-api-1wlz.onrender.com/api/productos/getProductos
