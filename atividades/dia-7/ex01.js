import readline from 'readline-sync';

let num1 = readline.questionInt("Digite o primeiro número do intervalo: ");

let num2 = readline.questionInt("Digite o último número do intervalo: ");

if(num2 < num1){
    console.log("Intervalo inválido!");
}
else{

    console.log(`No intervalo entre ${num1} e ${num2}: `);

    for (let i = num1; i < num2; i++) {
        if(i % 3 == 0 && i % 5 == 0 && i !== 0) {
            console.log(`${i} é múltiplo de 3 e 5.\n`);
        }
    }    
}