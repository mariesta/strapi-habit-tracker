import * as React from 'react';
import axios from "axios";

import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';

import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';

export default function CreateHabitForm() {
  const [name, setName] = React.useState("");
  const [type, setType] = React.useState("morning");
  const [alert, setAlert] = React.useState({message: null, type: null});

  const handleSubmit = () => {
    setAlert({ message: null, type: null})
    axios
      .post('http://localhost:1337/api/habits', {
        data: {
          name,
          type
        }
      })
      .then((response) => {
        setName("")
        setType("")
        setAlert({ message: 'Habit created', type: 'success'})
      })
      .catch((error) => {
        console.log(error);
        setAlert({ message: 'An error occurred', type: 'error'})
      });
  }
  return(
    <Grid container spacing={2} direction="column">
      {alert.type && <Alert severity={alert.type}>{alert.message}</Alert>}
      <Grid item>
        <FormControl fullWidth>
          <TextField
            id="habit-name"
            label="Name"
            variant="outlined"
            value={name}
            onChange={(event) => setName(event.target.value)}/>
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
            onChange={(event) => setType(event.target.value)}
          >
            <MenuItem value="morning">Morning</MenuItem>
            <MenuItem value="afternoon">Afternoon</MenuItem>
            <MenuItem value="evening">Evening</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item>
        <Button variant="contained" onClick={handleSubmit}>Add</Button>
      </Grid>
    </Grid>
  )
}
