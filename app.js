const playersURL = 'http://localhost:3000/players'
const array = []
const easyContainer = document.querySelector('#easyContainer')
const wrongAnswerButton = document.querySelectorAll('answer-btn')


fetch(playersURL)
    .then(response => response.json())
    .then(players => {
        const easyPlayers = players.splice(0, 7)

        players.forEach(player => {

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

                const playerNumber = document.createElement('li')

                playerNumber.innerText = `# ${player.numbers}`

                playerCard.append(title, playerNumber, playerTeams, playerDifficulty, playerImage)

                easyContainer.append(playerCard)
            })
        })
    })