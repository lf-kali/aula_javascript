import readline from 'readline-sync'

let continuar = true;

let cont = 0;

while(continuar) {
    console.log("miau", ++cont);

    continuar = readline.keyInYN("Continuar?");
}

console.log(`ufa! fiz ${cont} flexões!`);