import { configureStore } from '@reduxjs/toolkit';
import { blogsApi } from './features/blogSlice';

export const store = configureStore({
  reducer: {
    [blogsApi.reducerPath]: blogsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(blogsApi.middleware),
});

// Optional: Create and export RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
