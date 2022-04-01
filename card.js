export default function Card(cardElement) {
  const showButton = document.querySelector(".js-show__button1");
  const hideButton = document.querySelector(".js-hide__button1");
  const answer = document.querySelector(".js-answer__box1");

  showButton.addEventListener("click", () => {
    answer.classList.add("answer--active");
    showButton.classList.add("button__show--active");
    hideButton.classList.add("button__hide--active");
  });

  hideButton.addEventListener("click", () => {
    answer.classList.remove("answer--active");
    showButton.classList.remove("button__show--active");
    hideButton.classList.remove("button__hide--active");
  });
}
