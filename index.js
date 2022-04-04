import Quizcard from "../card.js";

const cardElements = document.querySelectorAll(".js-box");

cardElements.forEach((cardElement) => {
  Quizcard(cardElement);
});
