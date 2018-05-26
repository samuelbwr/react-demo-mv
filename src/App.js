import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div>
        <MediaQuery minWidth={1224}>

          <Header/>
        
        </MediaQuery>

        <MediaQuery maxWidth={1224}>
        
          <div>Displaying for Small screens</div>
        
        </MediaQuery>
      </div>
    );
  }
}

export default App;
