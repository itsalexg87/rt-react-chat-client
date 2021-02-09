import React from 'react';

// style
import './InfoBar.css';

// icons
import CloseIcon from '@material-ui/icons/Close';
import Brightness1Icon from '@material-ui/icons/Brightness1';

const InfoBar = ({ room }) => {
	return (
		<div className='infoBar'>
			<div className='leftInnerContainer'>
				<Brightness1Icon style={{ fontSize: 'small', color: '#00FF00', marginRight: '1rem' }} />
				<h3>Current room: {room}</h3>
			</div>
			<div className='rightInnerContainer'>
				<a href='/'>
					<CloseIcon style={{ color: '#fff' }} />
				</a>
			</div>
		</div>
	);
};

export default InfoBar;
