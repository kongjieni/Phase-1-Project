
const playersURL = 'http://localhost:3000/players'

fetch(playersURL)
    .then(response => response.json())
    .then(players => {
        players.forEach(player => {
            const easyContainer = document.getElementsByClassName('.easyContainer')
            // console.log(easyContainer)

            const playerName = document.createElement('h3')
            playerName.innerText = `${player.firstName} ${player.lastName}`

            const playerStats = document.createElement('ul')
            playerStats.innerText = ''

            const playerNumber = document.createElement('li')
            playerNumber.innerText = player.numbers

            const playerTeams = document.createElement('li')
            playerTeams.innerText = player.teams

            const playerDifficulty = document.createElement('li')
            playerDifficulty.innerText = player.difficulty

            playerStats.append(playerName, playerTeams, playerNumber, playerDifficulty)
            // console.log(player.difficulty)

            if (player.difficulty === 'easy') {
                const easyPlayers = document.createElement('li')
                easyPlayers.innerText = player.firstName
                // easyContainer.append(easyPlayers)
                console.log(easyContainer)
            }
        })
    })

