import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  Checkbox,
  ListItemText,
  SelectChangeEvent,
  Stack,
  TextField,
} from '@mui/material';

import { stacksActions } from '../../store/stacks';
import { modalActions } from '../../store/modal';

const ITEM_HEIGHT = 148;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const AddStackForm = () => {
  const dispatch = useDispatch();
  const { stacks } = useSelector((state: any) => state.stacks);
  const [stackModules, setStackModules] = useState<string[]>([]);
  const [moduleName, setModuleName] = useState<string>('');

  const nameInputHandler = (event: any) => {
    setModuleName(event.target.value);
  };

  const selectStackModulesHandler = (
    event: SelectChangeEvent<typeof stackModules>
  ) => {
    const {
      target: { value },
    } = event;
    setStackModules(typeof value === 'string' ? value.split(',') : value);
  };

  const closeHandler = () => {
    dispatch(modalActions.closeModal());
  };
  const submitHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    dispatch(modalActions.closeModal());
    dispatch(stacksActions.addStack({}));
  };

  return (
    <>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Add Stack
      </Typography>
      <form onSubmit={submitHandler}>
        <FormControl fullWidth sx={{ marginTop: '20px' }}>
          <TextField
            id="stack-name"
            label="Stack Name"
            variant="outlined"
            margin="normal"
            value={moduleName}
            onChange={nameInputHandler}
          />
        </FormControl>
        <FormControl fullWidth sx={{ marginTop: '20px' }}>
          <InputLabel id="stack-module-label">Stack Modules</InputLabel>
          <Select
            labelId="stack-module-label"
            id="stack-module-checkbox"
            multiple
            value={stackModules}
            onChange={selectStackModulesHandler}
            input={<OutlinedInput label="Stack Modules" />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {stacks.map((stack: string) => (
              <MenuItem key={stack} value={stack}>
                <Checkbox checked={stackModules.indexOf(stack) > -1} />
                <ListItemText primary={stack} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Stack spacing={2} direction="row" sx={{ marginTop: '20px' }}>
          <Button onClick={closeHandler} variant="outlined">
            Close
          </Button>
          <Button type="submit" variant="outlined">
            Add
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default AddStackForm;
