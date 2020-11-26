let name = prompt("Enter your name(Please make sure it is less than or equal to 10 letters)")
const playerName = document.getElementById("player-name")

if (name !== "" && name.length <= 10) {
  playerName.innerHTML = name
}

const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissor = document.getElementById("scissor")

function playerPlay() {
  let playerMove = ""
  rock.addEventListener('click', () => {
    playerMove = "rock"
    status = play(playerMove)
    scoreCheck(status)
  })

  paper.addEventListener('click', () => {
    playerMove = "paper"
    status = play(playerMove)
    scoreCheck(status)
  })

  scissor.addEventListener('click', () => {
    playerMove = "scissor"
    status = play(playerMove)
    scoreCheck(status)
  })
}

function computerPlay() {
  let value = Math.random();
  if (value <= 0.3333) {
    return "rock"
  } else if (value <= 0.6666) {
    return "paper"
  } else {
    return "scissor"
  }
}

function play(pM) {
  let cM = ""
  cM = computerPlay()

  if (pM === cM) {
    winInfo.textContent = "It was a draw"

  } else {
    if (pM === "rock" && cM === "scissor") {
      winInfo.textContent = `You won the computer choose ${cM}`
      return "win"
    } else if (pM === "paper" && cM === "rock") {
      winInfo.textContent = `You won the computer choose ${cM}`
      return "win"
    } else if (pM === "scissor" && cM === "paper") {
      winInfo.textContent = `You won the computer choose ${cM}`
      return "win"
    } else {
      winInfo.textContent = `You lost the computer choose ${cM}`
      return "loss"
    }
  }
}

function scoreCheck(status) {
  if (status === "win") {
    pS++
    pScore.textContent = pS
  } else if (status === "loss") {
    cS++
    cScore.textContent = cS
  }
}

let pS = 0
let cS = 0
const winInfo = document.getElementById("win-info")
const cScore = document.getElementById("c-score")
const pScore = document.getElementById("p-score")

playerPlay()