import readline from 'readline-sync';

let numero;

numero = readline.questionInt("Calcule a tabuada do: ");

for (let contador = 1; contador <= 10; contador++) {
    console.log(`\n${numero} x ${contador} = ${numero * contador}`);
}