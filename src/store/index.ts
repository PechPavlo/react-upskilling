import { configureStore } from '@reduxjs/toolkit';

import stacksSlice from './stacks';
import modulesSlice from './modules';
import modalSlice from './modal';

const store = configureStore({
  reducer: { stacks: stacksSlice, modules: modulesSlice, modal: modalSlice },
});

export default store;
