import readline from 'readline-sync';

let nota1 = readline.questionInt("Digite a primeira nota: ");
let nota2 = readline.questionInt("Digite a segunda nota: ");
let nota3 = readline.questionInt("Digite a terceira nota: ");
let nota4 = readline.questionInt("Digite a quarta nota: ");

let mediaFinal = (nota1 + nota2 + nota3 + nota4) / 4;

console.log(`Sua média final é ${mediaFinal}`);