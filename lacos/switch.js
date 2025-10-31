import readline from 'readline-sync'

console.log("# ## ### #### #########   Menu   ########## #### ### ## #");
console.log("\n--Digite 1 para ver Indicação de um Livro--");
console.log("--Digite 2 para ler uma Frase Motivacional--");
console.log("--Digite 3 para receber uma Indicação de música--");

let opcao = readline.questionInt();

switch(opcao) {
    case 1:
        let validacao = readline.question("Você realmente gosta de livros? S/N").toLowerCase();
        if(validacao === "s") {
            console.log("Livro: o Alquimista");
        }
        else {
            console.log("Sem livros para você!");
        }        
        break; 
    case 2:
        console.log("Frase motivacional: Se você cair, levante! Não dá para andar deitado.");
        break;
    case 3:
        console.log("Música: AURORA - No Cure For Me.");
        break
    default:
        console.log("Opção inválida!");
}