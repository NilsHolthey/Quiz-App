export default function LoginButton(profileElement) {
  const loginBtn = profileElement.querySelector(".js-logout");

  const username = profileElement.querySelector(".js-username");

  const password = profileElement.querySelector(".js-password");

  let login = false;

  loginBtn.addEventListener("click", () => {
    login = !login;

    if (showAnswer) {
      loginBtn.textContent = "Logout";
      username.classList.add("profilde--hide");
      password.classList.add("profilde--hide");
    } else {
      loginBtn.textContent = "Login";
      username.classList.remove("profilde--hide");
      password.classList.remove("profilde--hide");
    }
  });
}
