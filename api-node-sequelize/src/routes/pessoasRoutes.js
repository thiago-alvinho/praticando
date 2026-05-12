const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');
const MatriculaController = require('../controllers/MatriculaController');

const pessoaController = new PessoaController();
const matriculaController = new MatriculaController();

const routes = Router();

routes.get('/pessoas', (req, res) => pessoaController.getAll(req, res));
routes.get('/pessoas/all', (req, res) => pessoaController.getAllPeople(req, res));
routes.get('/pessoas/:id', (req, res) => pessoaController.getById(req, res));
routes.post('/pessoas', (req, res) => pessoaController.createNewRegistry(req, res));
routes.post('/pessoas/:estudante_id/cancela', (req, res) => pessoaController.cancelaEstudante(req, res));
routes.put('/pessoas/:id', (req, res) => pessoaController.updateParams(req, res));
routes.delete('/pessoas/:id', (req, res) => pessoaController.deleteById(req, res));
routes.get('/pessoas/:estudanteId/matriculas', (req, res) => pessoaController.pegaMatriculasAtivas(req, res));
routes.get('/pessoas/:estudanteId/matriculas/all', (req, res) => pessoaController.pegaTodasAsMatriculas(req, res));
routes.get('/pessoas/matriculas/lotadas', (req, res) => matriculaController.cursosLotados(req, res));
routes.get('/pessoas/:estudante_id/matriculas/confirmadas', (req, res) => matriculaController.countMatricula(req, res));
routes.get('/pessoas/:estudante_id/matriculas/:id', (req, res) => matriculaController.getByParams(req, res));
routes.post('/pessoas/:estudante_id/matriculas', (req, res) => matriculaController.createNewRegistry(req, res));
routes.put('/pessoas/:estudante_id/matriculas/:id', (req, res) => matriculaController.updateParams(req, res));

module.exports = routes;