class User {
  constructor(username, password) {
    this._username = username;
    this._password = password;
  }

  getUsername() {
    return this._username;
  }

  getPassword() {
    return this._password;
  }

  saveUser() {
    const username = this._username;
    const password = this._password;
    const useObject = {
      username,
      password,
      isLoged: true,
    };

    localStorage.setItem("userLoged", JSON.stringify(useObject));
  }
}
