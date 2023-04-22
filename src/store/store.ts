import {combineReducers, configureStore} from '@reduxjs/toolkit'
import cityReducer from "./reducers/CitySlice";
import {weatherApi} from "../service/WeatherService";

const rootReducer = combineReducers({
    cityReducer,
    [weatherApi.reducerPath] : weatherApi.reducer
})
export const  setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(weatherApi.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']