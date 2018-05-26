import React from 'react';
import style from './Item.css';

const getTypeColor = (type) => {
	if(type === 'Please')
		return style.please;
	return style.thankYouFor;
}

export default (props) => (
	<div className={style.container}>
		<span className={style.votes}>
			<i>{props.votes}</i>
			VOTES
		</span>
		<p className={style.description}>
			<b className={getTypeColor(props.type)}>{props.type} </b>
			{props.description}
		</p>
	</div>
);