import {createSlice} from '@reduxjs/toolkit'

const initialState = {};

export const  restaurantDetails = createSlice({
    name:'rDetails',
    initialState,
    reducers: {
        setRdata: (state,action)=>{
            return {...action.payload}
        }
    }
})

export const {setRdata} = restaurantDetails.actions

export default restaurantDetails.reducer