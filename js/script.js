/* FizzBuzz

Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numeroù
e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz. 

*/

// 0. inizializzo nuova var a stringa vuota
var elemento = "";

// 1. ciclo for per ciclare la i
for (var i = 1; i <= 100; i++) {
  // 1.1 se è multiplo di entrambi (come prima condizione perchè va esclusa subito)
  // oppure if (i % 3 == 0 && i % 5 == 0)
  if (i % (3 * 5) == 0) {
    elemento += "<li>FizzBuzz</li>";
    // 1.2 se è SOLO multiplo di 5
  } else if (i % 5 == 0) {
    elemento += "<li>Buzz</li>";
    // 1.3 se è SOLO multiplo di 3
  } else if (i % 3 == 0) {
    elemento += "<li>Fizz</li>";
    // 1.4 ALTRIMENTI stampo i
  } else {
    elemento += "<li>" + i + "</li>";
  }
}

// 2. stampa a video dell'elemento in un <ul>
document.getElementById("elemento").innerHTML = elemento;
