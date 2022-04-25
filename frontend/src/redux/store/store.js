import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/login/loginSlice";
import homeReducer from "../features/home/homeSlice";

export const store = configureStore({
    reducer: {
        login: loginReducer,
        home: homeReducer,
    }
});