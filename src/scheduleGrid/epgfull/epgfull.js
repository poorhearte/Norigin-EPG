import React from 'react';
import SideBar from '../sidebar/sidebar.js';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';

import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles(theme => ({
  layout: {
		width: 'auto',
		marginLeft: theme.spacing(3),
		marginRight: theme.spacing(3),
		[theme.breakpoints.up(1100 + theme.spacing(3) * 2)]: {
      width: 1100,//최대width를 1100으로 고정시키는 의미
			marginLeft: 'auto',
			marginRight: 'auto'
		}
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },

  datePicker: {
    margin: theme.spacing(1),
  },

  epg: {
    boxSizing: 'border-box',//box-sizing이라고 하면 문법에러남
    height: '75vh',//채널갯수 많을 때 화면밑으로 내려가지 않도록
    overflowY: 'auto',//채널갯수 많을 때 화면밑으로 내려가지 않고 스크를되도록
    transform: 'translate3d(0,0,0)',
    // display: 'flex',
    // flexWrap: 'wrap',
    // '& > *': {
    //   margin: theme.spacing(1),
    //   width: theme.spacing(16),
    //   height: theme.spacing(16),
    // },
  },
}));

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

const countries = [
  'USA',
  'Canada',
  'Korea',
  'Spain'
];

const cps = [
  'Xumo',
  'Pluto',
  'Rakuten',
  'N.E.W'
];

function EPG() {

  const classes = useStyles();
  const [cntry, setCntry] = React.useState([]);
  const [cp, setCp] = React.useState([]);

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const handleChange = event => {
    setCntry(event.target.value);
  };
  const handleChangeCp = event => {
    setCp(event.target.value);
  };

  return (
    <div className={classes.layout}>

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={cntry}
          onChange={handleChange}
          input={<Input />}
          //MenuProps={MenuProps}
        >
          {countries.map(name => (
            <MenuItem key={name} value={name} >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">CP</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={cp}
          onChange={handleChangeCp}
          input={<Input />}
          //MenuProps={MenuProps}
        >
          {cps.map(name => (
            <MenuItem key={name} value={name} >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <br/>
      <MuiPickersUtilsProvider utils={DateFnsUtils} className={classes.datePicker}>
        {/* <Grid container justify="space-around"> */}
          <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date picker inline"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
        {/* </Grid> */}
      </MuiPickersUtilsProvider>


      <div className={classes.epg}>
        <SideBar />      
      </div>
    </div>
  );
}

export default EPG;
