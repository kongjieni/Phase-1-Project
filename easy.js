const playersURL = 'http://localhost:3000/players'
const container = document.querySelector('.container')
const question = document.querySelector('#question')
const playerImage = document.querySelector('.playerImage')
const easyPlayers = []
const scoreboard = document.querySelector('.scoreboard')
const questionNumberHolder = document.querySelector('.questionNumber')
let questionNumber = 1
let currentPlayer = 0
let score = 0
let correctAnswer = []
const finalPage = document.querySelector('.finalPage')
const answerButton1 = document.querySelector('.answer-btn1')
const answerButton2 = document.querySelector('.answer-btn2')
const answerButton3 = document.querySelector('.answer-btn3')
const answerButton4 = document.querySelector('.answer-btn4')
const answerButtons = document.querySelector('#answer-buttons')
const nextButton = document.querySelector('#next-btn')
const finalScore = document.createElement('a')
finalScore.className = "finalScore"
finalScore.href = "easy.html"






fetch(playersURL)
    .then(response => response.json())
    .then(players => {
        players.forEach(player => {
            if (player.difficulty === 'easy') {
                easyPlayers.push(player)
            }
        })
        handleQuestion(currentPlayer)
        handleChoices(currentPlayer)
        shuffleChoices()
    })

answerButton1.addEventListener('click', () => {
    otherButtons(answerButton1)
})

answerButton2.addEventListener('click', () => {
    otherButtons(answerButton2)
})

answerButton3.addEventListener('click', () => {
    otherButtons(answerButton3)
})

answerButton4.addEventListener('click', () => {
    checkAnswer()
    answerButton4.setAttribute("disabled", "")
})


nextButton.addEventListener('click', event => {
    event.preventDefault()
    if (currentPlayer >= easyPlayers.length - 1) {
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
    question.remove()
    playerImage.remove()
    scoreboard.remove()
    questionNumberHolder.remove()
    
    if(parseInt(score) <= 0){
        finalScore.innerText = "Play Again"
    } else if (parseInt(score) > 0) {
        finalScore.href = "intermediate.html"
        finalScore.innerText = "Next Level"
    }
    finalPage.append(finalScore)
    
}

function handleQuestion(count) {
    const playerData = easyPlayers[count]
    question.innerText = `${playerData.firstName} ${playerData.lastName} - ${playerData.teams[0]}`
    playerImage.src = playerData.image


}

function handleChoices(count) {
    answerButton1.innerText = Math.floor(Math.random() * 99)
    answerButton2.innerText = Math.floor(Math.random() * 99)
    answerButton3.innerText = Math.floor(Math.random() * 99)
    answerButton1.style.opacity = 1
    answerButton2.style.opacity = 1
    answerButton3.style.opacity = 1
    answerButton1.removeAttribute("disabled")
    answerButton2.removeAttribute("disabled")
    answerButton3.removeAttribute("disabled")
    const playerData = easyPlayers[count]
    let correctAnswer = playerData.numbers
    answerButton4.innerText = correctAnswer[0]
    answerButton4.removeAttribute("disabled")
}

function shuffleChoices() {
    for (let i = answerButtons.children.length; i >= 0; i--) {
        answerButtons.appendChild(answerButtons.children[Math.random() * i | 0])
    }
}

function checkAnswer(answer) {
    let correctAnswers = easyPlayers[currentPlayer].numbers
    correctAnswers.forEach(answer => {
        answerButton4.innerText = '✅'
    })
    score++
    scoreboard.innerText = `Score: ${score}`

}

function otherButtons(button) {
    button.style.opacity = .5
    button.innerText = '❌'
    score --
    scoreboard.innerText = `Score: ${score}`
    button.setAttribute('disabled', "")
}


// function shufflePlayers() {
//     for (let i = easyPlayers.length; i >=0; i--) {
//         let j = Math.floor(Math.random() * (i + 1));
//         let temp = easyPlayers[i];
//         easyPlayers[i] = easyPlayers[j]
//         easyPlayers[j] = temp
//     }
// }




// To do list

// randomize player order
