import { createSlice } from '@reduxjs/toolkit';

const userDetailsSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false
    },
    reducers: {
        setLogin: (state, action) => {
            state.isLoggedIn = action.payload;
        }
    }
});

export default userDetailsSlice.reducer;
export const { setLogin } = userDetailsSlice.actions;