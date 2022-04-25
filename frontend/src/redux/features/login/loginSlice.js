import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userName: "",
    password: "",
    isLoggedIn: false,
    isLoading: false,
    error: null,
};

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setUserName: (state, action) => {
            state.userName = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setIsLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { setUserName, setPassword, setIsLoggedIn, setIsLoading, setError } = loginSlice.actions;

export default loginSlice.reducer;