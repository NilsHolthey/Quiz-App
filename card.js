export default function Quizcard(cardElement) {
  const quizCardBtn = cardElement.querySelector('.js-show__button1');

  const cardAnswer = cardElement.querySelector('.js-answer__box1');

  const bookmark = cardElement.querySelector('.js-bookmark__box1');

  let showAnswer = false;

  quizCardBtn.addEventListener('click', () => {
    showAnswer = !showAnswer;

    if (showAnswer) {
      quizCardBtn.textContent = 'HIDE ANSWER';
      cardAnswer.classList.add('answer--active');
      quizCardBtn.classList.add('button__show_color');
    } else {
      quizCardBtn.textContent = 'SHOW ANSWER';
      quizCardBtn.classList.remove('button__show_color');
      cardAnswer.classList.remove('answer--active');
    }
  });

  bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('bookmark__checked');
  });
}
