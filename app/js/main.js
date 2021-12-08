let startCapital = 2500
let container = document.getElementById("player-container")
let players = []

players = {
  "Torsten": startCapital,
  "Reinhard": startCapital,
  "Gudrun": startCapital,
  "Gail": startCapital,
  "Frank": startCapital,
}

for (let player in players) {
  addPlayer(container, player)
}

function addPlayer(parent, player) {

  let playerColor = getRandomColor()
  let element = `
    <div class="player" id="${player}">

      <div class="player-colorbox" style="background-color: var(${playerColor});"></div>

      <div class="player-info">
        <span class="player-name" style="color: var(${playerColor});">${player}</span><br>
        <span class="player-monopoly-money-icon">M</span>
        <span class="player-money">${players[player]}</span>
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

      <div class="player-button player-button-accent" style="background-color: var(${playerColor});" onclick="">
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
    return "--color-player-accent-" + randomIntFromInterval(1, 8)

    function randomIntFromInterval(min, max) { // min and max included
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
  }
}




function openTransactionPopup(parent, player) {
  let element = `
    <div class="popup-blur">
      <div class="popup-container">
        <div class="popup-close" onclick="this.parentElement.parentElement.remove()">
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4.39705 4.55379L4.46967 4.46967C4.73594 4.2034 5.1526 4.1792 5.44621 4.39705L5.53033 4.46967L12 10.939L18.4697 4.46967C18.7626 4.17678 19.2374 4.17678 19.5303 4.46967C19.8232 4.76256 19.8232 5.23744 19.5303 5.53033L13.061 12L19.5303 18.4697C19.7966 18.7359 19.8208 19.1526 19.6029 19.4462L19.5303 19.5303C19.2641 19.7966 18.8474 19.8208 18.5538 19.6029L18.4697 19.5303L12 13.061L5.53033 19.5303C5.23744 19.8232 4.76256 19.8232 4.46967 19.5303C4.17678 19.2374 4.17678 18.7626 4.46967 18.4697L10.939 12L4.46967 5.53033C4.2034 5.26406 4.1792 4.8474 4.39705 4.55379L4.46967 4.46967L4.39705 4.55379Z"
              fill="currentColor" />
          </svg>
        </div>

        <span class="popup-balance-text">${player} Current Balance</span>
        <div class="popup-balance-container">
          <span class="player-monopoly-money-icon">M</span>
          <span class="player-money">450</span>
        </div>
        <div class="popup-switch">
          <div class="popup-switch-option popup-switch-option-selected">
            Subtract
          </div>
          <div class="popup-switch-option">
            Add
          </div>
        </div>

        <div class="popup-textbox-container">
          <span style="font-size: 64px; color: var(--color-player-text-2); padding: 8px;">-</span>
          <input type="number" class="popup-textbox" placeholder="0" min="0" max="100000">
        </div>

        <div class="popup-button">
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5ZM10.75 13.4393L15.2197 8.96967C15.5126 8.67678 15.9874 8.67678 16.2803 8.96967C16.5466 9.23594 16.5708 9.6526 16.3529 9.94621L16.2803 10.0303L11.2803 15.0303C11.0141 15.2966 10.5974 15.3208 10.3038 15.1029L10.2197 15.0303L7.71967 12.5303C7.42678 12.2374 7.42678 11.7626 7.71967 11.4697C7.98594 11.2034 8.4026 11.1792 8.69621 11.3971L8.78033 11.4697L10.75 13.4393L15.2197 8.96967L10.75 13.4393Z"
              fill="currentColor" />
          </svg>
          <span style="padding-left: 8px; vertical-align: middle;">
            Accept
          </span>

        </div>

      </div>
    </div>
  `
  parent.insertAdjacentHTML('beforeend', element);


}
