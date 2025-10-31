import readline from 'readline-sync';

let saldo = 1000;

console.log("########### BANCO SANGUESSUGA ###########");
console.log("1 - Consultar saldo");
console.log("2 - Saque");
console.log("3 - Depósito");
console.log("#########################################");

let opcao = readline.questionInt();

switch(opcao){
    case 1:
        console.log("Operação: Saldo");
        console.log(`Saldo: ${saldo}`);
        break;
    case 2:
        console.log("Operação: Saque");
        let valorSaque = readline.questionFloat("Valor do saque: ");
        
        if (valorSaque <= saldo) {
            saldo -= valorSaque;
            console.log(`Sacando R$ ${valorSaque.toFixed(2)}...`);
            console.log(`Novo saldo: ${saldo}`);
        }
        else {
            console.log("Saldo insuficiente!");
        }
        break;
    case 3:
        console.log("Operação: Depósito");
        let valorDeposito = readline.questionFloat("Valor do depósito: ");
        saldo += valorDeposito;
        console.log(`Depositando R$ ${valorDeposito.toFixed(2)}...`);
        console.log(`Novo saldo: ${saldo}`);
        break;
    default:
        console.log("Opção inválida!")
        break;
}
