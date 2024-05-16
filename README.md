SNACK 1

1) Creare un array di oggetti
2) Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

biciDaCorsa = [
    {"nome": "Bianchi Oltre XR4", "peso": 7.2},
    {"nome": "Trek Madone SLR", "peso": 6.8},
    {"nome": "Cannondale SuperSix Evo", "peso": 7.0},
    {"nome": "Specialized Tarmac SL7", "peso": 6.9},
    {"nome": "Pinarello Dogma F12", "peso": 6.7}
];

console.log(biciDaCorsa);


3) Stampare a schermo la bici con peso minore utilizzando template literal
    - I template literal sono delimitati dai caratteri backtick ( ` ).
    - Per inserire espressioni all’interno di un template literal si utilizza la sintassi ${expression}.

    const userName = 'Marie';
    const balance = 10;

    const str2 = \`Ciao ${userName}, il tuo saldo è ${balance}.\`;
    console.log("Template literal:", str2);





________________________________________________________________________________________________________________________

SNACK 2

1) Creare un array di oggetti di squadre di calcio. 
2) Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
3) Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

const squadreDiCalcio = [
  {nome: 'Juventus', puntiFatti: 0, falliSubiti: 0,},
  {nome: 'Milan', puntiFatti: 0, falliSubiti: 0,},
  {nome: 'Inter', puntiFatti: 0, falliSubiti: 0,},
  {nome: 'Roma', puntiFatti: 0, falliSubiti: 0,},
  {nome: 'Napoli', puntiFatti: 0, falliSubiti: 0,},
];

console.log(squadreDiCalcio);

4) Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.

5) Creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
