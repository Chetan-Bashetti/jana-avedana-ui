import React from 'react';
import NavBar from 'components/Navbar/NavBar';
import MuiModal from 'components/Modal/MuiModal';
import Button from 'components/Button/Button';

import './banner.css';
import QueryForm from 'components/QueryForm/QueryForm';

const BannerDescription = ({ name = '', handleOpen, frame }) => {
	return (
		<>
			<div
				className={name}
				style={{ background: frame === 1 ? 'var(--primary-bg)' : '' }}
			>
				<div
					className='product-name'
					style={{ color: frame === 1 ? 'white' : '' }}
				>
					Jana Avedana
				</div>
				<div
					className='product-desc'
					style={{ color: frame === 1 ? 'white' : '' }}
				>
					We are here to help you resolve your queries related to government
					infrastructre, schemes, benifits, and other aspects
				</div>
				<div style={{ marginTop: '3em' }}>
					<Button title='Make appointment' onClick={handleOpen} />
				</div>
			</div>
		</>
	);
};

const Banner = ({ setSnackBar }) => {
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => setOpen(true);

	const handleClose = () => setOpen(false);

	return (
		<div className='banner-wrapper' id='home'>
			<NavBar />
			<div className='banner-content'>
				<div className={'banner-image'}>
					<BannerDescription
						name={'banner-product-description-mobile'}
						handleOpen={handleOpen}
					/>
				</div>
				<BannerDescription
					name={'banner-product-description'}
					handleOpen={handleOpen}
				/>
			</div>

			<MuiModal
				children={<QueryForm />}
				open={open}
				handleClose={handleClose}
			/>
		</div>
	);
};

export default Banner;
