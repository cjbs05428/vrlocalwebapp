import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import vrLocal from '../../images/vrLocal.jpg';
import useStyles from './styles';



const NavBar = () => {
    const classes=useStyles();
    
    return(     
        
        <AppBar className={classes.appBar} position="static" color="inherit">
                <Link to={'/'} >
                <img src={vrLocal}  alt="vrLocal" style={{marginLeft: 15}} height="70" width="70" />
                </Link>             
                 <Link className= {classes.heading}  to={'/'}  >home</Link>
                <Link className= {classes.heading} to={'/services'}  >Services</Link>
                <Link className= {classes.heading} to={'/aboutus'}   >About Us</Link>
                <Link className= {classes.heading}  to={'/contactus'}  >Contact Us</Link>
                <Link className= {classes.heading} to={'/usersdetails'}  >Users Details</Link>
                <Link className= {classes.heading} to={'/register'}  >Register</Link>
                <Link className= {classes.heading}  to={'/signin'} >signin</Link>

        </AppBar>
        
    

    )} 
export default NavBar;