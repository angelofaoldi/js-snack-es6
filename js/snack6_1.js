'use strict';

const biciDaCorsa = [
    {nome: "Bianchi Oltre XR4", peso: 7.2},
    {nome: "Trek Madone SLR", peso: 6.8},
    {nome: "Cannondale SuperSix Evo", peso: 7.0},
    {nome: "Specialized Tarmac SL7", peso: 6.9},
    {nome: "Pinarello Dogma F12", peso: 6.7}
];

console.log(biciDaCorsa);

// scorrere l'elemento delle bici
// cerchiamo di capire la bici più leggera
// usiamo come riferimento il primo valore oppure avere un valore iniziale più grande dell'elenco
// nel mio elenco nulla pesa più di 7.2
// valore iniziale più pesante = peso: 10
// ciclo e confronto

// stampare la bici in posizione 0
// console.log(biciDaCorsa[0])
// della bici 0 voglio solo il nome o il peso? DOT NOTATION
// console.log(biciDaCorsa[0].nome);

// CICLO FOR = scorrere tutte le bici e le chiavi che ci servono (peso in questo caso, così poi inizieremo il paragone dei pesi)
// for (let i = 0; 1 < biciDaCorsa.length; i++){console.log(biciDaCorsa[i]);}

// CICLO FOR OF
// for (let nome of biciDaCorsa) {console.log(nome)}

// creare una variabile LET per una bici leggera
let biciLeggera = biciDaCorsa[4];

// CICLO FOR
for (let i = 0; 1 < biciDaCorsa.length; i++) {
    if 
}

// o creare un array con solo le bici più leggere
// o utilizzare direttamente filter che crea l'array ecc...

biciLeggere.push
// e alla fine stamparci biciLeggere

