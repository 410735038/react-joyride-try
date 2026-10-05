import { createSlice } from '@reduxjs/toolkit';

const component2Slice = createSlice({
  name: 'component2',
  initialState: {
    note: 'Component 2 的 Redux 測試內容',
  },
  reducers: {
    updateComponent2Note(state, action) {
      state.note = action.payload;
    },
  },
});

export const { updateComponent2Note } = component2Slice.actions;
export default component2Slice.reducer;
