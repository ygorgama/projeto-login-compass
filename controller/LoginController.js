class LoginController {
  constructor() {
    let $ = document.querySelector.bind(document);
    this._inputUsernameValue = $("#username").value;
    this._inputPasswordValue = $("#password").value;

    this._usernameInputed;
    this._passwordInputed;
  }

  login(event) {
    event.preventDefault();
    if (this._inputUsernameValue === "" || this._inputPasswordValue === "") {
      location.href = "login-erro.html";
      return;
    }
  }

  isPutedUsernaValue(event) {
    this._usernameInputed = event.target.value;
    this.redirectPage();
  }

  isPutedPasswordValue(event) {
    this._passwordInputed = event.target.value;
    this.redirectPage();
  }

  redirectPage() {
    if (this._passwordInputed && this._usernameInputed) {
      const password = this._passwordInputed;
      const username = this._usernameInputed;

      const objeto = {
        password,
        username,
      };

      console.log(objeto);

      localStorage.setItem("userInput", JSON.stringify(objeto));

      setTimeout(() => {
        location.href = "login-preenchido.html";
      }, 300);
    }
  }
}
