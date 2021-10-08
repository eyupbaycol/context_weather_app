import { createContext, useContext, useState, useEffect } from "react";
import { getCityName } from "../services/WeatherService";


const LocationContext = createContext();

export const LocationProvider  = ({children}) => {
    const [location, setLocation] = useState({});
    useEffect(() => {
        window.navigator.geolocation
            .getCurrentPosition(successCallback, failureCallback)
    }, [])
    const successCallback = async(position) => {
         const { latitude, longitude } = position.coords;
        setLocation({ ...{ latitude, longitude } });
    }
    const failureCallback = () => {
        setLocation({ ...{ latitude: "28.97696", longitude: "41.00527" } })
    }
    const values = {
        location,
        setLocation
    }
    return  (
        <LocationContext.Provider value={values}>
            {children}
        </LocationContext.Provider>
    )
}

export const  useLocation = () => useContext(LocationContext);