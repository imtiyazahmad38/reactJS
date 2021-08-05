import React,{useState,useEffect} from 'react';
import {useRegForm} from './customHooks';
import {regvalidate} from './validate';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {useHistory} from 'react-router-dom';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Registration = () => {
  let history = useHistory();
    useEffect(() => {
        const userId = localStorage.getItem('userId');
        if(userId) {
          history.push('/Myaccount');
        }
      }
    )
    const Home=() =>{
      history.push("/")
    }
  const classes = useStyles();
	const {inputs, handleInputChange, HandleSubmit ,errors} = useRegForm({firstName:'',lastName:'',email:'',phoneNumber:'',password:'',cpassword:''},regvalidate);
	return (
    <div className={classes.root}>
            <AppBar position="static">
        <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
        Please register Yourself Here
        </Typography>
        <Button color="inherit" onClick={e=>Home()}>Home</Button>
        </Toolbar>
        </AppBar>
        <Container maxWidth="sm">
        
        
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField type="text" name="firstName" required error={errors.firstName} helperText={errors.firstName?errors.firstName:""} label="First Name" value={inputs.firstName}variant="outlined" onChange={handleInputChange} />
        </Grid>
        <Grid item xs={6}>
          <TextField type="text" name="lastName" required error={errors.lastName} helperText={errors.lastName?errors.lastName:""} label="Last Name" value={inputs.lastName}variant="outlined" onChange={handleInputChange} />
        </Grid>
        <Grid item xs={6}>
          <TextField type="email" name="email" required error={errors.email} helperText={errors.email?errors.email:""} label="Email" value={inputs.email}variant="outlined" onChange={handleInputChange} />
        </Grid>
        <Grid item xs={6}>	       
          <TextField id="outlined-basic" type="text" name="phoneNumber" required error={errors.phoneNumber} helperText={errors.phoneNumber?errors.phoneNumber:""} label="Phone Number" value={inputs.phoneNumber} variant="outlined" onChange={handleInputChange} />
        </Grid>
	      <Grid item xs={6}>
        <TextField error={errors.password} required name="password" type="password" helperText={errors.password?errors.password:""} value={inputs.password} label="Password" variant="outlined" onChange={handleInputChange} />
        </Grid>
        <Grid item xs={6}>
        <TextField error={errors.cpassword} required name="cpassword" type="password" helperText={errors.cpassword?errors.cpassword:""} value={inputs.cpassword} label="Confirm Password" variant="outlined" onChange={handleInputChange} />
        </Grid>
        <Grid item xs={12} className="loginGrid">
        <Button  variant="contained" color="primary" onClick={HandleSubmit}>
        Login
      </Button>
        </Grid>
        </Grid>
	   
      
      </Container>
    </div>
	)
}

export default Registration;