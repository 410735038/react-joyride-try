import { createSlice } from '@reduxjs/toolkit';

const component1Slice = createSlice({
  name: 'component1',
  initialState: {
    note: 'Component 1 的 Redux 測試內容',
  },
  reducers: {
    updateComponent1Note(state, action) {
      state.note = action.payload;
    },
  },
});

export const { updateComponent1Note } = component1Slice.actions;
export default component1Slice.reducer;
