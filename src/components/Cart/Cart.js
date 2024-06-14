import React from 'react';
import { AppContext } from 'components';
import Item from 'components/Item/Item';

import './Cart.css';

const Cart = () => {
	const { foodItemsList, handleFoodItemSelection, totalCharge, setCartView } =
		React.useContext(AppContext);

	return (
		<div className='cart-wrapper'>
			{totalCharge > 0 ? (
				<>
					{foodItemsList
						?.filter((curr) => curr.isSelected)
						.map((eachFooItem) => (
							<Item
								item={eachFooItem}
								key={eachFooItem.item_id}
								handleAddToCart={handleFoodItemSelection}
							/>
						))}
				</>
			) : (
				<div className='cart-wrapper center'>
					<div className='go-back' onClick={() => setCartView(false)}>
						Go back
					</div>
				</div>
			)}
		</div>
	);
};

export default Cart;
