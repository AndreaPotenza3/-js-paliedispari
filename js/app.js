// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
//Chiedere all'utente una parola

const userWord = prompt('Inserisci una parola')
    //console.log(userWord)

//Creare una funzione per capire se una parola è palindroma

let message  = 'la tua parola non è palindroma'

function paliWord(word) {

    let newWord = ''

    for (let i = 0; i < word.length; i++) {
        //console.log(i)
        const char = word.at(-i -1)
        //console.log(i, char)
        newWord += char
        if (newWord === userWord) {
            message = 'la tua parola è palindrome'
        }
    }

    return message
      
}

const palindromeWord = paliWord(userWord)
console.log(palindromeWord)




//Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

//Chiediamo un numero all'utente
const userNumber = prompt('Scegli un numero da 1 a 5')
console.log(userNumber)
//Chiediamo un numer al PC
//const pcNumber = Math.floor(Math.random() * 5) + 1 //numeber 1-5
//console.log(pcNumber)

function pcNumberGen(number) {
    
}
