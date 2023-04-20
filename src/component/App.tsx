import React, {useState} from 'react';
import './style.scss'
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {weatherSlice} from "../store/reducers/WeatherSlice";
const App = () => {
    const [isShow, setShow] = useState(false);

    const  {text} = useAppSelector(state => state.weatherReducer)
    const dispatch = useAppDispatch()
    const { add } = weatherSlice.actions

    return (
        <div className="header">
            React
            <input
                onChange={(e) => {
                   dispatch(add(e.target.value))
            }}
                value={text}
            />
            <button onClick={() => setShow(true) }>
                Show Text
            </button>
            <button onClick={() => dispatch(add('')) }>
                Delete Text
            </button>
            {
                isShow &&
                    <div>
                        {text}
                    </div>
            }
        </div>
    );
};

export default App;