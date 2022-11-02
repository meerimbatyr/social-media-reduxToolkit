import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./postsSlice";
import usersReducer from "./usersSlice";

export const store = configureStore({
  reducer: {
    posts: postReducer,
    users: usersReducer,
  },
});
