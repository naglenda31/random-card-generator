/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let card = document.querySelector(".card");
  let item = document.querySelectorAll("h1")[0];

  let suits = ["hearts", "diamonds", "spades", "clubs"];
  let cardValue = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let randomSuit = suits[getRndInteger(0, suits.length - 1)];
  card.classList.add(randomSuit);

  let randomCardValue = cardValue[getRndInteger(0, cardValue.length - 1)];
  item.innerHTML = randomCardValue;

  if (randomSuit === "hearts" || randomSuit === "diamonds")
    item.style.color = "red";
};

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
