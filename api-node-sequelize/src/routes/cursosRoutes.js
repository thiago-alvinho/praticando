const { Router } = require('express');
const CursoController = require('../controllers/CursoController');

const cursoController = new CursoController();

const routes = Router();

routes.get('/cursos', (req, res) => cursoController.getCursos(req, res));
routes.get('/cursos/:id', (req, res) => cursoController.getById(req, res));
routes.post('/cursos', (req, res) => cursoController.createNewRegistry(req, res));
routes.put('/cursos/:id', (req, res) => cursoController.updateParams(req, res));
routes.delete('/cursos/:id', (req, res) => cursoController.deleteById(req, res));

module.exports = routes;