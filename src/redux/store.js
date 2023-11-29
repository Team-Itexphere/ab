import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "./boardSlice";

const store = configureStore({
    reducer: {
        projects: projectSlice.reducer
    }
})


export default store