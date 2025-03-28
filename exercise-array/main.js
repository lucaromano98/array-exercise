// ESERCIZIO 1: Scrivi un programma che sommi gli elementi di un array


const numeri = [1, 2, 3, 4]

let somma = 0;

for(let i = 0; i < numeri.length; i++){
    somma = numeri[0] + numeri[1] + numeri[2] + numeri[3]
}

console.log("la somma degli elementi e' " + somma);

console.log(numeri.lenght)


//ESERCIZIO 2: Scrivi un programma che prenda un array di numeri e trovi il valore massimo

const numeri = [1 , 20 , 15, 33, 80];

let numeroMax = numeri[0];

for(let i = 0; i < numeri.length; i++){
    if(numeri[i] > numeroMax){
        numeroMax = numeri[i]
    } 
}

console.log("Il numero massimo e' "+ numeroMax);

// ESERCIZIO 3: Scrivi un programma che prenda un array di numeri e trovi il valore minimo.

const numeri = [ 99, 3 , 25, 5, 999];

let numeroMin = numeri[0];

for(let i = 0; i < numeri.length; i++){
    if(numeri[i] < numeroMin){
        numeroMin = numeri[i];
    }
}

console.log("il valore minimo e' " + numeroMin)

// ESERCIZIO 4: Scrivi un programma che prenda un array di numeri e restituisca un nuovo array contenente solo i numeri pari.

const numeri = [1 ,2, 3, 4, 5, 6]

const numeriPari = [];

for (let i = 0; i < numeri.length; i++) {
    
    if (numeri[i] % 2 === 0) {
        numeriPari.push(numeri[i])
    }
    
}

console.log("i numeri pari sono " + numeriPari);

// ESERCIZIO 5: Scrivi un programma che prenda due array e restituisca un nuovo array che contenga tutti gli elementi dei due array concatenati.

const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const arrayConcatenato = array1.concat(array2)

console.log(arrayConcatenato);

//ESERCIZIO 6: Scrivi un programma che prenda un array con elementi duplicati e restituisca un nuovo array con i duplicati rimossi.

const array = [1 , 2, 3, 2, 3, 4, 5]

const arraySenzaDuplicati = [];

for( let elemento of array){
    if(!arraySenzaDuplicati.includes(elemento)){
        arraySenzaDuplicati.push(elemento)
    }
}

console.log(arraySenzaDuplicati);


// ESERCIZIO 7: Scrivi un programma che prenda un array di stringhe e un elemento di ricerca e restituisca l'indice della prima occorrenza dell'elemento nell'array.

const parole = ["Luca" , "banana", "Pisello"]

let elementoDiRicerca = "Pisello"

let indice = parole.indexOf(elementoDiRicerca)

console.log("Indice di ", elementoDiRicerca, "nell'array: ", indice)


//Esercizio 8: Scrivi un programma che prenda un array e inverta l'ordine degli elementi.

const array = [ 1, 2, 3, 4, 5];

const arrayInvertito = array.reverse(array);

console.log (arrayInvertito)

// ESERCIZIO 9: Scrivi un programma che prenda un array di stringhe e calcoli la lunghezza media delle stringhe presenti.

const array = ["ciao", "buongiorno", "banana", "javascript"]

let lunghezza = 0

for (let stringa of array){
    lunghezza += stringa.length
}

let mediaLunghezza = lunghezza / array.length

console.log("La lunghezza media delle stringhe e: ", mediaLunghezza)

// ESERCIZIO 10: Scrivi un programma che prenda un array di parole e unisca tutti gli elementi in una singola stringa separati da uno spazio.

const array = ["ciao", "come", "stai"];

const stringaUnita = array.join(" ");

console.log("Stringa unita: ", stringaUnita);
