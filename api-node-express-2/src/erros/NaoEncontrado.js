import ErroBase from "./ErroBase.js";

class NaoEncontado extends ErroBase {
    constructor (mensagem = "Página não encontrada.") {
        super(mensagem, 404);
    }
}

export default NaoEncontado;