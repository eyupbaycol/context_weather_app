import axios from "axios"


const API_KEY = '1fb2a89465c42d2751d19cd31e2c7e50'

const SERVICE_URL = 'https://api.openweathermap.org/data/2.5/onecall?'


export const getWeatherByLocation = async (lat,lon) => {
    const { data } = await axios.get(SERVICE_URL + `lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=metric&appid=${API_KEY}`)
    return data.daily;
}
