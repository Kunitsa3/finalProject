import { createSlice, configureStore } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'appConfigurations',
  initialState: {
    theme: 'white',
  },
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { changeTheme } = counterSlice.actions;

export default configureStore({
  reducer: {
    appConfigurations: counterSlice.reducer,
  },
});
