


/* Per definire una variabile si usa let con console.log() si puo vedere il riusltato nella console dell'ispeziona elemento. 
   si possono concatenare piu variabili con gli operatori matematici quindi le classiche operazioni +,-,*,/. 
   Attenzione ai tipi di dato 

   Stringhe: "Sono una Stringa"
   Numerici: 1 2 3 4
   Nan: Not a Number
   Booleani: truty, falsy 

*/
//  Alcuni esempi
/* let name = "Jhon";
let surname = "Doe";


console.log(name);
console.log(surname);

let a = 2
let b = 3

console.log(a + b) */; //l'output e' 5


// Le variabili possono essere richiamate
let age = 11;

console.log(age);

age = 54;

console.log(age); //L'output sara'  54


// Le costanti, indicate con const, sono simili alle variabili ma non possono essere modificate come le varibili, const si utilizza per indicare una costante come per esempio il p greco

const pi = 3.14;

// pi = 10; // Se riassegnamo il volore della costante...

console.log(pi); // ...in consolle troveremo un errore proprio perche' non si possono riassegnare.

/* 
Quindi in JavaScript abbiamo due modi per assegnare un valore a una variabile, con:

let: i vaolri si possono riassegnare

            oppure

const: i valori non si possono riassegnare

*/


//ESERCIZIO: 

let a = 10; 

a = 50;
a = 25;
a = 10

console.log(a);

let b = 7 * a;

console.log(b);


const max = 57;
const actual = max - 13;
const percentage = actual / max;

console.log(percentage);
