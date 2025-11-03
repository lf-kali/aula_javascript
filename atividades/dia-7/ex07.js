import readline from 'readline-sync';

let vetor = [8 ,2, 43, 23, 6, 12, 7, 35, 6, 1];

let alvo = readline.questionInt("Digite o número que você deseja encontrar: ");

let achado = false;

for (let i = 0; i < vetor.length; i++){
    if (vetor[i] === alvo){
        console.log(`Número ${alvo} localizado na posição ${i}`);
        achado = true;
        break;
    }
}

if(!achado){
    console.log(`Número ${alvo} não foi encontrado na lista.`);
}