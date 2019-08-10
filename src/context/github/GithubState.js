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

  // Search GitHub users
  const searchUsers = async searchText => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/search/users?client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${
        process.env.REACT_APP_GITHUB_CLIENT_SECRET
      }&q=${searchText}`
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
      `https://api.github.com/users/${username}?client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    dispatch({
      type: GET_USER,
      payload: res.data
    });
  };

  // Get repos

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
        getUser
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
