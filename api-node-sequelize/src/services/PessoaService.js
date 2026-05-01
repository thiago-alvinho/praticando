const Service = require('./Services');

class PessoaService extends Service {
    constructor() {
        super('Pessoa');
    }
}

module.exports = PessoaService;