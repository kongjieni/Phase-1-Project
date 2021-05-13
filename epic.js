const playersURL = 'http://localhost:3000/players'
const container = document.querySelector('.container')
const question = document.querySelector('#question')
const playerImage = document.querySelector('.playerImage')
const epicPlayers = []
const scoreboard = document.querySelector('.scoreboard')
const questionNumberHolder = document.querySelector('.questionNumber')
let questionNumber = 1
let currentPlayer = 0
let score = 0
let correctAnswer = []
const answerButton1 = document.querySelector('.answer-btn1')
const answerButton2 = document.querySelector('.answer-btn2')
const answerButton3 = document.querySelector('.answer-btn3')
const answerButton4 = document.querySelector('.answer-btn4')
const answerButtons = document.querySelector('#answer-buttons')
const nextButton = document.querySelector('#next-btn')

fetch(playersURL)
    .then(response => response.json())
    .then(players => {
        players.forEach(player => {
            if (player.difficulty === 'hard') {
                epicPlayers.push(player)
            }
        })
        handleQuestion(currentPlayer)
        handleChoices(currentPlayer)
        shuffleChoices()
    })

answerButton4.addEventListener('click', () => {
    checkAnswer()
})

nextButton.addEventListener('click', event => {
    event.preventDefault()
    if (currentPlayer >= epicPlayers.length - 1) {
        return handleEnding()
    }
    currentPlayer++
    handleQuestion(currentPlayer)
    handleChoices(currentPlayer)
    shuffleChoices()
    questionNumber++
    questionNumberHolder.innerText = `${questionNumber} of 10`
})


function handleEnding() {
    answerButton1.remove()
    answerButton2.remove()
    answerButton3.remove()
    answerButton4.remove()
    nextButton.remove()
    question.innerText = `You're the real mvp!`
    playerImage.remove()
}

function handleQuestion(count) {
    const playerData = epicPlayers[count]
    question.innerText = `${playerData.firstName} ${playerData.lastName} - ${playerData.teams[0]}`
    playerImage.src = playerData.image
}

function handleChoices(count) {
    answerButton1.innerText = Math.floor(Math.random() * 50)
    answerButton2.innerText = Math.floor(Math.random() * 50)
    answerButton3.innerText = Math.floor(Math.random() * 50)
    const playerData = epicPlayers[count]
    let correctAnswer = playerData.numbers
    answerButton4.innerText = correctAnswer[0]
}

function shuffleChoices() {
    for (let i = answerButtons.children.length; i >=0; i--) {
        answerButtons.appendChild(answerButtons.children[Math.random() * i | 0])
    }
}

function checkAnswer(answer) {
    let correctAnswers = epicPlayers[currentPlayer].numbers
    correctAnswers.forEach(answer => {
        answerButton4.innerText = `${correctAnswers[0]} ✅`
    })
    score += 3
    scoreboard.innerText = `Score: ${score}`
}