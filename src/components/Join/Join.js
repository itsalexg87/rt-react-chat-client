import React, { useState } from 'react';

// dependencies
import { Link } from 'react-router-dom';

// style
import './Join.css';

const Join = () => {
	const [name, setName] = useState('');
	const [room, setRoom] = useState('');

	return (
		<>
			<div className='mainContainer'>
				<div className='innerContainer'>
					<h1 className='heading'>Join Chat</h1>
					<div>
						<input placeholder='Name' className='input' type='text' onChange={e => setName(e.target.value)} />
					</div>
					<div>
						<input placeholder='Room' className='input mt-20' type='text' onChange={e => setRoom(e.target.value)} />
					</div>
					<Link to={`/chat?name=${name}&room=${room}`}>
						<button className='button mt-30' type='submit' onClick={e => (!name || !room ? e.preventDefault() : null)}>
							Sign in
						</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Join;
