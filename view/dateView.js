class DateView {
  constructor() {
    let $ = document.querySelector.bind(document);
    this._dateController = new DateController();
    this._hour = $("#hour");
    this._day = $("#day");
    this._seconds = $("#seconds");
  }

  hourView() {
    setInterval(() => {
      let date = new Date();

      const optionsHour = {
        hour: "numeric",
        minute: "numeric",
      };
      let hour = date.toLocaleTimeString("pt-br", optionsHour);

      this._hour.innerHTML = hour;
    }, 100);
  }

  dayView() {
    this._day.innerHTML = this._dateController.getDay();
  }

  cronometro() {
    let cronometro = 600;
    setInterval(() => {
      cronometro--;
      this._seconds.innerHTML = cronometro;
      if (cronometro === 0) {
        PaginaPrincipalController.logout();
      }
    }, 1000);
  }
}
