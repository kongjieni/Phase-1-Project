const playersURL = 'http://localhost:3000/players'
const playerContainer = document.querySelector('.container')
const array = []

fetch(playersURL)
    .then(response => response.json())
    .then(players => {
        players.forEach(player => {

            if (player.difficulty === 'easy') {
                const easyPlayers = document.createElement('li')
                easyPlayers.innerText = `${player.firstName} ${player.lastName}`
                playerContainer.append(easyPlayers)
            } 
            

            // const playerStats = document.createElement('ul')
            // playerStats.innerText = ''

            // const playerNumber = document.createElement('li')
            // playerNumber.innerText = player.numbers

            // const playerTeams = document.createElement('li')
            // playerTeams.innerText = player.teams

            // const playerDifficulty = document.createElement('li')
            // playerDifficulty.innerText = player.difficulty

            // playerStats.append(playerName, playerTeams, playerNumber, playerDifficulty)
            // // if (player.difficulty === 'easy') {
            // //     const easyPlayers = document.createElement('li')
            // //     easyPlayers.innerText = playerName
            // //     playerContainer.append(easyPlayers)
            
        })
    })