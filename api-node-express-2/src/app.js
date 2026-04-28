import express from "express";
import db from "./config/dbConnect.js"
import routes from "./routes/index.js"
import manipularErro from "./middlewares/manipularErro.js";
import naoEncontado from "./middlewares/naoEncontrado.js";

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
  console.log('conexão com o banco feita com sucesso')
})

const app = express();
app.use(express.json())
routes(app);

app.use(naoEncontado)

app.use(manipularErro);

export default app