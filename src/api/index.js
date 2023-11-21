import axios from "axios";

export function getWeatherData(city){
        return axios.get('/.netlify/functions/weather');
}
