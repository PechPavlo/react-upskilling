import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { modulesActions } from '../../store/modules';

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

const AddModuleModal = () => {
  const dispatch = useDispatch();
  const { isAddModuleModalOpen } = useSelector((state: any) => state.modules);
  const closeHandler = () => {
    dispatch(modulesActions.closeAddModuleModal());
  };
  const submitHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    dispatch(modulesActions.closeAddModuleModal());
  };

  return (
    <div>
      <Modal
        open={isAddModuleModalOpen}
        onClose={closeHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Module
          </Typography>
          <form onSubmit={submitHandler}>
            <label>
              Module Name:
              <input type="text" />
            </label>
            <br />
            <label>
              Module Competensy:
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </label>
            <div>
              <Button onClick={closeHandler}>Close</Button>
              <Button type="submit">Add</Button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default AddModuleModal;
