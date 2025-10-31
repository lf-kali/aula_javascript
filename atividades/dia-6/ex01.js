import readline from 'readline-sync';


let a = readline.questionInt("Digite o número A: ");
let b = readline.questionInt("Digite o número B: ");
let c = readline.questionInt("Digite o número C: ");

console.log(`\n${a} + ${b} = ${c}`);
console.log("\n")

if (a + b > c){
    console.log("A soma de A + B é maior que C");
}
else if (a + b < c){
    console.log("A soma de A + B é menor que C");
}
else{
    console.log("A soma de A + B é igual C")
}

