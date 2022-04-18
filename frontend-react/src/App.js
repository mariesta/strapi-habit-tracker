import * as React from 'react';
import { format } from 'date-fns'

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import TextField from '@mui/material/TextField';

import Habits from './Habits';
import CreateHabitForm from './CreateHabitForm';
import Calendar from './Calendar';

export default function App() {
  const [calendarDate, setCalendarDate] = React.useState(new Date());

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
            { /* Form to add habits */ }
            <CreateHabitForm />
          </Grid>
          { /* Calendar */ }
          <Calendar calendarDate={calendarDate} setCalendarDate={setCalendarDate} />
        </Grid>
        {/* Habits Table */}
        <Typography variant="h5" gutterBottom component="div">
          {format(calendarDate, "eeee, d LLLL yyyy")}
        </Typography>
        <Grid container spacing={2} direction="column">
          <Habits type="morning" />
          <Habits type="afternoon" />
          <Habits type="evening" />
        </Grid>
      </Grid>
    </Container>
  );
}
