import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

function Dropdown (props) {

    const useStyles = makeStyles( ({
        root: {
            width: "20%"
        },
        formcontrol: {
            margin: 1,
            width: 'fit-content',
            alignItems: 'right',
            display: 'block',
            float: 'right',
        }
        }));

    const classes = useStyles();

    return (
        <div>
        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label"></InputLabel>
            <FormHelperText>Birthday Month</FormHelperText>
                <Select
                labelId="demo-simple-select-outlined-label"
                autoWidth
                id="bdayDropdown"
                value={props.value}
                onChange={props.onChange}
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
