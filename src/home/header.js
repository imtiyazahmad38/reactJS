import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = (props) => {
  let history = useHistory();
  const userId = localStorage.getItem("userId");
  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");
  const clicMe = () => {
    history.push("/login");
  };
  const registration = () => {
    history.push("/registration");
  };
  const logout = () => {
    localStorage.clear();
    history.push("/");
  };

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
    })
  );

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          <Link className="navbar-brand" to="/">{props.title}</Link>
          </Typography>
          { userId? <Typography variant="h6" className={classes.title}>Welcome {firstName} {lastName} <Button color="inherit" onClick={e=>logout()}>Logout</Button></Typography>: <><Button color="inherit" onClick={(e) => clicMe()}>
            Login
          </Button>
          <Button color="inherit" onClick={(e) => registration()}>
            Registration
          </Button></> }
          
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Header;
