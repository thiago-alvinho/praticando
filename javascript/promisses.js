const fs = require('fs')

const caminhos = [
    '../usandoFs/arquivo/texto-aprendizado.txt',
    '../usandoFs/arquivo/texto-kanban.txt',
    '../usandoFs/arquivo/texto-web.txt'
]


// --------------------------------------TESTANDO ASYNC/AWAIT E THEN ------------------------------------------------------------------------------------------------
// async function lerArquivos(caminhos) {
//     try {
//         const promisses = caminhos.map(async (caminho) => await fs.promises.readFile(caminho, 'utf-8'));
//         const result = await Promise.all(promisses);
//         return result;
//     } catch (erro) {
//         throw erro;
//     }
// }


// async function lerArquivos(caminhos) {
//     try {
//         const promisses = caminhos.map((caminho) => fs.promises.readFile(caminho, 'utf-8'));
//         const result = await Promise.all(promisses);
//         return result;
//     } catch(erro) {
//         throw erro;
//     }
// }
// 
// lerArquivos(caminhos)
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((erro) => {
//         console.log(erro)
//     })

// async function lerArquivos(caminhos) {
//     const promisses = caminhos.map(async (caminho) => await fs.promises.readFile(caminho, 'utf-8'));
//     Promise.all(promisses)
//         .then((result) => {
//             console.log(result)
//         })
//         .catch((erro) => {
//             console.log(erro);
//         })
//         .finally(() => {
//             console.log('finally');
//         })
// }


// --------------------------------------CRIANDO UMA PROMISE ------------------------------------------------------------------------------------------------

// function promise(bool) {
//     const x = bool
//     return new Promise((resolve, reject) => {
//         if(!x) {
//             reject(new Error('Reject promise'));
//         }
// 
//         resolve('Promise resolved');
//     })
// }
// 
// promise(false)
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((erro) => {
//         console.log(erro)
//     })
