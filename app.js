const playersURL = 'http://localhost:3000/players'
const container = document.querySelector('.container')
const question = document.querySelector('#question')
const answerButton1 = document.querySelector('.answer-btn1')
const answerButton2 = document.querySelector('.answer-btn2')
const answerButton3 = document.querySelector('.answer-btn3')
const answerButton4 = document.querySelector('.answer-btn4')
const nextButton = document.querySelector('#next-btn')


// answerButton1.addEventListener('click', handleWrongClick)
// answerButton2.addEventListener('click', handleWrongClick)
// answerButton3.addEventListener('click', handleCorrectClick)
// answerButton4.addEventListener('click', handleWrongClick)
// nextButton.addEventListener('click', setNextQuestion)


// function handleWrongClick(button) {
//     button.preventDefault()
//     answerButton1.innerText = `${answerButton1.innerText} ❌`
//     }


// function handleCorrectClick(event) {
//     event.preventDefault()
//     answerButton3.innerText = `${answerButton3.innerText} ✔️`
// }

// function setNextQuestion(event) {
//     event.preventDefault()
//     question.innerText = 'James Harden - Houston Rockets'
//     answerButton1.innerText = Math.floor(Math.random() * 50)
//     answerButton2.innerText = Math.floor(Math.random() * 50)
//     answerButton3.innerText = Math.floor(Math.random() * 50)
//     answerButton4.innerText = Math.floor(Math.random() * 50)
// }

fetch(playersURL)
    .then(response => response.json())
    .then(players => {
        const easyPlayers = players.splice(0, 7)
        easyPlayers.forEach(player => {

            const playerCard = document.createElement('ul')
            const title = document.createElement('h3')
            title.innerText = `${player.firstName} ${player.lastName}`

            const playerImage = document.createElement('img')
            playerImage.className = 'imagesOfPlayers'
            playerImage.src = player.image

            const playerDifficulty = document.createElement('li')
            playerDifficulty.innerText = player.difficulty

            const playerTeams = document.createElement('li')
            playerTeams.innerText = player.teams

            playerCard.append(title, playerTeams, playerDifficulty,)
            answerButton1.addEventListener('click', handleWrongClick)
            answerButton2.addEventListener('click', handleWrongClick)
            answerButton3.addEventListener('click', handleCorrectClick)
            answerButton4.addEventListener('click', handleWrongClick)
            nextButton.addEventListener('click', setNextQuestion)


            function handleWrongClick(button) {
            button.preventDefault()
            answerButton1.innerText = `${answerButton1.innerText} ❌`
             }


            function handleCorrectClick(event) {
             event.preventDefault()
            answerButton3.innerText = `${answerButton3.innerText} ✔️`
            }

            function setNextQuestion(event) {
            event.preventDefault()
            question.innerText = `${player.firstName} ${player.lastName}`
            answerButton1.innerText = Math.floor(Math.random() * 50)
            answerButton2.innerText = Math.floor(Math.random() * 50)
            answerButton3.innerText = Math.floor(Math.random() * 50)
            answerButton4.innerText = Math.floor(Math.random() * 50)
            }
        })
    })


