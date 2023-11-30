import { AnyAction, ThunkDispatch, configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import { useDispatch } from 'react-redux';

 const store = configureStore({
  reducer: {
    cart: cartReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export default store;