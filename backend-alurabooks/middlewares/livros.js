import { getTodosLivros, getLivroById, criarLivro, modificarLivro, excluirLivro } from "../servicos/livros.js";

export async function getLivros (req, res) {
    try {
        const livros = await getTodosLivros();
        res.status(200).json(livros);
    } catch(error) {
        res.status(500).send("Ocorreu um erro no servidor");
    }
}

export async function getLivro (req, res) {
    try {
        const id = parseInt(req.params.id);
        
        if(id) {
            const livro = await getLivroById(id);
            res.status(200).json(livro);
        } else {
            res.status(422).send("Id inválido");
        }
    } catch(error) {
        res.status(500).send("Ocorreu um erro no servidor");
    }
}

export async function postLivro (req, res) {
    try {
        const livro = req.body;
        if(req.body.titulo) {
            await criarLivro(livro);
            res.status(201).send("Livro criado com sucesso");
        } else {
            res.status(422).send("É necessário um campo titulo");
        }
    } catch(error) {
        res.status(500).send("Ocorreu um erro no servidor");
    }
}

export async function patchLivro (req, res) {
    try {
        const id = parseInt(req.params.id);
        
        if(id) {
            const modificacao = req.body;
            modificarLivro(modificacao, id);
            res.status(200).send("Livro modificado com sucesso");
        } else {
            res.status(422).send("Id inválido");
        }

    } catch(error) {
        res.status(500).send("Ocorreu um erro no servidor");
    }
}

export async function deleteLivro (req, res) {
    try {
        const id = parseInt(req.params.id);
        if(id) {
            await excluirLivro(id);
            res.status(200).send("Livro excluido com sucesso");
        } else {
            res.status(404).send("Id inválido");
        }
    } catch(error) {
        res.status(500).send("Ocorreu um erro no servidor");
    }
}
