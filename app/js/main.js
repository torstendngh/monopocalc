let startCapital = 2500
let container = document.getElementById("player-container")

let players = [
  {
    "name": "Torsten",
    "capital": startCapital,
    "lost": false
  },
  {
    "name": "Reinhard",
    "capital": startCapital,
    "lost": false
  },
  {
    "name": "Gudrun",
    "capital": startCapital,
    "lost": false
  },
  {
    "name": "Frank",
    "capital": startCapital,
    "lost": false
  },
  {
    "name": "Gail",
    "capital": startCapital,
    "lost": false
  }
]

updatePlayers()

function updatePlayers() {
  document.querySelectorAll('.player').forEach(e => e.remove());
  for (let player of players) {
    addPlayer(container, player)
  }
}

function addPlayer(parent, player) {

  let playerName = player["name"]
  let playerCapital = player["capital"]

  let playerColor = getRandomColor()
  let element = `
    <div class="player" id="${player}">
      <div class="player-colorbox" style="background-color: var(${playerColor});"></div>

      <div class="player-info">
        <span class="player-name" style="color: var(${playerColor});">${playerName}</span><br>
        <span class="player-money">${playerCapital}</span>
        <span class="player-monopoly-money-icon">M</span>
      </div>

      <div class="player-seperator"></div>

      <div class="player-button">
        <div class="player-button-icon">
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5ZM12 7C12.4142 7 12.75 7.33579 12.75 7.75V11.25H16.25C16.6642 11.25 17 11.5858 17 12C17 12.4142 16.6642 12.75 16.25 12.75H12.75V16.25C12.75 16.6642 12.4142 17 12 17C11.5858 17 11.25 16.6642 11.25 16.25V12.75H7.75C7.33579 12.75 7 12.4142 7 12C7 11.5858 7.33579 11.25 7.75 11.25H11.25V7.75C11.25 7.33579 11.5858 7 12 7Z"
              fill="currentColor" />
          </svg>
        </div>
        <span class="player-button-text">Add Salary</span>
      </div>

      <div class="player-button player-button-accent" style="background-color: var(${playerColor});" onclick="openTransactionPopup('${playerName}')">
        <div class="player-button-icon player-button-icon-accent">
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16 8.25C16 7.83579 16.3358 7.5 16.75 7.5C17.1642 7.5 17.5 7.83579 17.5 8.25V11.5C17.5 11.9142 17.1642 12.25 16.75 12.25H14C13.5858 12.25 13.25 11.9142 13.25 11.5C13.25 11.0858 13.5858 10.75 14 10.75H15.2705C14.7674 9.43442 13.4924 8.5 12.0001 8.5C10.907 8.5 9.96324 8.96361 9.32682 9.72938C9.06206 10.0479 8.5892 10.0916 8.27064 9.8268C7.95208 9.56205 7.90846 9.08918 8.17321 8.77062C9.09595 7.66036 10.4632 7 12.0001 7C13.636 7 15.0879 7.78531 16 8.99955V8.25ZM8 15V15.75C8 16.1642 7.66421 16.5 7.25 16.5C6.83579 16.5 6.5 16.1642 6.5 15.75V12.75C6.5 12.3358 6.83579 12 7.25 12H10C10.4142 12 10.75 12.3358 10.75 12.75C10.75 13.1642 10.4142 13.5 10 13.5H8.83669C9.39859 14.6829 10.6047 15.5 12.0001 15.5C13.0707 15.5 14.0368 15.0204 14.6786 14.2655C14.9469 13.9499 15.4202 13.9115 15.7358 14.1798C16.0514 14.4481 16.0897 14.9214 15.8214 15.237C14.9041 16.316 13.5252 17 12.0001 17C10.3638 17 8.91194 16.2143 8 15ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12Z"
              fill="currentColor" />
          </svg>
        </div>
        <span class="player-button-text player-button-text-accent">Transaction</span>
      </div>
    </div>
  `

  parent.insertAdjacentHTML('beforeend', element);

  function getRandomColor() {
    return "--color-player-accent-" + randomIntFromInterval(2, 2)

    function randomIntFromInterval(min, max) { // min and max included
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
  }
}



let mode = "subtract"

function openTransactionPopup(player) {

  let popup = document.getElementById("id-popup-transaction")
  let name = document.getElementById("id-popup-balance-text")
  let switchSubtract = document.getElementById("id-popup-switch-subtract")
  let switchAdd = document.getElementById("id-popup-switch-add")
  let currentBalance = document.getElementById("id-popup-balance")
  let buttonAccept = document.getElementById("id-popup-button-accept")
  let textbox = document.getElementById("id-popup-textbox")
  let modeSymbol = document.getElementById("popup-mode")
  let audio = new Audio('app/audio/cash.mp3');

  let index = players.findIndex((element, index) => {
    if (element.name === player) {
      return true
    }
  })

  currentBalance.innerHTML = players[index]["capital"]

  switchSubtract.onclick = () => {
    switchAdd.classList.remove("popup-switch-option-selected")
    switchSubtract.classList.add("popup-switch-option-selected")
    mode = "subtract"
    modeSymbol.innerHTML = "-"
    modeSymbol.style.color = "var(--color-player-accent-5)"
  };

  switchAdd.onclick = () => {
    switchAdd.classList.add("popup-switch-option-selected")
    switchSubtract.classList.remove("popup-switch-option-selected")
    mode = "add"
    modeSymbol.innerHTML = "+"
    modeSymbol.style.color = "var(--color-player-accent-7)"
  };

  buttonAccept.onclick = () => {
    console.log(index);
    switch (mode) {
      case "subtract": {
        players[index]["capital"] -= parseInt(document.getElementById("id-popup-textbox").value)
      } break
      case "add": {
        players[index]["capital"] += parseInt(document.getElementById("id-popup-textbox").value)
      } break
    }
    audio.play();
    updatePlayers()
    closeTransactionPopup()
  };

  name.innerHTML = `${player}\'s Current Balance`
  popup.style.display = "flex"

}

function closeTransactionPopup() {

  let popup = document.getElementById("id-popup-transaction")

  popup.style.display = "none"

}
