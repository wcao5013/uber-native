import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setOrigin: (state, action ) => {
            state.origin = action.payload
        },
        setDestination : ( state, action ) => {
            state.destination = action.payload
        },
        setTraveTimeInformation: (state, action ) => {
            state.traveTimeInformation = action.payload
        }
    }
    
})

export const { setOrigin, setDestination, setTraveTimeInformation } = navSlice.actions

//Selectors
export const selectOrigin = ( state ) => state.nav.origin
export const selectDestination = ( state ) => state.nav.destination
export const selectTimeTravelInformation = ( state ) => state.nav.traveTimeInformation

export default navSlice.reducer