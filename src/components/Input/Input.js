import React from 'react';

// style
import './Input.css';

const Input = ({ message, setMessage, sendMessage }) => {
	return (
		<form className='form'>
			<input
				className='input'
				placeholder='Type a message ...'
				value={message}
				onChange={e => setMessage(e.target.value)}
				onKeyPress={e => (e.key === 'Enter' ? sendMessage(e) : null)}
			/>
			<button type='submit' className='sendButton' onClick={e => sendMessage(e)}>
				Send
			</button>
		</form>
	);
};

export default Input;
