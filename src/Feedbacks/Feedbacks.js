import React from 'react';
import style from './Feedbacks.css';
import feedbacks from './feedbacks.json';
import Header from './Header';
import Items from './Items';
import classnames from 'classnames';

class Feedbacks extends React.Component {
  render() {
    return (
      <div className={classnames(style.container, this.props.className)}>
        <Header/>
        <Items items={feedbacks}/>
      </div>
    );
  }
}

export default Feedbacks;
