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

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== 'production') {
  console.log(process.env.NODE_ENV);
  // Xài info ở file .env.local
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  // Xài info đc setup trên Netlify
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = props => {
  const initialState = {
    user: {},
    users: [],
    repos: [],
    loading: false
  };

  // In order to dispatch a type back to our reducer
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search GitHub users
  const searchUsers = async searchText => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/search/users?client_id=${githubClientId}&client_secret=${githubClientSecret}&q=${searchText}`
    );

    //setUsers(res.data.items);
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items
    });
    // Our reducer is gonna be reponsible of putting this into our state & sending it down to any components that need it
  };

  // Get single GitHub user
  const getUser = async username => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );

    dispatch({
      type: GET_USER,
      payload: res.data
    });
  };

  // Get user repos
  const getUserRepos = async username => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );

    dispatch({
      type: GET_REPOS,
      payload: res.data
    });
  };

  // Clear users from state
  const clearUsers = () =>
    dispatch({
      type: CLEAR_USERS
    });

  // Set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  // Wrap our entire app with the provider, rồi truyền state dưới dạng prop value vô
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
