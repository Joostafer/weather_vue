
const axios = require('axios');


exports.handler = async function(event, context) {

    const API_KEY = process.env.WEATHER_API_KEY;
    const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

    const requestBody = JSON.parse(event.body);
    const city = requestBody.city;
    const url = `${BASE_URL}?q=${city}&appid=${API_KEY}`;

    try {
        const response = await axios.get(url);
        return {
            statusCode: 200,
            body: JSON.stringify(response.data),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ msg: '500 '+url, error:error }),
        };
    }
};
