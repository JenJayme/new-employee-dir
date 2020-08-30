import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import rows from './data';

function EmployeeCard() {

  const row = rows[0]

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return (
        // <div className={classes.root}>
        <div>
            {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open alert dialog
            </Button> */}

            <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >

                <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
                <DialogContent>

                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous location data to
                        Google, even when no apps are running.
                    </DialogContentText>


                    <Grid container>
                        <Grid item>

                            <img src={process.env.PUBLIC_URL + "/images/" + row.photo}
                            alt={row.lastName} className="photos"></img>

                        </Grid>
                        <Grid item>

                            <h3>{row.firstName} {row.lastName}</h3>
                            <h5>{row.title}</h5>
                            <h5>{row.department}</h5>
                            <p><small>Phone:</small> {row.phone}</p>
                            <p><small>Email:</small> {row.email}</p>
                            <p><small>Birthday:</small> {row.birthday}</p>
                            <p><small>ID:</small>{row.id}</p>

                        </Grid>

                    </Grid>
                            
                </DialogContent>

                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Disagree
                  </Button>
                  <Button onClick={handleClose} color="primary" autoFocus>
                    Agree
                  </Button>
                </DialogActions>

            </Dialog>            

        </div>
    )
}

export default EmployeeCard;
