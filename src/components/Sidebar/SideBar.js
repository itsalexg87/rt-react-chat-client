import React from 'react';

// style
import './SideBar.css';
import Brightness1Icon from '@material-ui/icons/Brightness1';

const SideBar = ({ users }) => (
	<div className='textContainer'>
		<div className='topContainer'>
			<h3>React Chat App</h3>
		</div>
		<div className='middleContainer'>
			<p>React, Express, Node and Socket.IO </p>
		</div>
		<hr style={{ width: '80%' }} />
		{users ? (
			<div>
				<h3>Currently online online:</h3>
				<div className='activeContainer'>
					<h2>
						{users.map(({ name }) => (
							<div key={name} className='activeItem'>
								{name}
								<Brightness1Icon style={{ fontSize: 'small', color: '#00FF00', marginRight: '1rem' }} />
							</div>
						))}
					</h2>
				</div>
			</div>
		) : null}
	</div>
);

export default SideBar;
