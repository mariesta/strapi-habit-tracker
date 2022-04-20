import * as React from 'react';
import axios from "axios";
import * as qs from 'qs'
import { format } from 'date-fns';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Checkbox from '@mui/material/Checkbox';

export default function Habits({type, calendarDate}) {
  const [habits, setHabits] = React.useState([]);

  React.useEffect(() => {
    fetchData()
  }, [calendarDate])

  const fetchData = () => {
    axios.get(`http://localhost:1337/api/get-habits-with-logs?calendarDate=${format(calendarDate, "yyyy-MM-dd")}&type=${type}`)
    .then((response) =>{
      setHabits(response.data)
    })
    .catch((error) => console.log(error))
  }

  const completeHabit = (habitId) => () => {
    axios
      .post('http://localhost:1337/api/habit-logs', {
        data: {
          habit: habitId,
          completionDate: calendarDate
        }
      })
      .then((response) => {
        fetchData()
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return(
    <Grid item>
    {/*  Title of the section aka Morning routine */}
      <Typography variant="h6" gutterBottom component="div">
        {type.replace(/^\w/, (c) => c.toUpperCase())} routine
      </Typography>
      {/* Whole list */}
      <List sx={{ width: '100%' }}>
      {habits.length > 0 && habits.map((habit) => {
        const { id, name, completed } = habit
        const labelId = `checkbox-list-label-${id}`;
        return (
          <ListItem
            key={id}
            disablePadding
          >
            <ListItemButton role={undefined} onClick={completeHabit(id)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={completed}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={name} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
    </Grid>
  )
}
