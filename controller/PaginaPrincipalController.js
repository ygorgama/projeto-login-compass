class PaginaPrincipalController {
  static logout() {
    let localStorageItem = JSON.parse(localStorage.getItem("userLoged"));
    let username;
    if (localStorageItem !== null) {
      username = localStorageItem.username;
    }

    let logout = confirm(`Você quer mesmo sair  ${username}?`);

    if (logout === true) {
      localStorage.clear();
      location.href = "index.html";
    } else {
      location.reload();
    }
  }
}
