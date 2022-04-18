import * as React from 'react';

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export default function Calendar({ calendarDate, setCalendarDate }) {
  return (
    <Grid item xs={6}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          openTo="day"
          value={calendarDate}
          maxDate={new Date()}
          onChange={(newValue) => {
            setCalendarDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Grid>
  )
}
