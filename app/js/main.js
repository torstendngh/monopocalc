let startCapital = 1500;
let salary = 200;
let container = document.getElementById("player-container");
let mode = "subtract";

let audioCash = new Audio("app/audio/cash.mp3");
let audioError = new Audio("app/audio/error.mp3");
let audioClick = new Audio("app/audio/click.mp3");
let audioPowerup = new Audio("app/audio/powerup.mp3");

let players = [
  {
    name: "Player 1",
    capital: startCapital,
    lost: false,
  },
  {
    name: "Player 2",
    capital: startCapital,
    lost: false,
  },
  {
    name: "Player 3",
    capital: startCapital,
    lost: false,
  },
  {
    name: "Player 4",
    capital: startCapital,
    lost: false,
  },
  {
    name: "Player 5",
    capital: startCapital,
    lost: false,
  },
];

updatePlayers();

function updatePlayers() {
  document.querySelectorAll(".player").forEach((e) => e.remove());
  for (let player of players) {
    addPlayer(container, player);
  }
}

function addPlayer(parent, player) {
  let playerName = player["name"];
  let playerCapital = player["capital"];
  let playerAlive = player["lost"] ? "player-dead" : "";
  let inRed =
    playerCapital < 0
      ? "var(--color-player-accent-5)"
      : "var(--color-player-text-1)";

  let playerColor = getRandomColor();
  let element = `
    <div class="player ${playerAlive}" id="${player}">
      <div class="player-colorbox" style="background-color: var(${playerColor});"></div>

      <div class="player-info">
        <span class="player-name" style="color: var(${playerColor});">${playerName}</span><br>
        <span class="player-money" style="color: ${inRed}">${playerCapital}</span>
        <span class="player-monopoly-money-icon">M</span>
      </div>

      <div class="player-seperator"></div>

      <div class="player-button" onclick="giveUp('${playerName}')">
        <div class="player-button-icon">
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5ZM15.4462 8.39705L15.5303 8.46967C15.7966 8.73594 15.8208 9.1526 15.6029 9.44621L15.5303 9.53033L13.061 12L15.5303 14.4697C15.7966 14.7359 15.8208 15.1526 15.6029 15.4462L15.5303 15.5303C15.2641 15.7966 14.8474 15.8208 14.5538 15.6029L14.4697 15.5303L12 13.061L9.53033 15.5303C9.26406 15.7966 8.8474 15.8208 8.55379 15.6029L8.46967 15.5303C8.2034 15.2641 8.1792 14.8474 8.39705 14.5538L8.46967 14.4697L10.939 12L8.46967 9.53033C8.2034 9.26406 8.1792 8.8474 8.39705 8.55379L8.46967 8.46967C8.73594 8.2034 9.1526 8.1792 9.44621 8.39705L9.53033 8.46967L12 10.939L14.4697 8.46967C14.7359 8.2034 15.1526 8.1792 15.4462 8.39705Z" fill="currentColor"/>
          </svg>
        </div>
        <span class="player-button-text">More</span>
      </div>

      <div class="player-seperator"></div>

      <div class="player-button" onclick="addSalary('${playerName}')">
        <div class="player-button-icon">
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 8C8.84315 8 7.5 9.34315 7.5 11C7.5 12.6569 8.84315 14 10.5 14C12.1569 14 13.5 12.6569 13.5 11C13.5 9.34315 12.1569 8 10.5 8ZM9 11C9 10.1716 9.67157 9.5 10.5 9.5C11.3284 9.5 12 10.1716 12 11C12 11.8284 11.3284 12.5 10.5 12.5C9.67157 12.5 9 11.8284 9 11Z" fill="currentColor"/>
            <path d="M2 7.25C2 6.00736 3.00736 5 4.25 5H16.75C17.9926 5 19 6.00736 19 7.25V14.75C19 15.9926 17.9926 17 16.75 17H4.25C3.00736 17 2 15.9926 2 14.75V7.25ZM4.25 6.5C3.83579 6.5 3.5 6.83579 3.5 7.25V8H4.25C4.66421 8 5 7.66421 5 7.25V6.5H4.25ZM3.5 12.5H4.25C5.49264 12.5 6.5 13.5074 6.5 14.75V15.5H14.5V14.75C14.5 13.5074 15.5074 12.5 16.75 12.5H17.5V9.5H16.75C15.5074 9.5 14.5 8.49264 14.5 7.25V6.5H6.5V7.25C6.5 8.49264 5.49264 9.5 4.25 9.5H3.5V12.5ZM17.5 8V7.25C17.5 6.83579 17.1642 6.5 16.75 6.5H16V7.25C16 7.66421 16.3358 8 16.75 8H17.5ZM17.5 14H16.75C16.3358 14 16 14.3358 16 14.75V15.5H16.75C17.1642 15.5 17.5 15.1642 17.5 14.75V14ZM3.5 14.75C3.5 15.1642 3.83579 15.5 4.25 15.5H5V14.75C5 14.3358 4.66421 14 4.25 14H3.5V14.75Z" fill="currentColor"/>
            <path d="M4.40137 18.5C4.92008 19.3967 5.8896 20 7.00002 20H17.25C19.8734 20 22 17.8734 22 15.25V10C22 8.8896 21.3967 7.92008 20.5 7.40137V15.25C20.5 17.0449 19.0449 18.5 17.25 18.5H4.40137Z" fill="currentColor"/>
          </svg>
        </div>
        <span class="player-button-text">Passed Go</span>
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
  `;

  parent.insertAdjacentHTML("beforeend", element);

  function getRandomColor() {
    return "--color-player-accent-" + randomIntFromInterval(2, 2);

    function randomIntFromInterval(min, max) {
      // min and max included
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  }
}

function addSalary(player) {
  let index = players.findIndex((element, index) => {
    if (element.name === player) {
      return true;
    }
  });
  players[index]["capital"] += salary;
  updatePlayers();
  playSound(audioCash);
}

function openTransactionPopup(player) {
  playSound(audioClick);
  let popup = document.getElementById("id-popup-transaction");
  let name = document.getElementById("id-popup-balance-text");
  let switchSubtract = document.getElementById("id-popup-switch-subtract");
  let switchAdd = document.getElementById("id-popup-switch-add");
  let currentBalance = document.getElementById("id-popup-balance");
  let buttonAccept = document.getElementById("id-popup-button-accept");
  let textbox = document.getElementById("id-popup-textbox");
  let modeSymbol = document.getElementById("popup-mode");

  let index = players.findIndex((element, index) => {
    if (element.name === player) {
      return true;
    }
  });

  currentBalance.innerHTML = players[index]["capital"];

  switchSubtract.onclick = () => {
    playSound(audioClick);
    switchAdd.classList.remove("popup-switch-option-selected");
    switchSubtract.classList.add("popup-switch-option-selected");
    mode = "subtract";
    modeSymbol.innerHTML = "-";
    modeSymbol.style.color = "var(--color-player-accent-5)";
  };

  switchAdd.onclick = () => {
    playSound(audioClick);
    switchAdd.classList.add("popup-switch-option-selected");
    switchSubtract.classList.remove("popup-switch-option-selected");
    mode = "add";
    modeSymbol.innerHTML = "+";
    modeSymbol.style.color = "var(--color-player-accent-7)";
  };

  buttonAccept.onclick = () => {
    if (!isNaN(parseInt(document.getElementById("id-popup-textbox").value))) {
      switch (mode) {
        case "subtract":
          {
            players[index]["capital"] -= parseInt(
              document.getElementById("id-popup-textbox").value
            );
          }
          break;
        case "add":
          {
            players[index]["capital"] += parseInt(
              document.getElementById("id-popup-textbox").value
            );
          }
          break;
      }
      playSound(audioCash);
      updatePlayers();
      closeTransactionPopup(false);
    } else {
      textbox.classList.add("shake-horizontal");
      playSound(audioError);
      textbox.addEventListener("webkitAnimationEnd", () => {
        textbox.classList.remove("shake-horizontal");
      });
    }
  };

  name.innerHTML = `${player}\'s Current Balance`;
  popup.style.display = "flex";
}

function closeTransactionPopup(isSound) {
  if (isSound) playSound(audioClick);
  let popup = document.getElementById("id-popup-transaction");
  popup.style.display = "none";
}

function giveUp(player) {
  let index = players.findIndex((element, index) => {
    if (element.name === player) {
      return true;
    }
  });
  players[index]["lost"] = true;
  playSound(audioPowerup);
  updatePlayers();
}

function playSound(sound) {
  sound.pause();
  sound.currentTime = 0;
  sound.play();
}
