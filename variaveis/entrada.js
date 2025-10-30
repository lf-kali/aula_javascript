import readline from 'readline-sync'


let nome;
let idade;
let email;
let senha;

nome = readline.question("Digite seu nome: ");

idade = readline.questionInt("Digite sua idade: ");

email = readline.questionEMail("Digite seu email: ");

senha = readline.questionNewPassword("Digite sua senha: ");

console.log(
    `\nNome: ${nome}
    \nIdade: ${idade}
    \nEmail: ${email}
    `
);