import { createContext, useState, useEffect, useContext } from "react";
import { getWeatherByLocation } from "../services/WeatherService";
import { useLocation } from "./LocationContext";



const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [weathers, setWeather] = useState([]);
    const {location} = useLocation();
    
    useEffect(async () => {
        if(location.latitude){
            let weathers = await getWeatherByLocation(location.latitude, location.longitude);
            setWeather([...weathers])
        }
    }, [location])
    const values = {
        weathers,
        setWeather
    }
    return (
        <WeatherContext.Provider value={values}>
            {children}
        </WeatherContext.Provider>
    )
}

export const useWeather = () => useContext(WeatherContext);