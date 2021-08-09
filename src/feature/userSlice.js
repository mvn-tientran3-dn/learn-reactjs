import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            localStorage.setItem('authToken', state.user.email);
        },
        logout: (state) => {
            state.user = '';
            localStorage.setItem('authToken', '');
        }
    }
});

export const {login, logout} = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;

