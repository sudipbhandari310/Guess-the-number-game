"use strict";

let score = 10;
let highScore = 0;

let number = Math.trunc(Math.random() * 21);

document.querySelector(".check").addEventListener("click", function () {
  const guessNum = Number(document.querySelector(".guess").value);

  if (guessNum === 0) {
    document.querySelector(".message").textContent = "Enter the number";
  } else if (guessNum < number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  } else if (guessNum > number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }

    //when player wins
  } else if (guessNum === number) {
    document.querySelector(".message").textContent = "Correct answer";
    document.querySelector(".number").textContent = number;
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 10;
  number = Math.trunc(Math.random() * 21);
  // document.querySelector(".guess").textContent = "0";
  document.querySelector(".message").textContent = "Keep Guessing...";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".score").textContent = 10;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  // document.querySelector(".guess").style.display = "block";
});
