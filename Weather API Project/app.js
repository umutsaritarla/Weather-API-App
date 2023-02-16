// Elementleri Seçme


const inputArea = document.getElementById("weather-app-input");
const searchButton = document.getElementById("weather-app-button");

const w = new Weather();
const ui = new UI();

eventListeners();

function eventListeners() {
    searchButton.addEventListener("click" , showDatas);




}

function showDatas(e) {
    const cityName = inputArea.value.trim();

    if (cityName === "") {
        alert("Bir şehir giriniz.");
    }

    else {
        w.getWeatherData(cityName)
        .then(response => {
            
            
            
            ui.showWeatherInfos(response);
            
                
            
        })
        .catch(err => alert("Doğru bir şehir giriniz."));
    }
    
    


    ui.clearInput();
    e.preventDefault();
}