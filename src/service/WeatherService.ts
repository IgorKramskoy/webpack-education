import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";
import {TWeather} from "../store/types";

export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.openweathermap.org/data/2.5/weather?&lang=ru&APPID=1d4946eb36577f859110b218d781ac56&units=metric',

    }),
    endpoints: (build) => ({
        fetchWeatherToCity: build.query<TWeather, string>({
            query: (params) => ({
                url: `&q=${params}`,
            }),
        })
})

})