import React, {useState} from 'react';
import {useAppDispatch} from "../../hooks/redux";
import {citySlice} from "../../store/reducers/CitySlice";

import './style.scss'
const InputSearch = () => {
    const [cityNew, setCityNew] = useState('');

    const dispatch = useAppDispatch()
    const { setCity } = citySlice.actions
    return (
        <div className="container">
            <input
                onChange={(e) => {
                    setCityNew(e.target.value)
                }}
                value={cityNew}
                placeholder="Введите город..."
            />
            <button onClick={() => {
                dispatch(setCity(cityNew))
            } }>
                Search
            </button>
        </div>
    );
};

export default InputSearch;