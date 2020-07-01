import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            {/* <a href="/">Home</a> */}
          </li>
          <li>
            <Link to="/about-me">About Me</Link>
            {/* <a href="/about-me">About Me</a> */}
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header;