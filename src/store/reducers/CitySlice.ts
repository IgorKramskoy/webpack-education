import {createSlice, PayloadAction} from "@reduxjs/toolkit";
interface CityState {
    city: string;
}

const initialState: CityState = {
    city: '',
}

export const citySlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setCity(state, action: PayloadAction<string>) {
            state.city = action.payload
        }
    },
})

export default citySlice.reducer;