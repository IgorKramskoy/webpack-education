import React, {useState} from 'react';
import {useAppDispatch} from "../../hooks/redux";
import {citySlice} from "../../store/reducers/CitySlice";
import {validationLength} from "../../validation/validation";

import './style.scss'
const InputSearch = () => {
    const dispatch = useAppDispatch();
    const { setCity } = citySlice.actions;

    const [cityNew, setCityNew] = useState('');

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
                if(validationLength(cityNew)) {
                    dispatch(setCity(cityNew))
                }
              }}
            >
                Search
            </button>
        </div>
    );
};

export default InputSearch;