'use strict';

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
// let biciLeggera = biciDaCorsa[4];

// CICLO FOR
// for (let i = 0; 1 < biciDaCorsa.length; i++) {
//     if 
// }

// o creare un array con solo le bici più leggere
// o utilizzare direttamente filter che crea l'array ecc...

// biciLeggere.push
// e alla fine stamparci biciLeggere

let biciDaCorsa = [
    {nome: "Bianchi Oltre XR4", peso: 7.2},
    {nome: "Trek Madone SLR", peso: 6.8},
    {nome: "Cannondale SuperSix Evo", peso: 7.0},
    {nome: "Specialized Tarmac SL7", peso: 6.9},
    {nome: "Pinarello Dogma F12", peso: 6.7}
];

console.log(biciDaCorsa);

/* 
come fare per stamoare a schermo la bici più leggera?
- iniziamo assumendo che la prima bici nell'array sia la più leggera
- iteriamo successivamente per tutto l'array e
    se troviamo una bici con un peso inferiore = la impostiamo come la nuova bici leggera
- stampiamo il risultato del ciclo, cioò la bici più leggera
*/

// PRIMA BICI = BICI LEGGERA
let biciLeggera = biciDaCorsa[0];

// CICLO FOR
for(let i = 1; i < biciDaCorsa.length; i++) {
    
}



