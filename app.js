
const playersURL = 'http://localhost:3000/players'

fetch(playersURL)
    .then(response => response.json())
    .then(players => {
        players.forEach(player => {
            const li = document.createElement('li')
            li.innerText = `${player.firstName} ${player.lastName}`
            console.log(li)
        })
    })

