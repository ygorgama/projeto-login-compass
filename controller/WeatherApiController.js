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
        let secondRequest = new XMLHttpRequest();

        secondRequest.open(
          "GET",
          `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&zoom=10`,
          false
        );

        request.open(
          "GET",
          `http://api.weatherapi.com/v1/current.json?key=${myKey}q=${pos.coords.latitude},${pos.coords.longitude}&aqi=no`,
          false
        );
        request.send();

        secondRequest.send();

        const locationApi = JSON.parse(secondRequest.responseText);

        const wetherApi = JSON.parse(request.responseText);
        console.log(locationApi);

        this._graus.innerHTML = wetherApi.current.temp_c + "º";
        this._icon.setAttribute("src", wetherApi.current.condition.icon);
        this._cidade.innerHTML =
          locationApi.address.city +
          " - " +
          this._templateState(wetherApi.location.region);
      },
      (err) => console.log(err),
      { enableHighAccuracy: true }
    );
  }

  _templateState(state) {
    let stateInitials;
    switch (state) {
      case "Bahia":
        stateInitials = "BA";
        break;
      case "Acre":
        stateInitials = "AC";
        break;
      case "Alagoas":
        stateInitials = "AL";
        break;
      case "Amapá":
        stateInitials = "AP";
        break;
      case "Amazonas":
        stateInitials = "AM";
        break;
      case "Ceará":
        stateInitials = "CE";
        break;
      case "Distrito Federal":
        stateInitials = "DF";
        break;
      case "Espírito Santo":
        stateInitials = "ES";
        break;
      case "Goiás":
        stateInitials = "GO";
        break;
      case "Maranhão":
        stateInitials = "MA";
        break;
      case "Mato Grosso":
        stateInitials = "MT";
        break;
      case "Mato Grosso do Sul":
        stateInitials = "MS";
        break;
      case "Minas Gerais":
        stateInitials = "MG";
        break;
      case "Pará":
        stateInitials = "PA";
        break;
      case "Paraíba":
        stateInitials = "PB";
        break;
      case "Paraná":
        stateInitials = "PR";
        break;
      case "Pernambuco":
        stateInitials = "PE";
        break;
      case "Piauí":
        stateInitials = "PI";
        break;
      case "Rio de Janeiro":
        stateInitials = "RJ";
        break;
      case "Rio Grande do Norte":
        stateInitials = "RN";
        break;
      case "Rio Grande do Sul":
        stateInitials = "RS";
        break;
      case "Rondônia":
        stateInitials = "RO";
        break;
      case "Roraima":
        stateInitials = "RR";
        break;
      case "Santa Catarina":
        stateInitials = "SC";
        break;
      case "São Paulo":
        stateInitials = "SP";
        break;
      case "Sergipe":
        stateInitials = "SE";
        break;
      case "Tocantins":
        stateInitials = "TO";
        break;
      default:
        throw new Error("Some error ocurred");
        break;
    }

    return stateInitials;
  }
}
