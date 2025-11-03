import readline from 'readline-sync';

let soma = 0;
let num;

do {
    num = readline.questionInt("Digite um número: ")

    if (num % 2 === 0){
        soma += num;
    }
}while(num !== 0);

console.log(`Soma dos números pares: ${soma}`)