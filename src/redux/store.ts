import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";

// Step-1: create store and connect it to the main.tsx =>
export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
})

console.log(store.getState())

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch