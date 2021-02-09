import React from 'react';

// dependencies
import ScrollToBottom from 'react-scroll-to-bottom';

// style
import './Messages.css';

// components
import Message from './Message/Message';

const Messages = ({ messages, name }) => {
	return (
		<ScrollToBottom className='messages'>
			{messages.map((m, i) => (
				<div key={i}>
					<Message message={m} name={name} />
				</div>
			))}
		</ScrollToBottom>
	);
};

export default Messages;
