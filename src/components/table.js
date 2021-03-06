import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from '@material-ui/core/Button';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import rows from '../components/data';
import $ from "jquery";
import EmployeeCard from './Card';
import Dropdown from "./Dropdown";

var data = rows;

//SORT FUNCTIONS

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

// COLUMN HEADINGS WITH PROPERTIES FOR SORTING
const headCells = [
  { id: "photo", numeric: false, disablePadding: true, label: "Photo" },
  {
    id: "firstName",
    numeric: false,
    disablePadding: false,
    label: "First Name"
  },
  { id: "lastName", numeric: false, disablePadding: false, label: "Last Name" },
  { id: "title", numeric: false, disablePadding: false, label: "Title" },
  {
    id: "department",
    numeric: false,
    disablePadding: false,
    label: "Department"
  },
  { id: "birthday", numeric: false, disablePadding: false, label: "Birthday" },
  { id: "email", numeric: false, disablePadding: false, label: "Email" },
  { id: "phone", numeric: false, disablePadding: false, label: "Phone" },
  { id: "id", numeric: true, disablePadding: true, label: "Employee ID" }
];

//FUNCTION TO GENERATE HEADER WITH SORT CAPABILITIES
function EmployeeTableHead(props) {
  const {
    classes,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  //RETURNS HEADING ROW
  return (
    <TableHead className="mainDiv">
      <TableRow className="headerRow">

        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="left"
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              <h3>{headCell.label}</h3>
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
            </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

//PASSES PROPERTIES TO TABLE
EmployeeTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired
};

//STYLES FOR TABLE - MATERIAL UI APPROACH
const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1)
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85)
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark
        },
  title: {
    flex: "1 1 100%",
    display: 'block',
    float: 'right',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
    marginTop: '1em'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


//TABLE HEADER WITH FILTER ICON - THIS DOESN'T WORK
const FilterHeader = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  // const [filter, setFilter] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState("");

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `Home of Little Sebastian`;

  });

  // var selectedMonth;

  return (
    <div>
      <Container maxWidth="sm" className="mainDiv">

            <Toolbar
              className={clsx(classes.root, {
                [classes.highlight]: numSelected > 0
              })}
                >

                <div id="instructions">
                <Typography
                  className={classes.title}
                  variant="h6"
                  id="tableTitle"
                  component="div">

                Click on any heading to sort data by that column or choose a month to filter by birthday.
                </Typography>
                </div>
                {/* <Tooltip title="Filter list"> */}
                  {/* <IconButton aria-label="filter list" id="filterBtn" onClick={filterFct}> */}
                    {/* <FilterListIcon/> */}
                    {/* <Searchbar/> */}
                  {/* </IconButton> */}
                {/* </Tooltip> */}
            </Toolbar>

      </Container>
    </div>
  );
};

FilterHeader.propTypes = {
  numSelected: PropTypes.number.isRequired
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  announceBar: {
    width: "100%",
    display: 'inline-block',
    alignItems: 'left',
    float: 'right',
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2)
  },
  table: {
    minWidth: 750
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1
  }
}));

export default function EmployeeTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("lastName");
  const [selected, setSelected] = React.useState([]);
  const [selectedMonth, setSelectedMonth] = React.useState('');
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);
  const [rowsData, setRowsData] = React.useState(rows);

  let filteredRows = rows.filter(rows => rows.bdayMonth === selectedMonth);

  // console.log("FILTERED ROWS IN TABLE FCT", filteredRows)
  // console.log("SELECTED MONTH IN TABLE FCT", selectedMonth)
  // console.log("PROPS", props)


  //*******************************************************************8 */
    // var filteredRows;

    const filterFct = (props) => {
  
      console.log("ROWS =", rows);

      let selectedMonth = props.target.value;
      
      let filteredRows = rows.filter(rows => rows.bdayMonth === selectedMonth);
  
      // console.log("BIRTHDAYS IN", selectedMonth, filteredRows);
      console.log("FILTER ON: ", selectedMonth);
      // console.log("PROPS.TARGET.VALUE: ", props.target.value);
  
      data = filteredRows;
      
      console.log('DATA = ', data)
      setRowsData(data);
  
      return filteredRows;
  
    }
  //********************************************************************** */
  
  const showAll = () => {
    setRowsData(rows)
  }


  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    
    // alert("HandleClick function engaged...");
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  // const isSelected = (name) => selected.indexOf(name) !== -1;
  const isSelected = (bdayMonth) => rows.bdayMonth;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <FilterHeader numSelected={selected.length} />
        
        <Grid container className={classes.root} spacing={2}>

        <Grid item xs={6} className={classes.joinTournDiv}>
        <Button variant="contained" color="primary" onClick={showAll}>Refresh</Button>
        </Grid>
        <Grid item xs={4} className={classes.joinTournDiv}>
        <Dropdown onChange={filterFct} value={selectedMonth}/>
        </Grid>

        </Grid>
    
        {/* <div id="bDayMsg"></div> */}

        <TableContainer>
          <Table
            stickyHeader
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
            aria-label="Employee Table"
            id="employeeTable"
          >
            <EmployeeTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>

{/* =============================================================== */}

              {stableSort(rowsData, getComparator(order, orderBy))
                // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  // console.log("ROWSDATA LENGTH: ", rowsData.length);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  // Populate with employee data
                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                    >

                      <TableCell colSpan={1}>
                        <img src={process.env.PUBLIC_URL + "/images/" + row.photo}
                        alt={row.lastName} className="photos"></img>

                      </TableCell>
                      <TableCell colSpan={1}>{row.firstName}</TableCell>
                      <TableCell colSpan={1}>{row.lastName}</TableCell>
                      <TableCell colSpan={1}>{row.title}</TableCell>
                      <TableCell colSpan={1}>{row.department}</TableCell>
                      <TableCell colSpan={1}>{row.birthday}</TableCell>
                      <TableCell colSpan={1}>{row.email}</TableCell>
                      <TableCell colSpan={1}>{row.phone}</TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        align="left"
                        padding="none"
                        colSpan={1}
                      >
                        {row.id}
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      {/* <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      /> */}
    </div>
  );
}

