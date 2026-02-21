let frutas = ['morango', 'banana', 'kiwi', 'maça']
let outrasFrutas = ['abacate', 'uva']
let todasAsFrutas = [...frutas, ...outrasFrutas]


console.log(todasAsFrutas)

let [primeira, segunda, ...restante] = todasAsFrutas

console.log(primeira)
console.log(segunda)
console.log(restante)