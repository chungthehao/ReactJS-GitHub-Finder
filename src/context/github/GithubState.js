/**
 * File này chứa states và actions
 */

import React, { useReducer } from 'react';
import axios from 'axios';

import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS
} from '../types';

const GithubState = props => {
  const initialState = {
    user: {},
    users: [],
    repos: [],
    loading: false
  };

  // In order to dispatch a type back to our reducer
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search users

  // Get user

  // Get repos

  // clear users

  // Set loading

  // Wrap our entire app with the provider, rồi truyền state dưới dạng prop value vô
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
