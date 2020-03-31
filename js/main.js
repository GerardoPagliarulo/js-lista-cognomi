/**
 * LISTA COGNOMI
 */

var cognomeUtente
var listaCognomi

// Chiedere all' utente il cognome
cognomeUtente = prompt('Inserire il proprio cognome:');
//Lista cognomi
listaCognomi = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];

// Inserire il nome digitato in un array con altri cognomi
listaCognomi.push(cognomeUtente);
// Stampare la lista in ordine alfabetico
listaCognomi.sort();

for (i = 0; i < listaCognomi.length; i++) {
    nuovaLista = listaCognomi[i];
    console.log(nuovaLista);
}

// Indicare la posizione occupata nella lista dal cognome del nuovo utente
console.log('Il tuo nome è alla posizione numero: ' + (listaCognomi.indexOf(cognomeUtente) + 1));