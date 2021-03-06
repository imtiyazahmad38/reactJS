import React, { useEffect } from "react";
import { useForm } from "./customHooks";
import { validate } from "./validate";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Login = () => {
  let history = useHistory();
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      history.push("/Myaccount");
    }
  },[]);
  const classes = useStyles();
  const { inputs, handleInputChange, HandleSubmit, errors } = useForm(
    { phoneNumber: "", password: "" },
    validate
  );
  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto"
}
  return (
    <div className={classes.root}>
      <Container maxWidth="sm" style={myStyle}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              type="text"
              name="phoneNumber"
              required
              error={errors.phoneNumber}
              helperText={
                errors.phoneNumber ? "Please Enter Valid PhoneNumber" : ""
              }
              label="Phone Number"
              value={inputs.phoneNumber}
              variant="outlined"
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              error={errors.password}
              required
              name="password"
              type="password"
              helperText={errors.password ? "Please Enter Valid Password" : ""}
              value={inputs.password}
              label="Password"
              variant="outlined"
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} className="loginGrid">
            <Button variant="contained" color="primary" onClick={HandleSubmit}>
              Login
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
