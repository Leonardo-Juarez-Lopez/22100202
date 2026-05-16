const express = require('express');

const app = express();
const puerto = 3000;

// Ruta GET
app.get('/saludo', (req, res) => {
    res.send('Hola, esta es una ruta GET en Express');
});

// Manejador de errores
app.use((req, res) => {
    res.status(404).send('Error 404: Ruta no encontrada');
});

// Servidor
app.listen(puerto, () => {
    console.log(`Servidor ejecutándose en http://localhost:${puerto}`);
});