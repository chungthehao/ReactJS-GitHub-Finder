import React from 'react';
import PropTypes from 'prop-types'; // Kiểu của props đc truyền vào, required hay ko, ...

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
    </nav>
  );
};

// Nếu bên ngoài ko truyền props vào thì mặc định dùng ở đây.
Navbar.defaultProps = {
  title: 'GitHub Finder',
  icon: 'fab fa-github'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
