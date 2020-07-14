/* FizzBuzz

Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numeroù
e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz. */

/* primo metodo ciclo for con 4 if - else */

// 0. inizializzo variabile per stampa a video
var elemento = "";

// 1. ciclo for per stampare i numeri da 1 a 100

for (var i = 1; i <= 100; i++) {
  // 2. condizione - verifica se multiplo SOLO di 3
  if (i % 3 == 0 && i % 5 != 0) {
    elemento += "<ul>Fizz</ul>";
    console.log("Fizz");
    // 3. condizione - verifica se multiplo SOLO di 5
  } else if (i % 3 != 0 && i % 5 == 0) {
    elemento += "<ul>Buzz</ul>";
    console.log("Buzz");
    // 4. condizione - verifica se multiplo di 3 E di 5
  } else if (i % 3 == 0 && i % 5 == 0) {
    elemento += "<ul>FizzBuzz</ul>";
    console.log("FizzBuzz");
    // 5. nessuna condizione - se NON è multiplo di alcuno
  } else {
    elemento += "<ul>" + i + "</ul>";
    console.log(i);
  }
}

document.getElementById("elemento").innerHTML = elemento;

/* secondo metodo if annidati */
// 0. inizializzo nuova var a stringa vuota
var elemento2 = "";

for (var i = 1; i <= 100; i++) {
  // if ESTERNO verifica se è multiplo DI UNO DEI DUE numeri dati
  if (i % 3 == 0 || i % 5 == 0) {
    // if annidato - se MULTIPLO SOLO di 3
    if (i % 3 == 0 && i % 5 != 0) {
      elemento2 += "<ul>Fizz</ul>";
    }
    // if annidato - se MULTIPLO SOLO di 5
    if (i % 3 != 0 && i % 5 == 0) {
      elemento2 += "<ul>Buzz</ul>";
      // if annidato - allora multiplo ENTRAMBI
    } else if (i % 3 == 0 && i % 5 == 0) {
      elemento2 += "<ul>FizzBuzz</ul>";
    }
    //   se nn entra nel PRIMO IF vuol dire che non è multiplo di NESSUNO DEI DUE
  } else {
    elemento2 += "<ul>" + i + "</ul>";
  }
}

document.getElementById("elemento2").innerHTML = elemento2;
