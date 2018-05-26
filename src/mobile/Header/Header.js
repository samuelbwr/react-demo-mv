import React from 'react';
import './Header.css';


class Header extends React.Component {
  render() {
    return (
      <div>
        <MediaQuery minWidth={1224}>

          <div>Displaying for Big screens</div>
        
        </MediaQuery>

        <MediaQuery maxWidth={1224}>
        
          <div>Displaying for Small screens</div>
        
        </MediaQuery>
      </div>
    );
  }
}

export default Header;
