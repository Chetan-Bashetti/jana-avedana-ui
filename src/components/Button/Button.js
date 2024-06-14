import React from 'react';
import { Button } from '@mui/material';

const MuiButton = ({ title = '', onClick, type, disabled }) => {
	return (
		<Button
			variant='contained'
			style={{
				fontFamily: "'Montserrat', sans-serif",
				background: `var(--primary-bg)`,
				fontSize: '0.8em',
				fontWeight: 600,
				padding: '1em 4em',
				textTransform: 'capitalize',
				borderRadius: '0.7em',
				boxShadow: '1px 10px 20px #1f5ae37d',
				border: '1px solid white'
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
