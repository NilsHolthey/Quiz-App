import Quizcard from '../card.js';
// import LoginButton from "./profile.js";

const cardElements = document.querySelectorAll('.js-box');

cardElements.forEach(cardElement => {
  Quizcard(cardElement);
});
