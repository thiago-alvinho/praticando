import livro from '../models/Livro.js';
import { autor }  from '../models/Autor.js';

class LivroController {
    
    static async listarLivros (req, res) {
        try {
            const livros = await livro.find({});
            res.status(200).json(livros);

        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na requisição`});
        }
    }

    static async cadastrarLivro (req, res) {
        const livroEnviado = req.body;
        try {
            const autorEncontrado = await autor.findById(livroEnviado.autor);
            const livroCompleto = { ...livroEnviado, autor: { ...autorEncontrado._doc} }
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({ message: 'Livro cadastrado com sucesso', livro: livroCriado});
        } catch(erro) {
            res.status(500).json({ message: `Falha na requisição - ${erro.message}`});
        }
    }

    static async encontrarLivroById (req, res) {
        const id = req.params.id;
        try{
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na requisição`});
        }
    }

    static async editarLivro (req, res) {
        const id = req.params.id;
        try{
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: 'Livro atualizado com sucesso'});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na requisição`});
        }
    }

    static async deletarLivro (req, res) {
        const id = req.params.id;
        try{
            await livro.findByIdAndDelete(id);
            res.status(200).json({ message: 'Livro deletado com sucesso'});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na requisição`});
        }
    }
}

export default LivroController;