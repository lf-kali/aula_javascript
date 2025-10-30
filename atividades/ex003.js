import readline from 'readline-sync';

let salarioBruto = readline.questionInt(`Digite seu salário Bruto: `);
let adicNoturno = readline.questionInt(`Digite o adicional noturno: `);
let horasExtras = readline.questionInt(`Digite quanto em horas extras: `);
let descontos = readline.questionInt(`Digite os descontos: `);

let salarioLiquido = salarioBruto + adicNoturno + horasExtras - descontos;

console.log(`Salário Líquido: ${salarioLiquido}`);

