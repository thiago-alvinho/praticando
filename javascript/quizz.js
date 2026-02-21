const readLine = require('readline')

const leitor = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

let acertos = 0;

leitor.question('Qual das opções é considerado um falsy?\n(A) {}\n(B) undefined\n(C) 1\n(D) true\n\n', (resposta) => {
    if(resposta == 'B') {
        acertos++;
    }

    leitor.question('Qual das opções é uma instrução de repetição? \n(A) switch\n(B) repetir\n(C) looping\n(D) for\n\n', (resposta) => {
        if(resposta == 'D') {
            acertos++;
        }

        console.log(`Você acertou ${acertos} das 2 questões.`)
        leitor.close();
    })
})