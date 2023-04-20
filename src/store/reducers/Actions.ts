// import {AppDispatch} from "../store";
// import axios from "axios";
// import {TWeather} from "./../types";
// import {weatherSlice} from "./WeatherSlice";
// import {createAsyncThunk} from "@reduxjs/toolkit";
//
//
//
// export const fetchUsers = createAsyncThunk(
//     'user/fetchAll',
//     async (_, thunkAPI) => {
//         try {
//             const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/user2s')
//             return response.data;
//         } catch (e) {
//             return thunkAPI.rejectWithValue("Не удалось загрузить пользователей")
//         }
//     }
// )