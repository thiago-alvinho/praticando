const Controller = require("./Controller");
const PessoaService = require('../services/PessoaService');

const pessoaService = new PessoaService();

class Pessoa extends Controller {
    constructor() {
        super(pessoaService);
    }

    async pegaMatriculasAtivas(req, res) {
        const { estudanteId } = req.params;
        try {
            const listaMatriculas = await pessoaService.pegaMatriculasAtivasPorEstudante(Number(estudanteId));
            return res.status(200).json(listaMatriculas);
        } catch(error) {
            return res.status(500).json({ error: error.message});
        }
    }

    async pegaTodasAsMatriculas(req, res) {
        const { estudanteId } = req.params;
        try {
            const listaMatriculas = await pessoaService.pegaTodasAsMatriculasPorEstudante(Number(estudanteId));
            return res.status(200).json(listaMatriculas);
        } catch(error) {
            return res.status(500).json({ error: error.message});
        }
    }

    async getAllPeople(req, res) {
        try {
            const all = await pessoaService.getAllByScope();
            return res.status(200).json(all);
        } catch (error) {
            return res.status(500).json({ error: error.message});
        }
    }

    async cancelaEstudante(req, res) {
        const { estudante_id } = req.params;
        try {
            await pessoaService.cancelaEstudanteEMatriculas(Number(estudante_id));
            return res.status(200).json({ message: `Estudante ${estudante_id} cancelado com suas matriculas`});
        } catch (error) {
            return res.status(500).json({ error: error.message});
        }
    }
}

module.exports = Pessoa;