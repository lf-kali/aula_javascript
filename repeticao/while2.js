import readline from 'readline-sync';

const cadastro = [];

let continua = readline.keyInYN("Quer entrar no cadastro?");

let i = 0;

while(continua) {

    let nome = readline.question("Digite seu nome: ");
    let idade = readline.question("Digite sua idade: ");

    cadastro[i++] = {nome, idade};

    continua = readline.keyInYN("Continuar?");

}

console.log(cadastro);
