import Bookmarfunction from "./bookmark.js";
import Card from "./card.js";

const cardElements = document.querySelectorAll(".js-box");

console.log(cardElements);
cardElements.forEach((cardElement) => {
  Card(cardElement);
});

const Bookmarks = document.querySelectorAll(".js-bookmark__box1");

Bookmarks.forEach((bookmarkButton) => {
  Bookmarfunction(bookmarkButton);
});
