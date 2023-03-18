import React from 'react';
import { Button, Typography, Paper, Grid, Container } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import useStyles from './styles';


const CVform = ({ user }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Paper>
    <Grid container spacing={1}>
        <Grid container item spacing={1}>
            <Typography className={classes.title} variant="h1" component="h2">Sazid Farhan</Typography>
        </Grid>
     
    </Grid>

        <Container>
          <Grid className={classes.mainContainer} container alignItems='stretch' justify-content="space-evenly" direction='row' spacing={3}>
            <Grid item xs={12} sm={7}>
                <Grid container item spacing={1}>
                    <Typography className={classes.title} variant="h2">Contact</Typography>
                </Grid>
                <Grid container item spacing={1}>
                    <Typography className={classes.title} variant="h2">Education</Typography>
                </Grid>
                <Grid container item spacing={1}>
                    <Typography className={classes.title} variant="h2" component="h2">Skills</Typography>
                </Grid>
                <Grid container item spacing={1}>
                    <Typography className={classes.title} variant="h2" component="h2">References</Typography>
                </Grid>
            </Grid>
                <Grid item xs={12} sm={4}>
                    <Grid container item spacing={1}>
                        <Typography className={classes.details} variant="h2">Summary</Typography>
                    </Grid>
                    <Grid container item spacing={1}>
                        <Typography className={classes.title} variant="h2">Work Experience</Typography>
                    </Grid>
                    <Grid container item spacing={1}>
                        <Typography className={classes.title} variant="h2" component="h2">Soft Skills</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    </Paper>

  )
}

export default CVform;
