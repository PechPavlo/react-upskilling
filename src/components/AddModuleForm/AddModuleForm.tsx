import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { modulesActions } from '../../store/modules';
import { modalActions } from '../../store/modal';

const AddModuleForm = () => {
  const dispatch = useDispatch();
  const { modules } = useSelector((state: any) => state.modules);
  const closeHandler = () => {
    dispatch(modalActions.closeModal());
  };
  const submitHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    dispatch(modalActions.closeModal());
    dispatch(modulesActions.addModule({}));
  };

  return (
    <>
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
    </>
  );
};

export default AddModuleForm;
