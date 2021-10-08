import React from 'react'
import { useWeather } from '../context/WeatherContext'
import WeatherListItem from './WeatherListItem';

function WeatherList() {
    const {weathers} = useWeather();
    console.log(weathers);
    return (
        <ul>
            <WeatherListItem weathers={weathers} />
        </ul>
    )
}

export default WeatherList
