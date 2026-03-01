import { autor } from '../models/Autor.js';

class AutorController {
    
    static async listarAutores (req, res) {
        try {
            const autores = await autor.find({});
            res.status(200).json(autores);

        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na requisição`});
        }
    }

    static async cadastrarAutor (req, res) {
        try {
            const autorCadastrado = await autor.create(req.body);
            res.status(201).json({ message: 'Autor cadastrado com sucesso', autor: autorCadastrado});
        } catch(erro) {
            res.status(500).json({ message: `Falha na requisição - ${erro.message}`});
        }
    }

    static async encontrarAutorById (req, res) {
        const id = req.params.id;
        try{
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na requisição`});
        }
    }

    static async editarAutor (req, res) {
        const id = req.params.id;
        try{
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: 'Autor atualizado com sucesso'});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na requisição`});
        }
    }

    static async deletarAutor (req, res) {
        const id = req.params.id;
        try{
            await autor.findByIdAndDelete(id);
            res.status(200).json({ message: 'Autor deletado com sucesso'});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na requisição`});
        }
    }
}

export default AutorController;