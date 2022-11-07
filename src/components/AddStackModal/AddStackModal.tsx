import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { stacksActions } from '../../store/stacks';

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

const AddStackModal = () => {
  const dispatch = useDispatch();
  const { isAddStackModalOpen } = useSelector((state: any) => state.stacks);
  const closeHandler = () => {
    dispatch(stacksActions.closeAddStackModal());
  };
  const submitHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    dispatch(stacksActions.closeAddStackModal());
  };

  return (
    <div>
      <Modal
        open={isAddStackModalOpen}
        onClose={closeHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Stack
          </Typography>
          <form onSubmit={submitHandler}>
            <label>
              Stack Name:
              <input type="text" />
            </label>
            <br />
            <label>
              Stack Modules:
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

export default AddStackModal;
