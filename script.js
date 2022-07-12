"use strict";
// declering html elements into constents

const nameEl0 = document.querySelector("#name--0");
const nameEl1 = document.querySelector("#name--1");
const scoreEl0 = document.querySelector("#score--0");
const scoreEl1 = document.querySelector("#score--1");
const diceEl = document.querySelector(".dice");
const btnnewEl = document.querySelector(".btn--new");
const btnrollEl = document.querySelector(".btn--roll");
const btnholdEl = document.querySelector(".btn--hold");
const currentEl0 = document.querySelector("#current--0");
const currentEl1 = document.querySelector("#current--1");
const playerEl0 = document.querySelector(".player--0");
const playerEl1 = document.querySelector(".player--1");

const nam1 = prompt("first player");
const nam2 = prompt("second player");

let currentscoreEl = 0;
let activePlayer = 0;

//switchplayer
let swPlayer = function () {
  //switch player

  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentscoreEl = 0;

  //changing baground color

  playerEl0.classList.toggle("player--active");
  playerEl1.classList.toggle("player--active");
};

//new game function

const newGame = function () {
  //setting evrything to 0
  currentEl0.textContent = 0;
  currentEl1.textContent = 0;
  scoreEl0.textContent = 0;
  scoreEl1.textContent = 0;
  activePlayer = 0;
  nameEl0.textContent = "PLAYER 1";
  nameEl1.textContent = "PLAYER 2";

  //change the players background to initial

  if (!playerEl0.classList.contains("player--active")) {
    playerEl0.classList.add("player--active");
  }

  if (playerEl1.classList.contains("player--active")) {
    playerEl1.classList.remove("player--active");
  }
  diceEl.classList.add("hidden");
  playerEl0.style.backgroundColor = "rgba(255, 255, 255, 0.35)";
  playerEl1.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
};

//hiding the dice

diceEl.classList.add("hidden");

//making dice appear on roll

btnrollEl.addEventListener("click", function () {
  // random number gen

  let ranNum = Math.trunc(Math.random() * 6) + 1;

  //removing hidden

  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${ranNum}.png`;

  //updating score

  if (ranNum !== 1) {
    currentscoreEl += ranNum;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentscoreEl;
  } else {
    swPlayer();
  }
});

//hold

btnholdEl.addEventListener("click", function () {
  document.querySelector(`#score--${activePlayer}`).textContent =
    Number(document.querySelector(`#score--${activePlayer}`).textContent) +
    Number(currentscoreEl);

  //ending the game

  if (
    Number(scoreEl0.textContent) >= 10 ||
    Number(scoreEl1.textContent >= 10)
  ) {
    nameEl0.textContent = activePlayer === 0 ? nam1 : nam2;
    nameEl1.textContent = "winner";
    diceEl.classList.add("hidden");
    document.querySelector(".player--active").style.backgroundColor = "#66BFBF";
  }

  //switching player

  swPlayer();
});

//new game

btnnewEl.addEventListener("click", newGame);
