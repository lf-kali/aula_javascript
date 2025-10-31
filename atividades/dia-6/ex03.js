import readline from 'readline-sync';


let nome = readline.question("Nome do doador: ");
let idade = readline.questionInt("Idade do doador: ");
let primeiraDoacao = readline.question("Primeira doação? S/N: ").toLowerCase();

if (idade >= 18 && idade < 60) {
    console.log(`${nome} pode doar sangue!`);
}
else if (idade >= 60 && idade <= 69 && !primeiraDoacao === "s"){
    console.log(`${nome} pode doar sangue!`);
}
else{
    console.log(`${nome} não pode doar sangue!`);
}