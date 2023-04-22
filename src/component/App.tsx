import React, {useState} from 'react';
import {useAppDispatch} from "../hooks/redux";

import {citySlice} from "../store/reducers/CitySlice";

import WeatherCard from "./WeatherCard";

import './style.scss'
const App = () => {
    const [isShow, setShow] = useState(false);
    const [cityNew, setCityNew] = useState('');

    const dispatch = useAppDispatch()
    const { setCity } = citySlice.actions

    return (
        <div className="header">
            React
            <input
                onChange={(e) => {
                    setCityNew(e.target.value)
                }}
                value={cityNew}
            />
            <button onClick={() => {
                setShow(true);
                dispatch(setCity(cityNew))
            } }>
                Show Text
            </button>
            <button onClick={() => {
                setShow(false)
                dispatch(setCity(''))
            } }>
                Delete Text
            </button>
            {

                isShow && <WeatherCard/>
            }

        </div>
    );
};

export default App;