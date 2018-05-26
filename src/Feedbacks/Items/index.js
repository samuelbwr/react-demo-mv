import React from 'react';
import style from './Items.css';
import Item from './Item';

export default (props) => (
  <div className={style.container}>
    {props.items.map( (item, index) => (<Item key={index} {...item}/>))}
  </div>
);
