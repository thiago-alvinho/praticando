import fs from 'fs'

export async function getTodosFavoritos() {
    return JSON.parse(await fs.promises.readFile("favoritos.json"));
}

export async function excluirFavorito(id) {
    const favoritos = JSON.parse(await fs.promises.readFile("favoritos.json"));
    const indiceFavoritoParaExcluir = livros.findIndex( (livro) => livro.id === id);
    livros.splice(indiceFavoritoParaExcluir, 1);
    await fs.promises.writeFile("favoritos.json", JSON.stringify(favoritos));
}
