import { useId, useState } from 'react';
import { useDispatch } from 'react-redux';

// Material UI
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Stack,
} from '@mui/material';

import { modulesActions } from '../../store/modules';
import { modalActions } from '../../store/modal';
import { Module } from '../../constants/module.interface';
import { Competencies } from '../../constants/competencies';

const AddModuleForm = () => {
  const dispatch = useDispatch();
  const id = useId();
  const [moduleName, setModuleName] = useState('');
  const [SelectedCompetency, setSelectedCompetency] = useState<Competencies>(
    Competencies.SofSoftwareEngineeringSpecialization
  );

  const closeHandler = () => {
    dispatch(modalActions.closeModal());
  };

  const nameInputHandler = (event: any) => {
    setModuleName(event.target.value);
  };

  const selectHandler = (event: any) => {
    setSelectedCompetency(event.target.value);
  };

  const submitHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const newModule: Module = {
      id: `${id}-module`,
      name: moduleName,
      competencyType: SelectedCompetency,
      sections: [
        'Service-to-service communication',
        'Authentication & Authorization',
        'Non-functional requirements',
        'Tools',
        'Network protocols',
        'Functional requirements',
      ],
    };
    dispatch(modalActions.closeModal());
    dispatch(modulesActions.addModule(newModule));
  };

  return (
    <>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Add Module
      </Typography>
      <form onSubmit={submitHandler}>
        <FormControl fullWidth sx={{ marginTop: '20px' }}>
          <TextField
            id="module-name"
            label="Module Name"
            variant="outlined"
            margin="normal"
            value={moduleName}
            onChange={nameInputHandler}
          />
        </FormControl>

        <FormControl fullWidth sx={{ marginTop: '20px' }}>
          <InputLabel id="module-name-label">Module Competensy</InputLabel>
          <Select
            labelId="module-name-label"
            id="module-name-select"
            label="Module Competensy"
            value={SelectedCompetency}
            onChange={selectHandler}
          >
            {Object.values(Competencies).map((value, index) => (
              <MenuItem key={index} value={value}>
                {value}
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

export default AddModuleForm;
