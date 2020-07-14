/* FizzBuzz

Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numeroù
e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz. 

*/

// 0. inizializzo nuova var a stringa vuota
var elemento = "";

// ciclo for per ciclare la i
for (var i = 1; i <= 100; i++) {
  // se è multiplo di entrambi
  if (i % 3 == 0 && i % 5 == 0) {
    elemento += "<li>FizzBuzz</li>";
    // se è multiplo di 5
  } else if (i % 5 == 0) {
    elemento += "<li>Buzz</li>";
    // se è multiplo di 3
  } else if (i % 3 == 0) {
    elemento += "<li>Fizz</li>";
    // altrimenti stampo i
  } else {
    elemento += "<li>" + i + "</li>";
  }
}

document.getElementById("elemento").innerHTML = elemento;
