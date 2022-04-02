// export default function Card (cardElement) {
//   const showButton = document.querySelector(".js-show__button1");
//   const hideButton = document.querySelector(".js-hide__button1");
//   const answer = document.querySelector(".js-answer__box1");

//   showButton.addEventListener("click", () => {
//     answer.classList.add("answer--active");
//     showButton.classList.add("button__show--active");
//     hideButton.classList.add("button__hide--active");
//   });

//   hideButton.addEventListener("click", () => {
//     answer.classList.remove("answer--active");
//     showButton.classList.remove("button__show--active");
//     hideButton.classList.remove("button__hide--active");
//   });
// }

export default function Quizcard(cardElement) {
  const quizCardBtn = cardElement.querySelector(".js-show__button1");

  const cardAnswer = cardElement.querySelector(".js-answer__box1");

  const bookmark = cardElement.querySelector(".js-bookmark__box1");

  let showAnswer = false;

  quizCardBtn.addEventListener("click", () => {
    showAnswer = !showAnswer;

    if (showAnswer) {
      quizCardBtn.textContent = "HIDE ANSWER";
      cardAnswer.classList.add("answer--active");
    } else {
      quizCardBtn.textContent = "SHOW ANSWER";
      cardAnswer.classList.remove("answer--active");
    }
  });

  //EventListener BOOKMARK-CLICK
  bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("bookmark__checked");
  });
}
