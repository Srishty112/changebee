import React from 'react'
import { Facebook, Twitter, YouTube, LinkedIn} from '@material-ui/icons';
import {Typography, Button, Grid, Paper,Box } from '@material-ui/core';
import { ArrowForward, ThreeDRotation } from '@material-ui/icons'

function footer() {
    return (
        <div>
        <div class="row"><br/><br/><br/><br/>
        <div class="col l6 offset-l1">
        <Typography variant="h4" ><b>Still Unsure?? Step Inside and See<br/>
        What The Future Looks Like.</b></Typography></div>
        <br/>
        <Button variant="contained" size="large" color="primary"><b>Schedule a Demo</b> <ArrowForward/></Button>
        <br/><br/><br/><br/>
        </div>
            <hr/><br/><br/>
            <div class="row">
            <div class="col l2 m5 s8 offset-l1 ">
            Product ><br/>
            <sm class="blue-text">
            Subscription Management<br/>
            Recurring Billing<br/>
            Recurring Payments<br/>
            Revenue Recovery<br/>
            Globalized Subscriptions<br/>
            Reporting and Analytics<br/>
            Integrations<br/></sm>

            </div>
            <div class="col l2 m5 s8">
            Help & Support ><br/>
            <sm class="blue-text">
            Security<br/>
            FAQs<br/>
            Status<br/>
            Product Documentation<br/>
            API Documentation<br/>
            Supported Payment Gateways<br/>
            Sitemap<br/>
            </sm>
            </div>
            <div class="col l2 m5 s8">
            Resources ><br/>
            <sm class="blue-text">
            Blog <br/>
            Compare Payment Gateways <br/>
            Tackling Payment Failures <br/>
            Enterprise Billing Guide <br/>
            Webinars <br/>
            Glossaries <br/>
            </sm>
            </div>
            <div class="col l2 m5 s8">
            Company ><br/>
            <sm class="blue-text">
            Customers<br/>
            Partners<br/>
            Careers<br/>
            Press<br/>
            Terms<br/>
            Privacy<br/>
            </sm>
            </div>
            </div><br/><br/>
            <div class="left"><a class="cb">ChargeBee</a></div>
            <m class="right"><m><Facebook/></m><m><Twitter/></m><m><YouTube/></m><m><LinkedIn/></m></m>
            <br/>
            <br/>
            </div>
    )
}

export default footer
