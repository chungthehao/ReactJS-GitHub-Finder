import React, { Component } from 'react';
import PropTypes from 'prop-types'; // Kiểu của props đc truyền vào, required hay ko, ...

export class Navbar extends Component {
  // Nếu bên ngoài ko truyền props vào thì mặc định dùng ở đây.
  static defaultProps = {
    title: 'GitHub Finder',
    icon: 'fab fa-github'
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };

  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={this.props.icon} /> {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
