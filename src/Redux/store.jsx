import { configureStore } from "@reduxjs/toolkit";
import loadersReducer from "./loadersSlice";
import usersReducer from "./usersSlice";
import ownersReducer from "./ownerSlice";

export default configureStore({
    reducer : {
        loaders:loadersReducer,
        users:usersReducer,
        owners:ownersReducer
    }
})