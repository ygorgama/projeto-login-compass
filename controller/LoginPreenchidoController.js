class LoginPreenchidoController {
  constructor() {
    let $ = document.querySelector.bind(document);
    const localStorageItem = JSON.parse(localStorage.getItem("userInput"));

    if (localStorageItem !== null) {
      $("#username").value = localStorageItem.username;
      $("#password").value = localStorageItem.password;
    }
  }

  login(event) {
    event.preventDefault();
    let $ = document.querySelector.bind(document);

    const username = $("#username").value;
    const password = $("#password").value;

    console.log(username);
    console.log(password);

    if (username === "" || password === "") {
      location.href = "login-erro.html";
      localStorage.clear();
      return;
    } else if (username === undefined || username === null) {
      location.href = "login-erro.html";
      localStorage.clear();
      return;
    } else if (password === undefined || password === null) {
      location.href = "login-erro.html";
      localStorage.clear();
      return;
    } else if (password !== "admin" || username !== "admin") {
      location.href = "login-erro.html";
      localStorage.clear();
      return;
    }

    const user = new User(username, password);
    user.saveUser();

    localStorage.removeItem("userInput");
    location.href = "pagina-principal.html";
  }
}
