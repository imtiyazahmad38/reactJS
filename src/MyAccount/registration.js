import React, { useEffect } from "react";
import { useRegForm } from "./customHooks";
import { regvalidate } from "./validate";
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

const Registration = () => {
  let history = useHistory();
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      history.push("/Myaccount");
    }
  });

  const classes = useStyles();
  const { inputs, handleInputChange, HandleSubmit, errors } = useRegForm(
    {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      cpassword: "",
    },
    regvalidate
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
              type="text"
              name="firstName"
              required
              error={errors.firstName}
              helperText={errors.firstName ? errors.firstName : ""}
              label="First Name"
              value={inputs.firstName}
              variant="outlined"
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              name="lastName"
              required
              error={errors.lastName}
              helperText={errors.lastName ? errors.lastName : ""}
              label="Last Name"
              value={inputs.lastName}
              variant="outlined"
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="email"
              name="email"
              required
              error={errors.email}
              helperText={errors.email ? errors.email : ""}
              label="Email"
              value={inputs.email}
              variant="outlined"
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              type="text"
              name="phoneNumber"
              required
              error={errors.phoneNumber}
              helperText={errors.phoneNumber ? errors.phoneNumber : ""}
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
              helperText={errors.password ? errors.password : ""}
              value={inputs.password}
              label="Password"
              variant="outlined"
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              error={errors.cpassword}
              required
              name="cpassword"
              type="password"
              helperText={errors.cpassword ? errors.cpassword : ""}
              value={inputs.cpassword}
              label="Confirm Password"
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

export default Registration;
