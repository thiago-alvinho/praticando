import mongoose from "mongoose";
import ErroBase from "../erros/ErroBase.js";
import FormatoInvalido from "../erros/FormatoInvalido.js";
import RequisicaoIncorreta from "../erros/RequisicaoIncorreta.js";
import NaoEncontado from "../erros/NaoEncontrado.js";

function manipularErro (error, req, res, next) {
    if(error instanceof mongoose.Error.CastError) {
        new RequisicaoIncorreta().enviarResposta(res);
    } else if (error instanceof mongoose.Error.ValidationError) {
        new FormatoInvalido(error).enviarResposta(res);
    }
    else if (error instanceof ErroBase) {
        error.enviarResposta(res);
    } else {
        new ErroBase().enviarResposta(res);
    }
}

export default manipularErro;