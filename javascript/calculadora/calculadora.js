import { createInterface } from 'readline'
import { soma, subtracao } from './operacoesMatematicas.js'

const leitor = createInterface({
    input: process.stdin,
    output: process.stdout
})

leitor.question('Qual é o primeiro número?\n>', (num1) => {
    leitor.question('Qual é a operação?\n+: soma\n-: subtracao\n>', (operacao) => {
        leitor.question('Qual é o segundo numero?\n>', (num2) => {
            
            const numero1 = Number(num1)
            const numero2 = Number(num2)

            if(operacao == '+') {
                console.log(soma(numero1, numero2))
            } else if(operacao == '-') {
                console.log(subtracao(numero1, numero2))
            } else {
                console.log('operação inválida!')
            }

            leitor.close()
        })
    })
})