import { createSlice } from '@reduxjs/toolkit';
import { Module } from '../constants/module.interface';
import { Competencies } from '../constants/competencies';

const initialModulesState: { modules: Module[] } = {
  modules: [
    {
      id: 'm1-module',
      name: 'JS Software Engineering',
      competencyType: Competencies.SofSoftwareEngineeringSpecialization,
      sections: ['JavaScript', 'ES Specs', 'Typescript', 'Packaging'],
    },
    {
      id: 'm2-module',
      name: 'FrontEnd Software Engineering',
      competencyType: Competencies.SofSoftwareEngineeringSpecialization,
      sections: ['HTML', 'CSS', 'Web API', 'Browsers'],
    },
    {
      id: 'm3-module',
      name: 'General Software Engineering',
      competencyType: Competencies.SoftwareEngineeringGeneral,
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
    addModule(state, action) {
      state.modules.push(action.payload);
    },
  },
});

export const modulesActions = modulesSlice.actions;

export default modulesSlice.reducer;
