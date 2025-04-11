import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
};



const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
      setLoading: (state, action) => {
        state.loading = action.payload;
      },
      setError: (state, action) => {
        state.error = action.payload;
      },
      clearError: (state) => {
        state.error = null;
      },
    },
  });

export const { setLoading, setError, clearError } = errorSlice.actions;
export default errorSlice.reducer;
