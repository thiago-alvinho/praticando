import express from 'express'
import conectarAoBanco from './config/connectionDB.js'
import livro from './models/Livro.js'

const app = express();
const banco = await conectarAoBanco();

app.use(express.json());

banco.on("error", (erro) => {
    console.log("Erro na conexão com o banco", erro);
});

banco.once("open", () => {
    console.log("Conexão com o banco feita com sucesso");
});

app.get("/", (req, res) => {
    res.status(200).send("Sistema da livraria");
});

app.get("/livros", async (req, res) => {
    const livros = await livro.find({});
    res.status(200).json(livros);
});

app.get("/livros/:id", (req, res) => {
    const index = encontrarIndice(req.params.id);
    res.status(200).json(livros[index]);
})
app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso");
});

app.put("/livros/:id", (req, res) => {
    const index = encontrarIndice(req.params.id);
    livros[index] = req.body;
    res.status(200).json(livros);
});

app.delete("/livros/:id", (req, res) => {
    const index = encontrarIndice(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro removido com sucesso");
});

export default app;
