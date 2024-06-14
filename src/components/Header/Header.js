import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CancelIcon from '@mui/icons-material/Cancel';

import { AppContext } from 'components';

import './Header.css';

const Header = () => {
	const { foodItemsList, cartView, setCartView, isOccupied } =
		React.useContext(AppContext);
	const cartCount = foodItemsList
		?.filter((curr) => curr.isSelected)
		.reduce((prev, curr) => Number(prev) + Number(curr.count), 0);

	return (
		<div className='header-wrapper'>
			<div className='header-title'>Suburb.cafe</div>
			{!isOccupied && (
				<>
					{!cartView ? (
						<div className='cart-icon'>
							{cartCount > 0 ? (
								<div className='notification'>{cartCount}</div>
							) : (
								''
							)}
							<ShoppingCartIcon onClick={() => setCartView(!cartView)} />
						</div>
					) : (
						<div className='cart-icon'>
							<CancelIcon onClick={() => setCartView(!cartView)} />
						</div>
					)}
				</>
			)}
		</div>
	);
};

export default Header;
