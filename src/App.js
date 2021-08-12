import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./home/home";
import Login from "./MyAccount/login";
import Myaccount from "./MyAccount/account";
import Registration from "./MyAccount/registration";
import Header from "./home/header";
import Footer from "./home/footer";

function App() {
  return (
    <div>
      <Router>
        <Header title="My Digital Store"/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/myaccount" component={Myaccount} />
          <Route exact path="/registration" component={Registration} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
