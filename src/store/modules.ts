import { createSlice } from '@reduxjs/toolkit';

const initialModulesState = { modules: [] };

const modulesSlice = createSlice({
  name: 'module',
  initialState: initialModulesState,
  reducers: {
    addModule(state, action) {},
  },
});

export const modulesActions = modulesSlice.actions;

export default modulesSlice.reducer;
