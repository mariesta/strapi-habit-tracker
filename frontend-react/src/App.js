import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';

import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import Habits from './Habits';

export default function App() {
  const [date, setDate] = React.useState(new Date());
  const [type, setType] = React.useState("morning");

  const handleTypeChange = (event) => {
    setType(event.target.value)
  }
  return (
    <Container maxWidth="md" style={{ paddingTop: '20px'}}>
      {/* Main Container */}
      <Grid container spacing={2} direction="column">
        {/* Form + Calendar*/}
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h4" component="div" gutterBottom>
              Habit Picker project
            </Typography>
            <Typography variant="body1" gutterBottom>
              Form
            </Typography>
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
          </Grid>
          { /* Calendar */ }
          <Grid item xs={6}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <StaticDatePicker
                displayStaticWrapperAs="desktop"
                openTo="day"
                value={date}
                maxDate={new Date()}
                onChange={(newValue) => {
                  setDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Grid>
        </Grid>
        {/* Habits Table */}
        <Grid container spacing={2} direction="column">
          <Habits type="morning" />
          <Habits type="afternoon" />
          <Habits type="evening" />
        </Grid>
      </Grid>
    </Container>
  );
}
