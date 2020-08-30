import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


function Dropdown (props) {

    const filterFct = (props) => {

        // let filter = "January";
        alert("Filter button clicked");
        // console.log("ROWS =", rows);
        
        // const filteredRows = rows.filter(rows => rows.bdayMonth === props.bdayMonth);
        const filteredRows = rows.filter(rows => rows.bdayMonth === filter);
        // console.log("BIRTHDAYS IN JANUARY =", filteredRows);
        // console.log("FILTER ON: ", filter);
    }



    return (
        <div>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">AgeHello</InputLabel>
                    <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={bdayMonth}
                    onChange={filterFct}
                    label="Birthday Month"
                    >
                        <MenuItem value="">
                            <em>All</em>
                        </MenuItem>
                        <MenuItem value={January}>January</MenuItem>
                        <MenuItem value={February}>February</MenuItem>
                        <MenuItem value={March}>March</MenuItem>
                    </Select>
        </FormControl>
      </div>
    )
}

export default Dropdown;
