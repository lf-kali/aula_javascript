import readline from 'readline-sync';


console.log("########### LANCHONETE INIMIGA DA ANVISA ###########");
console.log("########### Faça seu pedido: ###########");
console.log("1 - Cachorro Quente"); //10
console.log("2 - X-Salada"); //15
console.log("3 - X-Bacon"); //18
console.log("4 - Bauru"); //12
console.log("5 - Refrigerante"); //8
console.log("6 - Suco de laranja"); //13
console.log("####################################################");

let pedido = readline.questionInt();
let produto;
let precoUnitario = 0;

switch(pedido){
    case 1:
        precoUnitario = 10;
        produto = "Cachorro Quente";
        break;
    case 2:
        precoUnitario = 15;
        produto = "X-Salada"
        break;
    case 3:
        precoUnitario = 18;
        produto = "X-Bacon";
        break;
    case 4:
        precoUnitario = 12;
        produto = "Bauru";
    case 5:
        precoUnitario = 8;
        produto = "Refrigerante";
        break;
    case 6:
        precoUnitario = 13;
        produto = "Suco de laranja";
        break;
    default:
        console.log("Opção inválida!")
}

let quantidade = readline.questionInt("Digite a quantidade: ");

console.log("####################################################");

let total = precoUnitario * quantidade;

console.log(`Produto: ${produto}`);
console.log(`Valor Total: ${total}`);
