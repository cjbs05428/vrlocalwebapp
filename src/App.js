import React, {useState, useEffect} from 'react';
import {Grid} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {BrowserRouter, Route, Switch, useParams} from 'react-router-dom';

import {getUsers} from './actions/users';

import useStyles from './styles';
import './index.css';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Users from './components/Users/Users';
import NavBar from './components/AppBar/NavBar';
import Contactus from './components/Contactus/Contactus';
import Aboutus from './components/Aboutus/Aboutus';
import Services from './components/Services/Services';
import Slideshow from './components/Slideshow/Slideshow';

const App = () =>{
   
    const [ currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, [currentId, dispatch]);
    
    return(
        <BrowserRouter>       
        <Grid>
            <NavBar/>
            <main>
            <div>
                <Switch>
                    <Route exact path="/" component={Slideshow}/>
                    <Route exact path="/services" component={Services}/>
                    <Route exact path="/aboutus" component={Aboutus}/>
                    <Route exact path="/contactus" component={Contactus}/>
                    <Route exact path="/usersdetails">
                        <Users setCurrentId={setCurrentId}/>
                    </Route>
                    <Route exact path="/register">
                        <Register currentId={currentId} setCurrentId={setCurrentId}/>
                    </Route> 
                    <Route exact path="/signin">
                        <Signin/>    
                    </Route> 
                </Switch>
            
            </div>
       </main>
       
        </Grid>
        </BrowserRouter>
    );
}
export default App;