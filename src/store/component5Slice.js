import { createSlice } from '@reduxjs/toolkit';

const component5Slice = createSlice({
  name: 'component5',
  initialState: {
    note: 'Component 5 的 Redux 測試內容',
  },
  reducers: {
    updateComponent5Note(state, action) {
      state.note = action.payload;
    },
  },
});

export const { updateComponent5Note } = component5Slice.actions;
export default component5Slice.reducer;
