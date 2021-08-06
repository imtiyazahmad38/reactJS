import React,{useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Carousel from './carousel';



const Myaccount=()=>{
    let history = useHistory();
    useEffect(() => {
        const userId = localStorage.getItem('userId');
        if(!userId) {
          history.push('/login');
        }
      }
    )
    const logout=() =>{
        localStorage.clear();
        history.push("/")
    }
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');

    const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
        flexGrow: 1,
        },
        menuButton: {
        marginRight: theme.spacing(2),
        },
        title: {
        flexGrow: 1,
        },
    }),
    );  
    const classes = useStyles();  
    return(
        <React.Fragment>
        <div className={classes.root}>
        <AppBar position="static">
        <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
        Welcome {firstName} {lastName}
        </Typography>
        <Button color="inherit" onClick={e=>logout()}>Logout</Button>
        </Toolbar>
        </AppBar>
        </div>
        <div><Carousel /></div>
        </React.Fragment>
    )
}

export default Myaccount;