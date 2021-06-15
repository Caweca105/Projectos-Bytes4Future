import { configureStore } from "@reduxjs/toolkit";
import mancalaReducer from "./Mancala/mancalaSlice";

export default configureStore({
    reducer: { 
        mancala: mancalaReducer
    }
})