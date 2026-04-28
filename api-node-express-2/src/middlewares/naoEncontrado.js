import NaoEncontado from "../erros/NaoEncontrado.js";

function naoEncontado(req, res, next) {
    next(new NaoEncontado);
}

export default naoEncontado;