import RequisicaoIncorreta from "./RequisicaoIncorreta.js";

class FormatoInvalido extends RequisicaoIncorreta {
    constructor (erro) {
        
        const mensagem = Object.values(erro.errors)
            .map( (erro) => erro.message )
            .join("; ")
        

        super(`Os seguintes erros foram encontrados: ${mensagem}`);
    }
}

export default FormatoInvalido;