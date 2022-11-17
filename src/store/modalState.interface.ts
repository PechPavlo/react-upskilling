import { FormsTypes } from '../constants/forms-types.enum';

export interface ModalState {
  isModalOpen: boolean;
  formType: FormsTypes;
}
