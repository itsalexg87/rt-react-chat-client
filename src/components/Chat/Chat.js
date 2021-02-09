import React, { useState, useEffect } from 'react';

// dependencies
import queryString from 'query-string';
import io from 'socket.io-client';

// style
import './Chat.css';

// components
import InfoBar from '../Infobar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import SideBar from '../Sidebar/SideBar';

// var
let socket;

const Chat = ({ location }) => {
	const [name, setName] = useState('');
	const [room, setRoom] = useState('');
	const [users, setUsers] = useState('');
	const [message, setMessage] = useState('');
	const [messages, setMessages] = useState([]);

	const ENDPOINT = 'https://react-rt-chat-app.herokuapp.com/';

	// get user & room
	useEffect(() => {
		const { name, room } = queryString.parse(location.search);

		socket = io(ENDPOINT, {
			withCredentials: true,
			extraHeaders: {
				'my-custom-header': 'abcd',
			},
		});

		setName(name);
		setRoom(room);

		socket.emit('join', { name, room }, error => {
			if (error) {
				alert(error);
			}
		});
	}, [ENDPOINT, location.search]);

	// handle messages
	useEffect(() => {
		socket.on('message', message => {
			setMessages(messages => [...messages, message]);
		});

		socket.on('roomData', ({ users }) => {
			setUsers(users);
		});
	}, []);

	// send user messages
	const sendMessage = e => {
		e.preventDefault();

		if (message) {
			socket.emit('sendMessage', message, () => {
				setMessage('');
			});
		}
	};

	return (
		<div className='mainContainer'>
			<div className='chatContainer'>
				<InfoBar room={room} />
				<Messages messages={messages} name={name} />
				<Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
			</div>
			<SideBar users={users} />
		</div>
	);
};

export default Chat;
