let name = prompt("Enter your name(Please make sure it is less than or equal to 10 letters)")
const playerName = document.getElementById("player-name")

if (name !== "" && name.length <= 10) {
  playerName.innerHTML = name
}

const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissor = document.getElementById("scissor")

function playerPlay() {
  rock.addEventListener('click', () => {
    playerMove = "rock"
  })

  paper.addEventListener('click', () => {
    playerMove = "paper"
  })

  scissor.addEventListener('click', () => {
    playerMove = "scissor"
  })
}

playerPlay()