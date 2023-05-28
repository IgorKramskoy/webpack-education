import React, {useEffect, useState} from 'react';
import { weatherApi } from "../../service/WeatherService";
import {useAppSelector} from "../../hooks/redux";
import './style.scss'

const WeatherCard = () => {
    const [test, setTest] = useState('');
    const  {city} = useAppSelector(state => state.cityReducer);

    const { data: weather, error } = weatherApi.useFetchWeatherToCityQuery(city);

    useEffect(() => {
        if(weather) {
            setTest(`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`)
        }
    }, [weather]);

    return (
        <div>
            {
               weather && <div className="contaner">
                    <span className="city">{weather.name}</span>
                    <div className="icon">
                        <img src={test} alt='https://mywebicons.ru/i/png/313ff7049fa75367209ecbc26e955a5e.png'/>
                        <span>{weather.weather[0].description}</span>
                    </div>
                    <div className="temperature">
                        <span>Температура:{weather.main.temp} °C</span>
                        <span>Ощущается как:{weather.main.feels_like} °C</span>
                        <span>Минимальная:{weather.main.temp_min} °C</span>
                        <span>Максимальная:{weather.main.temp_max} °C</span>
                    </div>

                </div>
            }
            {
                error && <h4>Error loading...</h4>
            }
        </div>
    );
};

export default WeatherCard;