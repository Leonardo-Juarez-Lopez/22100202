const express = require('express');

const app = express();
const puerto = 3000;

// Ruta GET
app.get('/saludo', (req, res) => {
    res.send('Hola, esta es una ruta GET en Express');
});

// Servidor
app.listen(puerto, () => {
    console.log(`Servidor ejecutándose en http://localhost:${puerto}/saludo`);
});