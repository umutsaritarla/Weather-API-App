class Weather {

    constructor() {
        this.url = "http://api.weatherapi.com/v1/current.json?key=7ed333988dc54528a19111812231402&q=";
    }

    async getWeatherData(cityName) {
        const response = await fetch(this.url + cityName);
        const data = await response.json();


        return data;

        

        
    }
}

