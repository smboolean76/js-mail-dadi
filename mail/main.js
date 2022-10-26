"use strict";
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
const emails = ["samuele.madrigali@gmail.com", "franco.bianchi@libero.it", "mario.rossi@icloud.com", "francesca.verdi@gmail.com"];

const userEmail = prompt("Inserisci la tua email");

let found = false;
for( let i = 0; i < emails.length; i++ ) {
    if( userEmail === emails[i] ) {
        found = true;
        break;
    }
}

if( found ) {
    alert("Accesso autorizzato!");
} else {
    alert("Accesso negato!");
}

// if( emails.includes(userEmail) ) {
//     alert("Accesso autorizzato!");
// } else {
//     alert("Accesso negato!");
// }

// if( emails.indexOf(userEmail) >= 0 ) {
//     alert("Accesso autorizzato!");
// } else {
//     alert("Accesso negato!");
// }