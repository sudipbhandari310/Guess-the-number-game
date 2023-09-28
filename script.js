"use strict";

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

let number = Math.trunc(Math.random() * 21);

document.querySelector(".check").addEventListener("click", function () {
  const guessNum = Number(document.querySelector(".guess").value);

  if (guessNum === 0) {
    displayMessage("Enter the number");
  } else if (guessNum != number) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guessNum > number ? "Too high" : "Too low ";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game");
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
    //when player wins
  } else if (guessNum === number) {
    displayMessage("Correct NUmber");
    document.querySelector(".number").textContent = number;
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  number = Math.trunc(Math.random() * 21);

  displayMessage("Keep Guessing...");
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
