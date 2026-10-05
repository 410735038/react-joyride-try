import { createSlice } from '@reduxjs/toolkit';

const component4Slice = createSlice({
  name: 'component4',
  initialState: {
    note: 'Component 4 的 Redux 測試內容',
  },
  reducers: {
    updateComponent4Note(state, action) {
      state.note = action.payload;
    },
  },
});

export const { updateComponent4Note } = component4Slice.actions;
export default component4Slice.reducer;
