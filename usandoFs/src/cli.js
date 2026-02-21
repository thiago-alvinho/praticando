import fs from 'fs'
import path from 'path'
import trataErro from './erros/funcoesErros.js';
import { contaPalavras } from './index.js';
import { formatarSaida } from './helpers.js';
import { Command } from 'commander'
import chalk from 'chalk';

const program = new Command();

program
    .option('-t, --texto <string>', 'Caminho do arquivo texto que será processado.')
    .option('-d, --destino <string>', 'Caminho de destino para salvar o output.')
    .version('0.0.1')
    .action((options) => {
        const { texto, destino } = options;
        if(!texto || !destino) {
            console.error(chalk.red('Erro: Caminho de origem e destino devem ser passados.'));
            program.help();
            return;
        }

        const caminhoTexto = path.resolve(texto);
        const caminhoDestino = path.resolve(destino)
        
        try {
            processaArquivo(caminhoTexto, caminhoDestino);
            console.log(chalk.green('Arquivo processado com sucesso.'));
        } catch (erro) {
            console.log('Ocorreu um erro no processamento.', erro);
        }
    })

program.parse();

function processaArquivo(texto, destino) {
    
    fs.readFile(texto, 'utf-8', (erro, texto) => {
        try {
            if (erro) throw erro;
            const listaPalavras = contaPalavras(texto);
            criaESalvaArquivo(listaPalavras, destino);
        } catch (erro) {
            let erroMessage = trataErro(erro);
            console.log(erroMessage);
        }
    })

}
 
 
 async function criaESalvaArquivo (listaPalavras, destino) {
     const nomeArquivo = `${destino}/resultado.txt`;
     const resultado = formatarSaida(listaPalavras);
     try {
         await fs.promises.writeFile(nomeArquivo, resultado);
     } catch(erro) {
         throw erro;
     }
 }

