/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

// STYLES
import './index.css';
import Loader from 'components/Loader/Loader';
import Banner from './banner/banner';
import Search from './search/search';

export const AppContext = React.createContext();

const Wrapper = () => {
	const [isLoading, setIsLoading] = React.useState(false);

	return (
		<AppContext.Provider
			value={{
				setIsLoading
			}}
		>
			{isLoading && (
				<div className='loader-wrapper'>
					<Loader />
				</div>
			)}
			<div className='main-wrapper'>
				<Banner />
				<Search />
			</div>
		</AppContext.Provider>
	);
};

export default Wrapper;
