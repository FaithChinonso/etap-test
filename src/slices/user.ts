import {createSlice} from '@reduxjs/toolkit';

const initialState: string = '';
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
    clearUser: () => {
      return '';
    },
  },
});

const {reducer, actions} = userSlice;
export const {setUser, clearUser} = actions;
export default reducer;
