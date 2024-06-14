/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import axios from 'axios';

// STYLES
import './index.css';
import Loader from 'components/Loader/Loader';
import Banner from './banner/banner';

export const AppContext = React.createContext();

const Wrapper = () => {
	const [table] = React.useState(0);
	const [isLoading, setIsLoading] = React.useState(false);

	return (
		<AppContext.Provider
			value={{
				table
			}}
		>
			{!isLoading ? (
				<>
					<div>
						<Banner />
					</div>
				</>
			) : (
				<div className='loader-wrapper'>
					<Loader />
				</div>
			)}
		</AppContext.Provider>
	);
};

export default Wrapper;
