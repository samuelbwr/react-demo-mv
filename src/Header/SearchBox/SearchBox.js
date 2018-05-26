import React from 'react';
import './SearchBox.css';
import FaSearch from 'react-icons/lib/fa/search';

class SearchBox extends React.Component {
  render() {
    return (
      <div className="container">
        <input className="input-search" type="text"/>
        <FaSearch/>
      </div>
    );
  }
}

export default SearchBox;
