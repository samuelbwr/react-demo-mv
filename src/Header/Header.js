import React from 'react';
import style from './Header.css';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import SearchBox from './SearchBox';

class Header extends React.Component {
  render() {
    return (
      <div className="container">
        <ul className="menu">
          <li>Home</li>
          <li>Messaging</li>
          <li>Feedback</li>
          <li>Evolution</li>
          <li>Data</li>
          <li><SearchBox/></li>
        </ul>
        <div className="dropdown-user">
          <Dropdown options={["Chevy's", "Amazon", "Uber"]} value="Chevy's"
            controlClassName='dropdown-user-menu'
            arrowClassName='dropdown-user-menu-arrow' />
        </div>  
      </div>
    );
  }
}

export default Header;
