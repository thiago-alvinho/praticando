import express from 'express'

const app = express();

app.use(express.json());

const livros = [
    {
        id: 1,
        titulo: "Nada pode me ferir"
    },
    {
        id: 2,
        titulo: "Pai rico pai pobre"
    }
];

app.get("/", (req, res) => {
    res.status(200).send("Sistema da livraria");
});

app.get("/livros", (req, res) => {
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

function encontrarIndice(id) {
    return livros.findIndex(livro => {
        return Number(id) === livro.id;
    });
};

export default app;