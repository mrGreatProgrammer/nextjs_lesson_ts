import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import counterSlice from "./counterSlice";
import { postsApi } from "./service/posts";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// export const store = configureStore({
//   reducer: {
//     counter: counterSlice,
//     [postsApi.reducerPath]: postsApi.reducer,
//   },
//   middleware: (gDM) => gDM().concat(postsApi.middleware),
// });

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;
// export const wrapper = createWrapper<RootState>(store, {
//   debug: true,
// });


export const makeStore = () =>
  configureStore({
    reducer: {
      [postsApi.reducerPath]: postsApi.reducer,
    },
    middleware: (gDM) => gDM().concat(postsApi.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });







// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;