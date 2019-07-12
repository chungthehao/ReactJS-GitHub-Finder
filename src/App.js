import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  /*async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/users?client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: res.data, loading: false });
  }*/

  // Search GitHub users
  searchUsers = async searchText => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/search/users?client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${
        process.env.REACT_APP_GITHUB_CLIENT_SECRET
      }&q=${searchText}`
    );

    this.setState({ users: res.data.items, loading: false });
  };

  // Clear users from state
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  render() {
    const { users, loading } = this.state;

    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClearBtn={users.length ? true : false}
          />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className='App'>
//       <h1>Hi Everyone!</h1>
//     </div>
//   );
// }

export default App;
