// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
//Chiedere all'utente una parola

const userWord = prompt('Inserisci una parola')
    //console.log(userWord)

//Creare una funzione per capire se una parola è palindroma

let message  = (`la parola ${userWord} non è palindroma`)

function paliWord(word) {

    let newWord = ''

    word = word.toLowerCase()

    for (let i = 0; i < word.length; i++) {
        //console.log(i)
        const char = word.at(-i -1)
        //console.log(i, char)
        newWord += char
        if (newWord === userWord) {
            message = (`la parola ${userWord} è palindroma`)
        }
    }

    return message
      
}

const palindromeWord = paliWord(userWord)

console.log(palindromeWord)


