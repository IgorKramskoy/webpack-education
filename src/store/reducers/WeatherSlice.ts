import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TWeather} from "../types";

interface WeatherState {
    weather: TWeather  ;
    isLoading: boolean;
    error: string;
    text: string;
}

const initialState: WeatherState = {
    weather: {} as TWeather,
    isLoading: false,
    error: '',
    text: '',
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        add(state, action: PayloadAction<string>) {
            state.text = action.payload
        }
    },
    extraReducers: {}
})

export default weatherSlice.reducer;