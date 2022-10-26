"use strict";
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// 1. genero il numero per il giocatore
const playerNumber = Math.floor(Math.random() * 6) + 1;
// 2. genero il numero per la cpu
const cpuNumber = Math.floor(Math.random() * 6) + 1;
console.log(playerNumber, cpuNumber);
// 3. SE il numero del giocatore è > del numero della cpu - ha vinto il giocatore
//    ALTRIMENTI SE il numero del giocatore è < del numero della cpu - ha vinto la cpu
//    ELSE i numeri sono uguali - pareggio
if( playerNumber > cpuNumber ) {
    console.log("Ha vinto il giocatore");
} else if( playerNumber < cpuNumber ) {
    console.log("Ha vinto il computer");
} else {
    console.log("Pareggio");
}