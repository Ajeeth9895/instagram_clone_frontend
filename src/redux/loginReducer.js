import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loginStatus:false
}

const loginReducer = createSlice({
    name: 'status',
    initialState,

    reducers: {
        changeStatus(state, action) {
                state.loginStatus = action.payload.status   
        }

    }

})

export const { changeStatus } = loginReducer.actions;
export default loginReducer.reducer;