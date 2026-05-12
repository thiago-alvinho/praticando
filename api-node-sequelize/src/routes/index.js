const express = require('express');
const pessoas = require('./pessoasRoutes');
const cursos = require('./cursosRoutes');
const categorias = require('./categoriasRoutes');

module.exports = app => {
    app.use(
        express.json(),
        pessoas,
        cursos,
        categorias
    );
};