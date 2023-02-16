class UI {
    constructor() {
        this.infoUl = document.getElementById("weather-info-container");
        this.inputArea  = document.getElementById("weather-app-input");
    }

    clearInput() {
        this.inputArea.value="";
    }

    showWeatherInfos(city) {
        this.infoUl.innerHTML = `
        <ul class="info-ul">
            <li>Şehir: ${city.location.name}</li>
            <li>Bulunduğu Ülke: ${city.location.country}</li>
            <li>Zaman: ${city.location.localtime}</li>
            <li>Sıcaklık: ${city.current.temp_c} Derece</li>
            <li>Hissedilen Sıcaklık: ${city.current.feelslike_c} Derece</li>
        </ul>`

        this.infoUl.style.marginTop = "100px"
    }
} 