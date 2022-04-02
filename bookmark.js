export default function bookmarFunction(bookmarkButton) {
  let bookmark = document.querySelector(".js-bookmark__box1");

  bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("bookmark__checked");
  });
}
