import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ setAlert, searchUsers, showClearBtn, clearUsers }) => {
  // # Cách cũ
  // state = {
  //   text: ''
  // };
  // # Cách mới: text là tên state, setText (set+[state's name]) là công cụ để set cái state đó
  const [text, setText] = useState(''); // Default value là ''

  // Phải dùng arrow func để xài 'this' bên trong
  const onChange = e => {
    setText(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter something to search!', 'light');
    } else {
      searchUsers(text); // Pass data to App
      setText(''); // clear the form input
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>

      {showClearBtn && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClearBtn: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
};

export default Search;
