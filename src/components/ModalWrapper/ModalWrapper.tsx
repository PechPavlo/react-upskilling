import { useDispatch, useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { modulesActions } from '../../store/modules';
import { stacksActions } from '../../store/stacks';

import AddModuleForm from '../AddModuleForm/AddModuleForm';
import AddStackForm from '../AddStackForm/AddStackForm';

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
  const { isAddModuleModalOpen } = useSelector((state: any) => state.modules);
  const { isAddStackModalOpen } = useSelector((state: any) => state.stacks);
  const closeHandler = () => {
    if (isAddModuleModalOpen) {
      dispatch(modulesActions.closeAddModuleModal());
    }
    if (isAddStackModalOpen) {
      dispatch(stacksActions.closeAddStackModal());
    }
  };
  const isOpen = isAddModuleModalOpen || isAddStackModalOpen;

  return (
    <Modal
      open={isOpen}
      onClose={closeHandler}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {isAddModuleModalOpen && <AddModuleForm />}
        {isAddStackModalOpen && <AddStackForm />}
      </Box>
    </Modal>
  );
};

export default ModalWrapper;
