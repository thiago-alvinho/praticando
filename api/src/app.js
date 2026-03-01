import express from 'express'
import conectarAoBanco from './config/connectionDB.js'
import routes from './routes/index.js'

const app = express();
const banco = await conectarAoBanco();

banco.on("error", (erro) => {
    console.log("Erro na conexão com o banco", erro);
});

banco.once("open", () => {
    console.log("Conexão com o banco feita com sucesso");
});

routes(app);

export default app;
