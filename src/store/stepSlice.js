import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentStep: 1,
};

const stepSlice = createSlice({
  name: 'step',
  initialState,
  reducers: {
    setCurrentStep(state, action) {
      state.currentStep = action.payload;
    },
  },
});

export const { setCurrentStep } = stepSlice.actions;
export default stepSlice.reducer;
