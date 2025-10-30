import readline from 'readline-sync'

let salario = readline.questionInt("Digite o salário: ")
let abono = readline.questionInt("Digite o abono: ")

let novoSalario = salario + abono

console.log(`Seu ganho total será ${novoSalario}`)
