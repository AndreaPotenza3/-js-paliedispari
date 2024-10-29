//Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

//Chiediamo un numero all'utente
const userChoice = prompt('Pari o Dispari?')
const userNumber = parseInt(prompt('Scegli un numero da 1 a 5'))
console.log(userChoice , userNumber)
//Chiediamo un numer al PC

const pcNumber = getRandomIntInclusive(1, 5)
console.log(pcNumber)

const somma = userNumber + pcNumber
console.log(somma)

if (somma % 2 === 0 && userChoice === 'Pari') {
    console.log('hai vinto')

}else if (somma % 2 === 0 && userChoice !== 'Pari'){
    console.log('Il pc ha vinto')

}else if (somma % 2 !== 0 && userChoice === 'Pari'){
    console.log('Il pc ha vinto')

}else if (somma % 2 !== 0 && userChoice !== 'Pari'){
    console.log('Hai vinto')
}
//FUNZIONI

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

