import React, { useContext } from 'react';
// import PropTypes from 'prop-types';

import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

import GithubContext from '../../context/github/githubContext';

const Users = props => {
  // Initialize GithubContext
  const githubContext = useContext(GithubContext);
  const { users, loading } = githubContext;

  if (loading) {
    return <Spinner />;
  }
  return (
    <div style={userStyle}>
      {users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

// - Ko còn truyền users, loading vô component này qua props nữa!
// Users.propTypes = {
//   users: PropTypes.array.isRequired,
//   loading: PropTypes.bool.isRequired
// };

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default Users;
