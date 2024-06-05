const randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playgame = true
if (playgame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('please enter a valid number')
    } else if (guess < 1) {
        alert('Please enter a number greater than zero!')
    } else if (guess > 100) {
        alert('Please enter a number less than or equal to one hundred!')
    } else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game over, the correct number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage("You guessed it right ")
        displayMessage(`Congratulations you won in ${numGuess} tries!`)
        endGame()
    } else if (guess < randomNumber) {
        displayMessage("number is low")
    } else if (guess > randomNumber) {
        displayMessage("number is high")
    }
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}
function endGame() {
    userInput.value = ''
    userInput.setAttribute('Disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id ='newGame'>Start new Game</h2>`
    startOver.appendChild(p)
    playgame = false
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parent(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled', '')
        startOver.removeChild(p)
        playgame = true

    })
}

l