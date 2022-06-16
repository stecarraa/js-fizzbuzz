// Esercizio di oggi: FizzBuzz nome repo: js-fizzbuzz

// Consegna:
// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?

// Consigli del giorno:
// Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare

// Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"


// BONUS 1: Crea un container nel DOM e aggiungendo (attravero la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
// BONUS 2: Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.

const fizzBuzzWrapper = document.getElementById('fizz-buzz-container');

// per prim cosa scrivo in consolo i numeri da 1 a 100 con il ciclo for

for (let i = 1; i < 101; i = i + 1){
    // ora che ho i miei 100 numeri attraverso gli if propongo le varie opzioni
    

     if ((i % 3 == 0) && (i % 5 == 0)){
        console.log('FizzBuzz')

        const fizzBuzzBox = document.createElement('div');

        fizzBuzzBox.classList.add('bg-primary','rounded','col', 'box','m-2','text-center');

        fizzBuzzBox.innerHTML = 'FizzBuzz';

        fizzBuzzWrapper.append(fizzBuzzBox);
    }

     else if(i % 3 == 0){
        console.log('Fizz');

        const fizzBuzzBox = document.createElement('div');

        fizzBuzzBox.classList.add('bg-secondary','rounded','col', 'box','m-2','text-center');

        fizzBuzzBox.innerHTML = 'Fizz';

        fizzBuzzWrapper.append(fizzBuzzBox);
    }
    else if(i % 5 == 0){
        console.log('Buzz');

        console.log('Fizz');

        const fizzBuzzBox = document.createElement('div');

        fizzBuzzBox.classList.add('bg-danger','rounded','col', 'box','m-2','text-center');

        fizzBuzzBox.innerHTML = 'Buzz';

        fizzBuzzWrapper.append(fizzBuzzBox);
    }

    
    else{
        console.log(i);
        console.log('Fizz');

        const fizzBuzzBox = document.createElement('div');

        fizzBuzzBox.classList.add('bg-light','rounded','col', 'box','m-2');

        fizzBuzzBox.innerHTML = i;

        fizzBuzzWrapper.append(fizzBuzzBox);
    }
    
}











