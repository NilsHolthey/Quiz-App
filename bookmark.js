export default function Bookmarfunction(bookmarkButton) {
  let bookmark = bookmarkButton.querySelector(".js-bookmark__box1");

  bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("bookmark__checked");
  });
}
