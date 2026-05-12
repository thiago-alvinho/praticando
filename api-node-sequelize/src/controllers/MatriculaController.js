const Controller = require("./Controller");
const MatriculaService = require('../services/MatriculaService');
const Sequelize = require('sequelize');

const matriculaService = new MatriculaService();

class Matricula extends Controller {
    constructor() {
        super(matriculaService);
    }
    
    async countMatricula(req, res) {
        const { estudante_id } = req.params;
        try {
            const matriculas = await matriculaService.countAllRegistry({
                where: { 
                    estudante_id: Number(estudante_id),
                    status: "matriculado",
                }
            });
            return res.status(200).json(matriculas);
        } catch (error) {
            return res.status(500).json({ error: error})
        }
    }

    async cursosLotados(req, res) {
        const lotacao = 2;
        try {
            const matriculas = await matriculaService.countAllRegistry({
                where: { 
                    status: "matriculado",
                },
                attributes: ['curso_id'],
                group: ['curso_id'],
                having: Sequelize.literal(`count(curso_id) >= ${lotacao}`)
            });

            return res.status(200).json(matriculas);
        } catch (error) {
            return res.status(500).json({ error: error})
        }
    }

}

module.exports = Matricula;