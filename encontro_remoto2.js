let numerodealunos = 10;

for (let contador = 0; contador <= numerodealunos; contador++) {
    console.log (contador)


    if (contador == 0) {
        console.log ("o numero atual é zero");
    } else if (contador % 2 == 0) {
        console.log ("O numero " + contador + " é par")
    } else {
        console.log (`O numero ${contador} é Ímpar`)
    }
}

//novo exemplo

let nomedealunos = ["Caique", "Lucas", "Daniela", "Roseli", "Osvaldo"]


for (let nome of nomedealunos) {
    console.log (`Esta pessoa se chama.. ${nome}`)
}