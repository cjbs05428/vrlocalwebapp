import React, {useState, useEffect} from 'react';
import {TextField, Button, Typography, Paper} from '@material-ui/core';
import useStyles from './styles';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from "react-router-dom";


import {createUser, updateUser} from '../../actions/users';

const Register = ({currentId, setCurrentId}) =>{
        const [postData, setPostData] = useState({
        name:'', userName:'', password:'', email:'', address:'', contactNumber:'', userType:''
         });
        const classes=useStyles();

        const dispatch= useDispatch();   
        
        const user=useSelector((state) => currentId ? state.users.find((p) => p._id === currentId): null); 

        useEffect( () => {
            if(user) setPostData(user); 
        }, [user])

        let history = useHistory();
        const handleSubmit = (e) =>{
            e.preventDefault();
            if(currentId){
                dispatch(updateUser(currentId, postData));
                history.push("/usersdetails");
            }

            else{
                dispatch(createUser(postData));
            }
            clear();
        }

        const clear = () =>{
            setCurrentId(null);
            setPostData({name:'', userName:'', password:'', email:'', address:'', contactNumber:'', userType:''});
        }

        
        return(
            <Paper className={classes.paper}>
                <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                    <Typography variant="h6">{currentId ? 'Edit' : 'Register'} an User</Typography>
                    <TextField name="name" variant="outlined" label="Full Name" fullWidth value={postData.name} 
                    onChange={(e) => setPostData({...postData, name: e.target.value})}></TextField>
                     <TextField name="userName" variant="outlined" label="UserName" fullWidth value={postData.userName} 
                    onChange={(e) => setPostData({...postData, userName: e.target.value})}></TextField>
                     <TextField name="password" variant="outlined" label="Password" fullWidth value={postData.password} 
                    onChange={(e) => setPostData({...postData, password: e.target.value})}></TextField>
                     <TextField name="email" variant="outlined" label="email" fullWidth value={postData.email} 
                    onChange={(e) => setPostData({...postData, email: e.target.value})}></TextField>
                     <TextField name="address" variant="outlined" label="Address" fullWidth value={postData.address} 
                    onChange={(e) => setPostData({...postData, address: e.target.value})}></TextField>
                     <TextField name="contactNumber" variant="outlined" label="Contact Number" fullWidth value={postData.contactNumber} 
                    onChange={(e) => setPostData({...postData, contactNumber: e.target.value})}></TextField>
                     <TextField name="userType" variant="outlined" label="Type of User" fullWidth value={postData.userType} 
                    onChange={(e) => setPostData({...postData, userType: e.target.value})}></TextField>
                    <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit">Submit</Button>
                    <Button className={classes.buttonSubmit} variant="contained" color="secondary" size="large" onClick={clear} >Clear</Button>
                </form>
            </Paper>
            
            
        
        )
}

export default Register;