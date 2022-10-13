class LoginPreenchidoController {
  constructor() {
    const localStorageItem = JSON.parse(localStorage.getItem("userInput"));
    let $ = document.querySelector.bind(document);
    $("#username").value = localStorageItem.username;
    $("#password").value = localStorageItem.password;
  }

  login(event) {
    event.preventDefault();
  }
}
