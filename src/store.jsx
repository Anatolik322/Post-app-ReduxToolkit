import { configureStore } from "@reduxjs/toolkit";

const initialState = {
    name: 'redux'
}
const store = configureStore({
    preloadedState: initialState,
    reducer:(state) => {
        return state;
    },
});

export default store;