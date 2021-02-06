import React, { Component } from 'react'
import { ArrowForward, ThreeDRotation } from '@material-ui/icons';
import {Typography, Button, Grid, Paper,Box } from '@material-ui/core';
import useStyles from './styles';
import img from './blue.jpg'
import img1 from './img1.png'
import img6 from './img6.png'
import img2 from './img2.png'


const Comp1=()=> {
        const classes = useStyles();
        return (
            <div>
            <Box m={5} p={14}>
                
            
                <Typography variant="h3" color="primary"><b>Subscription Billing & Revenue Operations</b></Typography>
                <Typography variant="h3"><b>for Fast-Growth B2B SaaS </b></Typography>
                <p>Get the operational sophistication to achieve, sustain,<br/>
                and scale recurring revenue.</p><br/>
             
                <Button className={classes.buttonSubmit} variant="contained" size="large" color="primary">Schedule A Demo <ArrowForward/></Button>
                <Button className={classes.buttonSubmit} variant="outlined" size="large" color="primary">Sign up for free <ArrowForward/></Button>
                </Box>               
                <img src={img2}/>
                
                <div class="row indigo1">
                <img src={img6}/>
                <white class="col l7 offset-l1"><h3><b>Works With Your
                Revenue Management Stack</b> </h3>
                Managing sales, payments, customer experience or your books: <br/>if it affects your revenue cycle, Chargebee works with it.
                <br/><br/></white>
                <img src={img1}/>
                </div>
                
                </div>
        )
    }

export default Comp1
