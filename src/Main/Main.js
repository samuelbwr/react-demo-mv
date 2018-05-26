import React from 'react';
import style from './Main.css';
import classnames from 'classnames';

class Main extends React.Component {
  render() {
    return (
      <div className={classnames(style.container, this.props.className)}>
        <img src="http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/4w/46/p04w46sp.jpg"/>
      </div>
    );
  }
}

export default Main;
