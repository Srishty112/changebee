import React, { Component } from 'react'
import { Button, Grid, Paper,Box } from '@material-ui/core';
import { Lock , ArrowForward} from '@material-ui/icons';
import useStyles from './styles';


const Navbar=()=> {
    const classes = useStyles();
        return (
            <nav >   
            <Box > 
            <div class="left"  >
            <a class="cb">ChargeBee</a>
            <Button ><b>Product</b></Button>
            <Button ><b>Pricing</b></Button>
            <Button ><b>Solutions</b></Button>
            <Button ><b>Costumers</b></Button>
            <Button ><b>Resources</b></Button>
            </div></Box> 
            <m class="right">
            <Button  ><Lock fontSize="small" color="secondary"/> Log In <ArrowForward/></Button>
            <Button className={classes.btn2} top={0} variant="contained" color="secondary"><b>Schedule A Demo</b> <ArrowForward/></Button>
            </m>
            
            </nav>

        )
    }


export default Navbar
