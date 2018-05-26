import React from 'react';
import style from './Header.css';
import Button from '../../components/Button';
class Header extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <Button className={style.addPleaseButton}>Add a Please</Button>
        <span className={style.sortBy}>Sort by</span>
      </div>
    );
  }
}

export default Header;
