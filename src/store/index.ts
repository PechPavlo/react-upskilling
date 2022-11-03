import { configureStore } from '@reduxjs/toolkit';

import stacksSlice from './stacks';
import modulesSlice from './modules';

const store = configureStore({
  reducer: { stacks: stacksSlice, modules: modulesSlice },
});

export default store;
