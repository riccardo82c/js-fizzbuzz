/* FizzBuzz

Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numeroù
e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz. */

// 1. ciclo for per stampare i numeri da 1 a 100

for (var i = 1; i <= 100; i++) {
  // 2. condizione - verifica se multiplo SOLO di 3
  if (i % 3 == 0 && i % 5 != 0) {
    console.log("Fizz");
    // 3. condizione - verifica se multiplo SOLO di 5
  } else if (i % 3 != 0 && i % 5 == 0) {
    console.log("Buzz");
    // 4. condizione - verifica se multiplo di 3 E di 5
  } else if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
    // 5. nessuna condizione - se NON è multiplo di alcuno
  } else {
    console.log(i);
  }
}
