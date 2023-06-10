import { createSlice } from "@reduxjs/toolkit";



export const profileReducer = createSlice({
    name: "profile",
    initialState:{
       profile: [],
       singlePost:[]
    },
    reducers: {
        getProfile(state, action) {
            state.profile = action.payload  
        },
        singlePost(state,action){ 
            state.profilePost = action.payload
            console.log(action.payload);
        }
    },
});



export const { getProfile, singlePost } = profileReducer.actions;
export default profileReducer.reducer;