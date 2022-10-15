class DateController {
  constructor() {
    let date = new Date();

    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    this._day = date.toLocaleDateString("pt-br", options);
  }

  getDay() {
    return this._day;
  }
}
