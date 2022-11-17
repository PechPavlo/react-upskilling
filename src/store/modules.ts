import { createSlice } from '@reduxjs/toolkit';
import { COMPETENCY } from '../constants/competency';

const initialModulesState = {
  modules: [
    {
      id: 'm1',
      name: 'JS Software Engineering',
      competencyType: COMPETENCY[0],
      sections: ['JavaScript', 'ES Specs', 'Typescript', 'Packaging'],
    },
    {
      id: 'm2',
      name: 'FrontEnd Software Engineering',
      competencyType: COMPETENCY[0],
      sections: ['HTML', 'CSS', 'Web API', 'Browsers'],
    },
    {
      id: 'm3',
      name: 'General Software Engineering',
      competencyType: COMPETENCY[1],
      sections: [
        'Service-to-service communication',
        'Authentication & Authorization',
        'Non-functional requirements',
        'Tools',
        'Network protocols',
        'Functional requirements',
      ],
    },
  ],
};

const modulesSlice = createSlice({
  name: 'modules',
  initialState: initialModulesState,
  reducers: {
    addModule(state, action) {},
  },
});

export const modulesActions = modulesSlice.actions;

export default modulesSlice.reducer;
