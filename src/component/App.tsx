import React from 'react';
import InputSearch from "./input/InputSearch";
import WeatherCard from "./wetherCard/WeatherCard";
import {useAppSelector} from "../hooks/redux";
import './style.scss'


const App = () => {
    const  {city} = useAppSelector(state => state.cityReducer)

    return (
        <div className="header">
            <h1>Weather</h1>
            <InputSearch/>
            {
                city && <WeatherCard/>
            }
        </div>
    );
};

export default App;