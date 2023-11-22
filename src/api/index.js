import axios from "axios";

export function getWeatherData(city){
        return axios.post('/.netlify/functions/weather', { city: city });
}
