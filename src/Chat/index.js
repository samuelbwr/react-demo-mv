import React from 'react';
import style from './Chat.css';
import conversation from './conversation.json';
import Interaction from './Interaction';
import classnames from 'classnames';
import FaCamera from 'react-icons/lib/fa/camera';

export default (props) => (
	<div className={classnames(style.container, props.className)}>
		{conversation.map((interaction, i) => <Interaction key={i} user={props.user} {...interaction}/>)}
		<div className={style.addInteractionContainer}>
			<FaCamera className={style.cameraIcon}/><input type="text"/>
		</div>
	</div>
);