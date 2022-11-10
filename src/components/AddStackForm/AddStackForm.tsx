import { useDispatch, useSelector } from 'react-redux';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { stacksActions } from '../../store/stacks';

const AddStackForm = () => {
  const dispatch = useDispatch();
  const { stacks } = useSelector((state: any) => state.stacks);
  const closeHandler = () => {
    dispatch(stacksActions.closeAddStackModal());
  };
  const submitHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    dispatch(stacksActions.closeAddStackModal());
  };

  return (
    <>
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
    </>
  );
};

export default AddStackForm;
