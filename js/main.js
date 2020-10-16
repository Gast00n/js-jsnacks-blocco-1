/**
 * 
 *  SNACK 1 (Decommenta per attivare il codice)
 * 
 */

// var num1 = parseInt( prompt('Inserisci il primo numero') );
// var num2 = parseInt( prompt('Inserisci il secondo numero') );

// if (num1 > num2) {
//     document.getElementById('snack1').innerHTML = 'Il numero maggiore è: ' + num1; 
// } else if (num1 < num2) {
//     document.getElementById('snack1').innerHTML = 'Il numero maggiore è: ' + num2; 
// } else {
//     document.getElementById('snack1').innerHTML = 'I due numeri sono uguali'; 
// }

 /**
 * 
 *  SNACK 2 (Decommenta per attivare il codice)
 * 
 */

// var parola1 = prompt('Inserisci la prima parola');
// var long1 = parola1.length;

// var parola2 = prompt('Inserisci la seconda parola');
// var long2 = parola2.length;

// if (long1 > long2) {
//     document.getElementById('snack2').innerHTML = parola2 + ' ' + parola1;
// } else if (long2 > long1) {
//     document.getElementById('snack2').innerHTML = parola1 + ' ' + parola2;
// } else {
//     document.getElementById('snack2').innerHTML = 'Le due parole sono lunghe uguali';
// }

 /**
 * 
 *  SNACK 3 (Decommenta per attivare il codice)
 * 
 */

// var somma = 0;
// for (var i = 0; i < 5; i++) {
//     var number = parseInt( prompt('Inserire un numero:') );
//     somma = somma + number;
// }

// document.getElementById('snack3').innerHTML = 'La somma dei numeri inseriti è: ' + somma;


 /**
 * 
 *  SNACK 4 (Decommenta per attivare il codice)
 * 
 */


 var invitati = ['paolo', 'fabio', 'lorenzo'];
 var numinv = invitati.length;
 var user = prompt('Fornisci il tuo nome:').toLowerCase();
 var utenteReg = false;

 for (var i = 0; i < numinv; i++) {

    if (user == invitati[i]) {
        utenteReg = true;
    }
 }

 if (utenteReg == true) {
    document.getElementById('snack4').innerHTML = 'Benvenuto, sei in lista!';
 } else {
    document.getElementById('snack4').innerHTML = 'Mi spiace, non sei in lista!';
 }


 /**
 * 
 *  SNACK 5 (Decommenta per attivare il codice)
 * 
 */

 