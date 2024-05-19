'use strict';

// const squadreDiCalcio = [
//     {nome: 'Juventus', puntiFatti: 0, falliSubiti: 0,},
//     {nome: 'Milan', puntiFatti: 0, falliSubiti: 0,},
//     {nome: 'Inter', puntiFatti: 0, falliSubiti: 0,},
//     {nome: 'Roma', puntiFatti: 0, falliSubiti: 0,},
//     {nome: 'Napoli', puntiFatti: 0, falliSubiti: 0,},
//   ];
  
//   console.log(squadreDiCalcio);

// termine dell'esercizio: nuovo array di squadre
// utilizzare squadre.map pre creare un nuovo array e se restituisco qualunque cosa, verrà pushata in un nuovo array

// spread operator element
// dopodiché creare solo i valori che vogliamo

//________________________________________________________________________________________________________________

/* Math.random() genera un numero casuale tra 0 (incluso) e 1 (escluso), e Math.floor() arrotonda all’intero più vicino. Quindi Math.floor(Math.random() * 100) genera un numero intero casuale tra 0 e 99. */

const squadreDiCalcio = [
    {nome: 'Juventus', puntiFatti: Math.floor(Math.random() * 100), falliSubiti: Math.floor(Math.random() * 100)},
    {nome: 'Milan', puntiFatti: Math.floor(Math.random() * 100), falliSubiti: Math.floor(Math.random() * 100)},
    {nome: 'Inter', puntiFatti: Math.floor(Math.random() * 100), falliSubiti: Math.floor(Math.random() * 100)},
    {nome: 'Roma', puntiFatti: Math.floor(Math.random() * 100), falliSubiti: Math.floor(Math.random() * 100)},
    {nome: 'Napoli', puntiFatti: Math.floor(Math.random() * 100), falliSubiti: Math.floor(Math.random() * 100)},
  ];

  console.log(squadreDiCalcio);