import React from 'react';
import style from './Header.css';
import SearchBox from './SearchBox';

class Header extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <ul className={style.menu}>
          <li>Home</li>
          <li>Messaging</li>
          <li>Feedback</li>
          <li>Evolution</li>
          <li>Data</li>
          <li><SearchBox/></li>
        </ul>
        <div className={style.dropdownUser}>
          Chevy's
        </div>  
      </div>
    );
  }
}

export default Header;
