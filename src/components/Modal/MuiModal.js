import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	bgcolor: 'background.paper',
	p: 2,
	width: '75%',
	outline: 'none',
	fontFamily: "'Montserrat', sans-serif",
	maxHeight: '80%',
	overflow: 'scroll',
	maxWidth: '950px'
};

const MuiModal = ({ children, open, handleClose }) => {
	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={style}>{children}</Box>
			</Modal>
		</div>
	);
};
export default MuiModal;
