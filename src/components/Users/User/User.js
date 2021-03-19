import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import person from '../../../images/person-icon.png';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../../actions/users';

import useStyles from './styles';


const User = ({user, setCurrentId}) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    let history = useHistory();

  function handleClick() {
      setCurrentId(user._id);
    history.push("/register");
  }
    
    return(
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={person} alt="userImage" title={user.userType} />
            <div className={classes.overlay}>
                <Typography variant="h6">{user.name}</Typography>
                <Typography variant="body2">{moment(user.createdAt).fromNow()}</Typography>
            
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size= "small"  
                onClick={handleClick} >
                    <MoreHorizIcon fontSize="default"/>
                </Button>
            </div>  
            <div className={classes.details}>
            <Typography variant="body2" color="black">User Name &nbsp;: &nbsp;{user.userName}</Typography>
            <Typography variant="body2" color="black">User Type &nbsp;&nbsp;&nbsp;: &nbsp;{user.userType}</Typography>
            <Typography variant="body2" color="black">email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;{user.email}</Typography>
            <Typography variant="body2" color="black">address &nbsp;: &nbsp;{user.address}</Typography>
            <Typography variant="body2" color="black">Contact Num &nbsp;: &nbsp;{user.contactNumber}</Typography>

            </div>  
            <CardActions>
                <Button size="small" color="primary" onClick={ () => dispatch(deleteUser(user._id)) }>
                <DeleteIcon fontSize="small" />
                Delete
                </Button>    
            </CardActions>        

        </Card>
    );
}
export default User;