import React from 'react'
import img3 from './img3.png'
import img4 from './img4.png'
import img5 from './img5.png'
import useStyles from './styles';

import {Typography, Button, Grid, Paper,Box } from '@material-ui/core';
import { ArrowForward, Done} from '@material-ui/icons';


function Comp2() {
    const classes = useStyles();

    return (
        <div>
        <div class="row">
        <div class="col l5 m7 s10 offset-l1"><br/>
        <sm class="blue-text">No more spreadsheet errors</sm>
        <h5><b>Automate Recurring Billing</b></h5><br/>
        Scale your SaaS through 480+ recurring billing scenarios that automate who you bill, when, and how. No humans, no spreadsheets, no missed payments!<br/>

        <div class="row"><br/><div class="col l6"><Done color="primary"/>  Billing Schedules<br/><br/>
        <Done color="primary"/>  Billing Schedules
        </div>
        <div class="col l6"><Done color="primary"/>  Billing Schedules<br/><br/>
        <Done color="primary"/>  Billing Schedules
        </div>
        
        <m><br/><br/>
        <Button variant="outlined"  color="primary">Learn More <ArrowForward/></Button></m>
        
        </div>
        </div>
        <div class="col l6">
        <img src={img3}/>
        </div>
        </div>

        <div class="row">
        <div class="col l5 m7 s10 offset-l1"><br/>
        <img src={img5}/>
        </div>
        <div class="col l6">

        <br/>
        <sm class="blue-text">No more developer dependency</sm>
        <h5><b>Smarter Subscription Management</b></h5><br/>
        Experiment rapidly with pricing structures, product catalogs, and subscription lifecycles with a business-user-first experience.<br/>

        <div class="row"><br/><div class="col l6"><Done color="primary"/>  Billing Schedules<br/><br/>
        <Done color="primary"/>  Billing Schedules
        </div>
        <div class="col l6"><Done color="primary"/>  Billing Schedules<br/><br/>
        <Done color="primary"/>  Billing Schedules
        </div>
        
        <m><br/><br/>
        <Button variant="outlined"  color="primary">Learn More <ArrowForward/></Button></m>
        
        </div>
        
        </div>
        </div>



        <div class="row">
        <div class="col l5 m7 s10 offset-l1"><br/>
        <sm class="blue-text">No more lost opportunities</sm>
        <h5><b>Streamline Revenue Operations</b></h5><br/>
        Plug revenue leaks by aligning GTM & Finance. Uncover growth opportunities across processes, geographies, and business models.
        

        <div class="row"><br/><div class="col l6"><Done color="primary"/>  Billing Schedules<br/><br/>
        <Done color="primary"/>  Billing Schedules
        </div>
        <div class="col l6"><Done color="primary"/>  Billing Schedules<br/><br/>
        <Done color="primary"/>  Billing Schedules
        </div>
        
        <m><br/><br/>
        <Button variant="outlined"  color="primary">Learn More <ArrowForward/></Button></m></div>


        </div>
        <div class="col l6">
        <img src={img4}/>
        </div>
        </div>


        </div>
    )
}

export default Comp2
