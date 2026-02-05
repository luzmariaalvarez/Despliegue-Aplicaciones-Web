// Importamos los módulos necesarios
const express = require('express');
const cors = require('cors');

// Creamos la aplicación express
const app = express();

// Activamos CORS para permitir peticiones desde el cliente React
app.use(cors());

// Datos de ejemplo: listado de empleados
const empleados = [
  { id: 1, nombre: 'Luis', salario: 2000 },
  { id: 2, nombre: 'Marta', salario: 2400 },
  { id: 3, nombre: 'Diego', salario: 1800 }
];

// Endpoint GET /empleados que devuelve el array en formato JSON
app.get('/empleados', (req, res) => {
  res.json(empleados);
});

// Ponemos la API a escuchar en el puerto 3000
app.listen(3000, () => {
  console.log("API funcionando en puerto 3000");
});
