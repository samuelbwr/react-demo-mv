import React from 'react';
import style from './Avatar.css';

export default (props) => (
	<img src={props.src} className={style.avatar} alt="Avatar"/>
);