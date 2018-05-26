import React from 'react';
import style from './Interaction.css';
import Avatar from '../../components/Avatar';
import moment from 'moment';
import TextTruncate from 'react-text-truncate';
import classnames from 'classnames';
import IoIosEmailOutline from 'react-icons/lib/io/ios-email-outline';

const renderLikes = (likes) =>{
	if(likes > 0)
		return <span className={style.like}>{likes} ❤</span>
	else return '';
}

const renderReadMore = () => (
	<div className={style.centerText}>
		<button className={style.readMore}>More ...</button>
	</div>);

const renderSendPrivateMessage = (author, user) => {
	if(author !== user)
		return (
			<span><IoIosEmailOutline className={style.emailIcon}/> <u>Send private message</u></span>
		);
	return '';
}

export default (props) => (
	<div className={style.container}>
		<Avatar src={props.avatar}/>
		<div className={style.textContainer}>
			<div className={style.header}>
				<b>{props.author}</b>
				<span className={style.details}> 
					{renderLikes(props.likes)}
					<span className={style.time}>{moment(props.time).fromNow()}</span>
				</span>
			</div>
			<TextTruncate 
				className={style.text} 
				text={props.text}
				line={4}
	    		truncateText="…"
	    		textTruncateChild={renderReadMore()}/>

	    	<div className={classnames(style.centerText, style.sendPrivateMessage)}>
	    		{renderSendPrivateMessage(props.author, props.user)}
	    	</div>
		</div>

	</div>
);
