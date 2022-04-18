import * as React from 'react';

import Grid from '@mui/material/Grid';

import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';

export default function CreateHabitForm() {
  const [type, setType] = React.useState("morning");

  const handleTypeChange = (event) => {
    setType(event.target.value)
  }

  return(
    <Grid container spacing={2} direction="column">
      <Grid item>
        <FormControl fullWidth>
          <TextField id="standard-basic" label="Name" variant="outlined" />
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl fullWidth>
          <InputLabel id="habit-project-select-type-label">Type</InputLabel>
          <Select
            labelId="habit-project-select-type-label"
            id="habit-project-select-type"
            value={type}
            label="Type"
            autoWidth
            onChange={handleTypeChange}
          >
            <MenuItem value="morning">Morning</MenuItem>
            <MenuItem value="afternoon">Afternoon</MenuItem>
            <MenuItem value="evening">Evening</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item>
        <Button variant="contained">Add</Button>
      </Grid>
    </Grid>
  )
}
