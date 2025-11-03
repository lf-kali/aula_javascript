import readline from 'readline-sync';

let sub21 = 0;
let plus50 = 0;

while(true){
    let idade = readline.questionInt("Digite sua idade: ");
    if (idade > 50){
        plus50 += 1;
    }
    if(idade < 21){
        sub21 += 1;
    }
    if (idade < 0){
        break;
    }
}

console.log(`Total de pessoas com mais de 50 anos: ${plus50}`);
console.log(`Total de pessoas com menos de 21 anos: ${sub21}`);
