"use srtict";
const btnRock = document.getElementById("rock");
const btnScissors = document.getElementById("scissors");
const btnPaper = document.getElementById("paper");
const choiceRock = document.createElement("img");

btnRock.addEventListener("click", () => {
  document.getElementById("my-container").innerHTML =
    "<img src='images/rock.png' class=\"my-container\"  /> ";
});

btnScissors.addEventListener("click", () => {
  document.getElementById("my-container").innerHTML =
    "<img src='images/scissors.png' class=\"my-container\"  /> ";
});

btnPaper.addEventListener("click", () => {
  document.getElementById("my-container").innerHTML =
    "<img src='images/paper.png' class=\"my-container\"  /> ";
});
