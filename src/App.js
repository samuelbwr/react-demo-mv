import React, { Component } from 'react';
import style from './App.css';
import MediaQuery from 'react-responsive';
import Header from './Header';
import Feedbacks from './Feedbacks';
import Main from './Main';
import Chat from './Chat';

class App extends Component {
  render() {
    return (
      <div>
        <MediaQuery minWidth={1224}>

          <Header/>

          <div className={style.contentContainer}>
            <Feedbacks className={style.contentColumn}/>
            <Main className={style.contentColumn}/>
            <Chat user="Chevy's" className={style.contentColumn}/>
          </div>
        
        </MediaQuery>

        <MediaQuery maxWidth={1224}>
        
          <div>Displaying for Small screens</div>
        
        </MediaQuery>
      </div>
    );
  }
}

export default App;
