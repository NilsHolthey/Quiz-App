import Quizcard from "../card.js";
import LoginButton from "./profile.js";

const cardElements = document.querySelectorAll(".js-box");

cardElements.forEach((cardElement) => {
  Quizcard(cardElement);
});

const loginBtn = document.querySelector(".js-logout");

const username = document.querySelector(".js-username");

const password = document.querySelector(".js-password");

let login = false;

loginBtn.addEventListener("click", () => {
  login = !login;

  if (login) {
    loginBtn.textContent = "Logout";
    username.classList.add("profilde--hide");
    password.classList.add("profilde--hide");
  } else {
    loginBtn.textContent = "Login";
    username.classList.remove("profilde--hide");
    password.classList.remove("profilde--hide");
  }
});
