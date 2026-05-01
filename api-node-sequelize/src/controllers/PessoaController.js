const Controller = require("./Controller");
const PessoaService = require('../services/PessoaService');

const pessoaService = new PessoaService();

class Pessoa extends Controller {
    constructor() {
        super(pessoaService);
    }
}

module.exports = Pessoa;