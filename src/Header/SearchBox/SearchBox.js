import React from 'react';
import style from './SearchBox.css';
import FaSearch from 'react-icons/lib/fa/search';

class SearchBox extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <input placeholder="Search" className="input-search" type="text"/>
        <FaSearch color="#bbb"/>
      </div>
    );
  }
}

export default SearchBox;
