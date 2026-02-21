function verificaPalavrasDuplicadas(paragrafo) {
    const resultado = {};
    const palavras = paragrafo.split(' ');
    let palavraLimpa;

    palavras.forEach(palavra => {
        palavraLimpa = limparPalavra(palavra);    
        if(palavraLimpa.length >= 3) {
            resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1;
        }

    })
    return resultado;
}

function extrairParagrafos(texto) {
    const paragrafos = texto.toLowerCase().split('\n');
    return paragrafos;
}

export function contaPalavras(texto) {
    const paragrafos = extrairParagrafos(texto);
    const listaPalavras = paragrafos.flatMap(paragrafo => {
        if(!paragrafo) {
            return [];
        }

        return verificaPalavrasDuplicadas(paragrafo);
    })

    return listaPalavras;
}

function limparPalavra(palavra) {
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}