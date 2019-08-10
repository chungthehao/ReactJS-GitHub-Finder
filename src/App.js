import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';

import GithubState from './context/github/GithubState';

import './App.css';

const App = () => {
  /*state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null // Khi đâu đó gọi setAlert sẽ manipulate cái này.
  };*/

  // # Đã chuyển qua 'github context' để quản lý state (khỏi cần pass props nữa)
  // const [users, setUsers] = useState([]);
  // const [user, setUser] = useState({});
  // const [repos, setRepos] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  // Set Alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type });

    // Sau 1 khoảng thời gian thì reset this.state.alert để remove cái alert đã hiện, chứ k nó ở đó quài.
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  };

  return (
    <GithubState>
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path='/'
                render={props => (
                  <Fragment>
                    <Search setAlert={showAlert} />
                    <Users />
                  </Fragment>
                )}
              />

              <Route exact path='/about' component={About} />

              <Route
                exact
                path='/user/:login'
                render={props => <User {...props} />}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

// function App() {
//   return (
//     <div className='App'>
//       <h1>Hi Everyone!</h1>
//     </div>
//   );
// }

export default App;
