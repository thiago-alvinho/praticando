import express from 'express'
import livros from './routes/livros.js'
import favoritos from './routes/favoritos.js'
import cors from 'cors'

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors({ origin:"*" }));
app.use('/livros', livros);
app.use('/favoritos', favoritos);

app.listen(port, () => {
    console.log(`Aplicação na porta ${port}`);
})