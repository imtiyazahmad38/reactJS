import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home/home';
import Login from './MyAccount/login';
import createBrowserHistory from 'history/createBrowserHistory';
import Myaccount from './MyAccount/account';

const history = createBrowserHistory();

function App() {

  return (
    <div >
            <Router history={history}>
                <div>

                    {/* <HeaderNavContainer /> */}

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/myaccount" component={Myaccount} />
                        {/* <Route path="/courses" component={CourseListContainer} />
                        <Route exact path="/course" component={AddOrEditCourseContainer} />
                        <Route path="/course/:id" component={AddOrEditCourseContainer} />
                        <Route path="/about" component={About} />
                        <Route component={PageNotFound} /> */}
                    </Switch>

                </div>

            </Router>
        </div>
  );
}

export default App;
