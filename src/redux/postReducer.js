import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../App";

const token = sessionStorage.getItem('token');

//createAsyncThunk function to fetch data from database and update the state
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    try {
        let response = await axios.get(`${url}/users/post-details`,{
          headers: {
            Authorization: `Bearer ${token}`,
          }
        })
        return response;
        
    } catch (error) {
        console.log(error);
    }
}
)



export const postReducer = createSlice({
    name: "posts",
    initialState:{
       posts: [],
       loading:false
    },
    reducers: {},

     //we use extra reducer when we get data from database will receive as a promise  
    extraReducers:{
      [fetchPosts.pending] : (state, action)=>{
        state.loading=false;
      },
      [fetchPosts.fulfilled] : (state, action)=>{
        state.loading=true;
        state.posts = action.payload; 
      },
      [fetchPosts.rejected] : (state, action)=>{
        state.loading=false;
      }
    }    
});


export default postReducer.reducer;





