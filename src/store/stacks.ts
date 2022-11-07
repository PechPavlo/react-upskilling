import { createSlice } from '@reduxjs/toolkit';

const initialStacksState = { stacks: ['React', 'Angular', 'Vue'] };

const stacksSlice = createSlice({
  name: 'stacks',
  initialState: initialStacksState,
  reducers: {
    addStack(state, action) {},
  },
});

export const stacksActions = stacksSlice.actions;

export default stacksSlice.reducer;
