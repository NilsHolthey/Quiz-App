export default function Questions() {
  const apiUrl =
    "https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => createQuestionList(data.results));
}
