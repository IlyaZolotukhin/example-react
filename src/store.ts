import { configureStore } from '@reduxjs/toolkit';
import {productsSlice} from "./api/productApi";
import {authSlice} from "./api/authApi";

const store = configureStore({
    reducer: {
        [productsSlice.reducerPath]: productsSlice.reducer,
        [authSlice.reducerPath]: authSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsSlice.middleware, authSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;