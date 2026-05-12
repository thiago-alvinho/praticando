const Controller = require("./Controller");
const CursoService = require('../services/CursoService');
const { Op } = require('sequelize');

const cursoService = new CursoService();

class Curso extends Controller {
    constructor() {
        super(cursoService);
    }

    async getCursos(req, res) {
        const { data_inicial, data_final } = req.query;
        const where = {};

        data_inicial || data_final ? where.data_inicio = {} : null;
        data_inicial ? where.data_inicio[Op.gte] = data_inicial : null;
        data_final ? where.data_inicio[Op.lte] = data_final : null;
        
        try {
            const cursos = await cursoService.getAll(where);
            return res.status(200).json(cursos);
        } catch (error) {
            return res.status(500).json({ error: error});
        }   
    }
}

module.exports = Curso;