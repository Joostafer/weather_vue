
const axios = require('axios');


exports.handler = async function(event, context) {

    const API_KEY = process.env.WEATHER_API_KEY;
    const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

    try {
        const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}`);
        return {
            statusCode: 200,
            body: JSON.stringify(response.data),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' }),
        };
    }
};
