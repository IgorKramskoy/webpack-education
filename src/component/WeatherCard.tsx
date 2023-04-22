import React from 'react';
import { weatherApi } from "../service/WeatherService";
import {useAppSelector} from "../hooks/redux";

const WeatherCard = () => {

    const  {city} = useAppSelector(state => state.cityReducer)

    const { data: weather } = weatherApi.useFetchWeatherToCityQuery(city);
    console.log(weather)
    return (
        <div>

        </div>
    );
};

export default WeatherCard;