// const pessoa  = {
//     nome: 'Thiago',
//     idade: 24,
//     nacionalidade: 'brasileiro',
//     profissao: 'estudante'
// }

// console.log(pessoa)

// delete pessoa.profissao

//for(const chave in pessoa) {
//    console.log(`${chave} ${pessoa[chave]} `)
//}

// const chaves = Object.keys(pessoa)
// const valores = Object.values(pessoa)
// const entradas = Object.entries(pessoa)

// console.log(chaves)
// console.log(valores)
// console.log(entradas)

// const pessoa2 = {
//     ...pessoa,
//     profissao: 'programador'
// }
// 
// console.log(pessoa2)
// 
// const {nome, ...restante} = pessoa2
// 
// console.log(`nome: ${nome}`)
// console.log("restante", restante)

// destructuring

// let {nome, idade} = pessoa
// 
// console.log(nome)
// console.log(idade)

// function saudacao( {nome} ) {
//     console.log(`Ola ${nome}`)
// }
// 
// saudacao(pessoa)

// let frutas = ['uva', 'maça', 'pera']
// 
// let [primeira, segunda] = frutas
// 
// console.log(primeira)
// console.log(segunda)

// function Livro(titulo, autor) {
//     this.titulo = titulo,
//     this.autor = autor
// 
//     this.descrever = function () {
//         console.log(`Título ${this.titulo} do autor ${this.autor}`)
//     }
// }
// 
// const livro1 = new Livro('Nada pode me parar', 'David Goggins')
// const livro2 = new Livro('Nada pode me ferir', 'David Goggins')
// 
// console.log(livro1)
// console.log(livro2)
// livro1.descrever()