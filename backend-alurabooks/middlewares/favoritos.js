import { excluirFavorito, getTodosFavoritos } from "../servicos/favoritos.js";

export async function getFavoritos (req, res) {
    try {
        const favoritos = await getTodosFavoritos();
        res.status(200).json(favoritos);
    } catch(error) {
        res.status(500).send("Ocorreu um erro no servidor");
    }
}

export async function deleteFavorito (req, res) {
    try {
        const id = parseInt(req.params.id);
        if(id) {
            await excluirFavorito(id);
            res.status(200).send("Favorito excluido com sucesso");
        } else {
            res.status(404).send("Id inválido");
        }
    } catch(error) {
        res.status(500).send("Ocorreu um erro no servidor");
    }
}