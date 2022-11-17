import { useDispatch, useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import AddModuleForm from '../AddModuleForm/AddModuleForm';
import AddStackForm from '../AddStackForm/AddStackForm';
import { modalActions } from '../../store/modal';
import { FormsTypes } from '../../constants/forms-types.enum';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalWrapper = () => {
  const dispatch = useDispatch();

  const { isModalOpen: isOpen, formType } = useSelector(
    (state: any) => state.modal
  );

  const closeHandler = () => {
    dispatch(modalActions.closeModal());
  };

  return (
    <Modal
      open={isOpen}
      onClose={closeHandler}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {formType === FormsTypes.AddModule && <AddModuleForm />}
        {formType === FormsTypes.AddStack && <AddStackForm />}
      </Box>
    </Modal>
  );
};

export default ModalWrapper;
