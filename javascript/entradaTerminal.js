const readLine = require('readline')

const leitor = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

leitor.question('Qual é o seu nome? ', (nome) => {
    console.log(`Olá ${nome}`)
    
    leitor.question('Quantos anos você tem? ', (idade) => {
        if(idade >= 24) {
            console.log("Você é o melhor!")
        } else {
            console.log("Você não é o melhor :( ")
        }

        leitor.close()
    })
})