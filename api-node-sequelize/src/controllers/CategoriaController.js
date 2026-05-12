const Controller = require("./Controller");
const CategoriaService = require('../services/CategoriaService');

const categoriaService = new CategoriaService();

class Categoria extends Controller {
    constructor() {
        super(categoriaService);
    }
}

module.exports = Categoria;