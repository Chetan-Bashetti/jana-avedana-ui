import React from 'react';
import { AppContext } from 'components';
import RefreshIcon from '@mui/icons-material/Refresh';

import './Status.css';

const Status = () => {
	const { foodItemsList, totalCharge, orderStatus, checkTableAvailability } =
		React.useContext(AppContext);

	const cartCount = foodItemsList
		?.filter((curr) => curr.isSelected)
		.reduce((prev, curr) => Number(prev) + Number(curr.count), 0);

	return (
		<div className='status-wrapper'>
			<div className='status-summary'>
				<div className='order-summary-title'>Order summary</div>
				{foodItemsList
					?.filter((curr) => curr.isSelected)
					.map((eachItem, id) => (
						<div className='each-item-summary' key={eachItem.item_id}>
							<div className='each-item-title'>
								{id + 1}) {eachItem.item_name} -
							</div>

							<div className='order-summary-text'>
								₹ {eachItem.price}.00 * {eachItem.count} ={' '}
								<strong>
									₹ {parseInt(eachItem.price) * parseInt(eachItem.count)}
								</strong>
							</div>
						</div>
					))}
			</div>
			<div className={`status-text ${orderStatus}`}>{orderStatus}</div>
			<div className='pending-text'></div>
			<div className='status-cost-summary'>
				<div>
					<div>
						Total Items -{' '}
						<span className='order-summary-text'>{cartCount}</span>
					</div>
					<div>
						Total charges -{' '}
						<span className='order-summary-text'>₹ {totalCharge}</span>
					</div>
				</div>
				<div className='refresh-icon' onClick={() => checkTableAvailability()}>
					<RefreshIcon />
				</div>
			</div>
		</div>
	);
};

export default Status;
