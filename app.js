const playersURL = 'http://localhost:3000/players'
const container = document.querySelector('.container')
const question = document.querySelector('#question')
const easyPlayers = []
let currentPlayer = 0
let score = 0
let correctAnswer = 0
const answerButton1 = document.querySelector('.answer-btn1')
const answerButton2 = document.querySelector('.answer-btn2')
const answerButton3 = document.querySelector('.answer-btn3')
const answerButton4 = document.querySelector('.answer-btn4')
const answerButtons = [
    answerButton1,
    answerButton2,
    answerButton3,
    answerButton4
]
const nextButton = document.querySelector('#next-btn')

fetch(playersURL)
    .then(response => response.json())
    .then(players => {
        players.forEach(player => {
            if (player.difficulty === 'easy') {
                easyPlayers.push(player)
            }
        })
        handleQuestion(currentPlayer)
    })


nextButton.addEventListener('click', event => {
    event.preventDefault()
    if (currentPlayer >= easyPlayers.length - 1) {
        return handleEnding()
    }
    currentPlayer++
    handleQuestion(currentPlayer)
})


function handleEnding() {
    answerButton1.remove()
    answerButton2.remove()
    answerButton3.remove()
    answerButton4.remove()
    nextButton.remove()
    question.innerText = 'Congratulations!'
}

function handleQuestion(count) {
    const playerData = easyPlayers[count]
    question.innerText = `${playerData.firstName} ${playerData.lastName} - ${playerData.teams[0]}`
}




// To do list

// get buttons to have numbers, 1 jersey 3 random.

// score - function increment score when correct, 

// interpolate score into results page

// randomize button order

// randomize player order
