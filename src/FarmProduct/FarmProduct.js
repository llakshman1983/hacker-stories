import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

/*
const farmProduct = () => {
    return <div>Name: <br/>Price:</div>    
}

export default farmProduct;

*/

  

export default function farmProduct() {

    
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  }));


   // const classes = useStyles();
    const classes = "";
    function FormRow() {
      return (
        <React.Fragment>
          <Grid item xs={4}>
            <Paper className={classes.paper}>காய்கள்</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>பழங்கள்</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>கீரைகள்</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>பால்/Milk Products</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>முட்டை</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>எண்ணெய்</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>மலர்கள்</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>தின்பண்டங்கள்</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>மசாலா</Paper>
          </Grid>
        </React.Fragment>
      );
    }
  
    return (
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
        </Grid>
      </div>
    );
  }