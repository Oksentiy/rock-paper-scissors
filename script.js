"use srtict";

const btnRock = document.getElementById("rock");
const btnScissors = document.getElementById("scissors");
const btnPaper = document.getElementById("paper");
const choiceRock = document.createElement("img");
const btnStart = document.getElementById("button-bot");
const paper = "images/paper.png";
const rock = "images/rock.png";
const scissors = "images/scissors.png";

btnRock.addEventListener("click", () => {
  document.getElementById("my-container").innerHTML =
    "<img src='images/rock.png' class=\"my-container\"  /> ";
});

btnScissors.addEventListener("click", () => {
  document.getElementById("my-container").innerHTML =
    "<img src='images/scissors.png' class=\"my-container\" /> ";
});

btnPaper.addEventListener("click", () => {
  document.getElementById("my-container").innerHTML =
    "<img src='images/paper.png' class=\"my-container\"  /> ";
});
//Виведення рандомної картинки бота
function random_item(items) {
  return items[Math.floor(Math.random() * items.length)];
}
// image = new Array();
const images = [scissors, rock, paper];

btnStart.addEventListener("click", () => {
  document.getElementById("bot-container").innerHTML =
    "<img src=" + random_item(images) + ' class="my-container" >';

  let humanChoice = document
    .querySelectorAll(".my-container img")[0]
    .src.replace(document.URL, "");
  let botChoice = document
    .querySelectorAll(".bot-container img")[0]
    .src.replace(document.URL, "");

  if (humanChoice === paper) {
    if (botChoice === rock) {
      document.getElementById("middle-container").innerHTML =
        "<p>Ви виграли!</p>";
    } else if (botChoice === paper) {
      document.getElementById("middle-container").innerHTML = "<p>Нічия!</p>";
    } else {
      document.getElementById("middle-container").innerHTML =
        "<p>Ви програли!</p>";
    }
  }

  if (humanChoice === scissors) {
    if (botChoice === rock) {
      document.getElementById("middle-container").innerHTML =
        "<p>Ви програли!</p>";
    } else if (botChoice === paper) {
      document.getElementById("middle-container").innerHTML =
        "<p>Ви виграли!</p>";
    } else {
      document.getElementById("middle-container").innerHTML = "<p>Нічия!</p>";
    }
  }

  if (humanChoice === rock) {
    if (botChoice === paper) {
      document.getElementById("middle-container").innerHTML =
        "<p>Ви програли!</p>";
    } else if (botChoice === scissors) {
      document.getElementById("middle-container").innerHTML =
        "<p>Ви виграли!</p>";
    } else {
      document.getElementById("middle-container").innerHTML = "<p>Нічия!</p>";
    }
  }
});

// document.write("<img src=" + image[a] + ">");
