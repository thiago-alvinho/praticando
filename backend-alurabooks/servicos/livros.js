import fs from 'fs'

export async function getTodosLivros() {
    return JSON.parse(await fs.promises.readFile("livros.json"));
}

export async function getLivroById(id) {
    const livros = JSON.parse(await fs.promises.readFile("livros.json"));
    const livro = livros.filter( (livro) => livro.id === id);
    return livro;
}

export async function criarLivro(novoLivro) {
    const livros = JSON.parse(await fs.promises.readFile("livros.json"));
    const livrosModificados = [...livros, novoLivro];
    await fs.promises.writeFile("livros.json", JSON.stringify(livrosModificados));
}

export async function modificarLivro(modificacao, id) {
    const livros = JSON.parse(await fs.promises.readFile("livros.json"));
    const indiceLivroParaAlterar = livros.findIndex( (livro) => livro.id === id);
    const livroAlterado = { ...livros[indiceLivroParaAlterar], ...modificacao };
    livros[indiceLivroParaAlterar] = livroAlterado;
    await fs.promises.writeFile("livros.json", JSON.stringify(livros));
}

export async function excluirLivro(id) {
    const livros = JSON.parse(await fs.promises.readFile("livros.json"));
    const indiceLivroParaExcluir = livros.findIndex( (livro) => livro.id === id);
    livros.splice(indiceLivroParaExcluir, 1);
    await fs.promises.writeFile("livros.json", JSON.stringify(livros));
}
