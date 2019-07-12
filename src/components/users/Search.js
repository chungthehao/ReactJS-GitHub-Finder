import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    text: ''
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired
  };

  // Phải dùng arrow func để xài 'this' bên trong
  onChange = e => {
    //this.setState({ text: e.target.value });
    this.setState({ [e.target.name]: e.target.value }); // Cho bat ky ten field nao!
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.searchUsers(this.state.text); // Pass data to App
    this.setState({ text: '' }); // clear the form input
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={this.state.text}
          onChange={this.onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
    );
  }
}

export default Search;
