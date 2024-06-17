import React from 'react';
import { Button } from '@mui/material';

const MuiButton = ({ title = '', onClick, type, disabled, style }) => {
	return (
		<Button
			variant='contained'
			style={{
				fontFamily: "'Montserrat', sans-serif",
				background: '#21b573',
				fontSize: '0.8em',
				fontWeight: 600,
				padding: '1em 4em',
				textTransform: 'capitalize',
				borderRadius: '0.7em',
				boxShadow: '0px',
				...style
			}}
			onClick={onClick}
			type={type}
			disabled={disabled}
		>
			{title}
		</Button>
	);
};

export default MuiButton;
