import readline from 'readline-sync'

let nota1, nota2, media;

nota1 = readline.questionFloat("Digite a primeira nota: ");
nota2 = readline.questionFloat("Digite a segunda nota: ");

media = (nota1 + nota2) / 2;

console.log(`A média foi ${media} e você foi ${media >= 6 ? "Aprovado" : "Reprovado" }!`)