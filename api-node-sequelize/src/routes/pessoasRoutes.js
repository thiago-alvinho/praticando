const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const pessoaController = new PessoaController();

const routes = Router();

routes.get('/pessoas', (req, res) => pessoaController.getAll(req, res));
routes.get('/pessoas/:id', (req, res) => pessoaController.getById(req, res));
routes.post('/pessoas', (req, res) => pessoaController.createNewRegistry(req, res));
routes.put('/pessoas/:id', (req, res) => pessoaController.updateById(req, res));
routes.delete('/pessoas/:id', (req, res) => pessoaController.deleteById(req, res));

module.exports = routes;