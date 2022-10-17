class WeatherApiController {
  constructor() {
    let $ = document.querySelector.bind(document);
    this._icon = $("#icon");
    this._graus = $("#graus");
    this._cidade = $("#cidade");
  }

  apiCall() {
    const myKey = "d7f766b1eeb849a7a59163414221410&";
    if (!navigator.geolocation) return null;
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        let request = new XMLHttpRequest();

        request.open(
          "GET",
          `http://api.weatherapi.com/v1/current.json?key=${myKey}q=${pos.coords.latitude},${pos.coords.longitude}&aqi=no`,
          false
        );
        request.send();

        const apiObj = JSON.parse(request.responseText);
        console.log(apiObj.location.name);

        this._graus.innerHTML = apiObj.current.temp_c + "º";
        this._icon.setAttribute("src", apiObj.current.condition.icon);
        this._cidade.innerHTML =
          apiObj.location.name + " - " + apiObj.location.region;
      },
      (err) => console.log(err),
      { enableHighAccuracy: true }
    );
  }
}
