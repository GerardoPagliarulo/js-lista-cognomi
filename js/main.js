/**
 * LISTA COGNOMI
 */

var cognomeUtente
var listaCognomi

// Reference For
var elenco = document.getElementById('lista');

// Chiedere all' utente il cognome
cognomeUtente = prompt('Inserire il proprio cognome:');
// Lista cognomi
listaCognomi = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];

// Inserire il nome digitato in un array con altri cognomi
listaCognomi.push(cognomeUtente);
// Stampare la lista in ordine alfabetico
listaCognomi.sort();

for (i = 0; i < listaCognomi.length; i++) {
    nuovaLista = listaCognomi[i];
    // console.log(nuovaLista);

    var cognomePrecedente = elenco.innerHTML;
    console.log(cognomePrecedente);

    var nuovoCognome = '<li>' + nuovaLista + '</li>';
    elenco.innerHTML = cognomePrecedente + nuovoCognome;
}

// Indicare la posizione occupata nella lista dal cognome del nuovo utente
console.log('Il tuo cognome è alla posizione numero: ' + (listaCognomi.indexOf(cognomeUtente) + 1));

// Mostare a Schermo
document.getElementById('posizione-cognome').innerHTML = (listaCognomi.indexOf(cognomeUtente) + 1);