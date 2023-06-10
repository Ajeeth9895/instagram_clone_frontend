import { configureStore} from "@reduxjs/toolkit";
import postReducer from './postReducer'
import profileReducer from "./profileReducer";



const store = configureStore({
    reducer: {
        posts: postReducer,
        profile:profileReducer
    },
})

export default store;