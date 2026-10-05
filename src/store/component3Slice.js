import { createSlice } from '@reduxjs/toolkit';

const component3Slice = createSlice({
  name: 'component3',
  initialState: {
    note: 'Component 3 的 Redux 測試內容',
  },
  reducers: {
    updateComponent3Note(state, action) {
      state.note = action.payload;
    },
  },
});

export const { updateComponent3Note } = component3Slice.actions;
export default component3Slice.reducer;
