import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "./boardSlice";
import employeeSlice from "./employeeSlice";

const store = configureStore({
    reducer: {
        projects: projectSlice.reducer,
        employees: employeeSlice.reducer
    }
})


export default store