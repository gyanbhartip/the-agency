import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    exampleState: "",
};

const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        setExampleState: (state, action) => {
            state.exampleState = action.payload;
        },
    },
});

export const { setExampleState } = homeSlice.actions;

export default homeSlice.reducer;