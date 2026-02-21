function filtraOcorrencias(paragrafo) {
    return Object.keys(paragrafo).filter(palavra => paragrafo[palavra] > 1);
}

function formatarSaida(listaPalavras) {
    let texto = '';
    listaPalavras.forEach((paragrafo, indice) => {
        const duplicadas = filtraOcorrencias(paragrafo).join(', ');
        if(duplicadas) {
            texto += `Palavras duplicadas no parágrafo ${indice + 1}: ${duplicadas}\n`;
        }
    })

    return texto

}
export { formatarSaida }