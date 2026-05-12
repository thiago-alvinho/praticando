const { Router } = require('express');
const CategoriaController = require('../controllers/CategoriaController');

const categoriaController = new CategoriaController();

const routes = Router();

routes.get('/categorias', (req, res) => categoriaController.getAll(req, res));
routes.get('/categorias/:id', (req, res) => categoriaController.getById(req, res));
routes.post('/categorias', (req, res) => categoriaController.createNewRegistry(req, res));
routes.put('/categorias/:id', (req, res) => categoriaController.updateParams(req, res));
routes.delete('/categorias/:id', (req, res) => categoriaController.deleteById(req, res));

module.exports = routes;