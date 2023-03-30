import { configureStore } from "@reduxjs/toolkit";
import { alertSlice } from "./features/alertSlice";
import { dataSlice } from "./features/dataSlice";
import { userSlice } from "./features/userSlice";
export default configureStore({
    reducer:{
        alerts:alertSlice.reducer,
        user:userSlice.reducer,
        data:dataSlice.reducer,
    }
})