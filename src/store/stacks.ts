import { createSlice } from '@reduxjs/toolkit';

const initialStacksState = {
  isAddStackModalOpen: false,
  stacks: ['React', 'Angular', 'Vue'],
};

const stacksSlice = createSlice({
  name: 'stacks',
  initialState: initialStacksState,
  reducers: {
    addStack(state, action) {},
    openAddStackModal(state) {
      state.isAddStackModalOpen = true;
    },
    closeAddStackModal(state) {
      state.isAddStackModalOpen = false;
    },
  },
});

export const stacksActions = stacksSlice.actions;

export default stacksSlice.reducer;
