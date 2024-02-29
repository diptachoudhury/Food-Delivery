import {configureStore, combineReducers}  from '@reduxjs/toolkit'
import counterReducer from './Features/Counter/counterSlice'
import restaurantDetailsReducer from './Features/Counter/restaurantDetailslice'


const rootReducer = combineReducers({
    counter: counterReducer,
    rDetails: restaurantDetailsReducer,
  });


export const store = configureStore({
    reducer: rootReducer,
  });


// export const store = configureStore({
//     reducer: {
//         counter: counterReducer,
//     },
// })