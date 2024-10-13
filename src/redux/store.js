import { configureStore } from '@reduxjs/toolkit';
import counterSlise from "./counter/counterSlise"

const store = configureStore({
    reducer: counterSlise,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
});

export default store;