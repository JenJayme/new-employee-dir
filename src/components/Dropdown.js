import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import rows from './data';

function Dropdown (props) {

    var selectedMonth;

    const useStyles = makeStyles( ({
        root: {
            width: "20%"
        },
        formcontrol: {
            margin: 1,
            minWidth: 150,
            alignItems: 'right',
            display: 'block',
            float: 'left',
        }
        }));

    const classes = useStyles();

    const filterFct = (props) => {

    let selectedMonth = props.target.value;
    // alert("Filter button clicked");
    console.log("ROWS =", rows);
    
    // const filteredRows = rows.filter(rows => rows.bdayMonth === props.bdayMonth);
    let filteredRows = rows.filter(rows => rows.bdayMonth === selectedMonth);

    console.log("BIRTHDAYS IN", selectedMonth, filteredRows);
    console.log("FILTER ON: ", selectedMonth);
    console.log("PROPS.TARGET.VALUE: ", props.target.value);

    props.data = filteredRows;
    return filteredRows;

  }


    return (
        <div>
        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Birthday Month</InputLabel>
            {/* <FormHelperText>Filter by</FormHelperText> */}
                <Select
                labelId="demo-simple-select-outlined-label"
                autoWidth
                id="bdayDropdown"
                defaultValue="All"
                value={selectedMonth}
                onChange={filterFct}
                label="Birthday Month"
                >
                    <MenuItem value="All">
                        <em>All</em>
                    </MenuItem>
                    <MenuItem value={"January"}>January</MenuItem>
                    <MenuItem value={"February"}>February</MenuItem>
                    <MenuItem value={"March"}>March</MenuItem>
                    <MenuItem value={"April"}>April</MenuItem>
                    <MenuItem value={"May"}>May</MenuItem>
                    <MenuItem value={"June"}>June</MenuItem>
                    <MenuItem value={"July"}>July</MenuItem>
                    <MenuItem value={"August"}>August</MenuItem>
                    <MenuItem value={"September"}>September</MenuItem>
                    <MenuItem value={"October"}>October</MenuItem>
                    <MenuItem value={"November"}>November</MenuItem>
                    <MenuItem value={"December"}>December</MenuItem>
                </Select>
          </FormControl>
    </div>
    )
}

export default Dropdown;
