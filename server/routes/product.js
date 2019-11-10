const express = require('express');
const app = express();

const { verifyToken } = require('../middlewares/autenticacion');

const Producto = require('../models/product');


app.get('/products', (req, res) => {
    //traer todos los productos y hacer POPULATE
    // paginar
});


app.get('/products/:id', (req, res) => {
    // obtener producto y POPULATE
});

app.post('/products', (req, res) => {
    // grabar usuario y categoría
});

app.put('/products/:id', (req, res) => {
    
});

app.delete('/products/:id', (req, res) => {
    // no borrar, cambiar su estado 
});


module.exports = app;