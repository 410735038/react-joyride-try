import { configureStore } from '@reduxjs/toolkit';
import stepReducer from './stepSlice.js';
import component1Reducer from './component1Slice.js';
import component2Reducer from './component2Slice.js';
import component3Reducer from './component3Slice.js';
import component4Reducer from './component4Slice.js';
import component5Reducer from './component5Slice.js';

export const store = configureStore({
  reducer: {
    step: stepReducer,
    component1: component1Reducer,
    component2: component2Reducer,
    component3: component3Reducer,
    component4: component4Reducer,
    component5: component5Reducer,
  },
});
