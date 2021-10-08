import React from 'react'

function WeatherListItem({weathers}) {

    return (
        <>
        {
            weathers.map((item,index) => (
                <li>
                    <div className="container">
                        <span className="day">{new Date(item.dt*1000).toLocaleDateString("tr-TR", { weekday: 'long' })}</span>
                        <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt={item.weather[0].description} />
                        <div className="degrees">
                            <div className="city-temp">
                                {Math.round(item.temp.max)}
                                <sup>&deg;C</sup>
                            </div>
                            <div className="city-temp">
                                {Math.round(item.temp.min)}
                                <sup>&deg;C</sup>
                            </div>
                        </div>
                    </div>
                </li>
            ))
        }   
        </>
    )
}

export default WeatherListItem
