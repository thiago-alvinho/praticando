const Service = require('./Services');
const dataSource = require('../database/models');

class PessoaService extends Service {
    constructor() {
        super('Pessoa');
        this.matriculaService = new Service('Matricula');
    }

    async pegaMatriculasAtivasPorEstudante(estudanteId) {
        try {
            const estudante = await this.getById(estudanteId);
            const matriculas = await estudante.getAulasMatriculadas();
            return matriculas; 
        } catch (error) {
            return res.status(500).json({ error: error});
        }
    }

    async pegaTodasAsMatriculasPorEstudante(estudanteId) {
        try {
            const estudante = await this.getById(estudanteId);
            const matriculas = await estudante.getTodasAsMatriculas();
            return matriculas; 
        } catch (error) {
            return res.status(500).json({ error: error});
        }
    }
    
    async getAllByScope() {
        try {
            const allList = await this.getByScope('getAll');
            return allList;
        } catch {
            return res.status(500).json({ error: error});
        }
    }

    async cancelaEstudanteEMatriculas(estudante_id) {
        return dataSource.sequelize.transaction(async (transacao) => {
            await this.updateParams({id: estudante_id}, {ativo: false}, transacao);
            await this.matriculaService.updateParams({estudante_id: estudante_id}, {status: 'cancelado'}, transacao);
        })
    }
}

module.exports = PessoaService;