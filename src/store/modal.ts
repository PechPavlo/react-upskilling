import { createSlice } from '@reduxjs/toolkit';
import { FormsTypes } from '../constants/forms-types.enum';
import { ModalState } from './modalState.interface';

const initialModalState: ModalState = {
  isModalOpen: false,
  formType: FormsTypes.AddStack,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState: initialModalState,
  reducers: {
    openModal(state, action) {
      state.isModalOpen = true;
      state.formType = action.payload;
    },
    closeModal(state) {
      state.isModalOpen = false;
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice.reducer;
