class PaginaPrincipalController {
  static logout() {
    let localStorageItem = JSON.parse(localStorage.getItem("userLoged"));
    let username;
    if (localStorageItem !== null) {
      username = localStorageItem.username;
    }

    let logout = confirm(`${username} Você quer mesmo sair?`);

    if (logout === true) {
      localStorage.removeItem("userLoged");
      location.href = "index.html";
    } else {
      location.reload();
    }
  }
}
