import React from 'react';

import MuiButton from 'components/Button/Button';
import { checkIsNumber } from 'module/isNumber';
import axios from 'axios';
import { AppContext } from 'container';

import './search.css';

const SearhList = ({ query }) => {
	return (
		<div>
			<div className='each-query'>
				<div className='eb-infobox-dvwldye eb-infobox-wrapper'>
					<div className='infobox-wrapper-inner'>
						<div className='contents-wrapper'>
							<div className='card-header'>
								<div className='query-title'>{query.user_name}</div>
								<div className='query-title'>M: {query.mobile_num}</div>
							</div>
							<div className='query-detail'>
								Date Created - {new Date(query.createdAt).toLocaleString()}
							</div>
							<div className='query-detail'>Pincode - {query.pincode}</div>

							<p className='query-description'>{query.query_desc}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const Search = () => {
	const { setIsLoading } = React.useContext(AppContext);

	const [phone, setPhone] = React.useState('');
	const [adharNum, setAdharNum] = React.useState('');
	const [queries, setQueries] = React.useState([]);

	const handleFieldOnchange = (e, setter) => {
		const isNumber = checkIsNumber(e.target.value, setter);
		if (isNumber) setter(e.target.value);
	};

	const handleSearcheQuery = async () => {
		if (phone === '' || phone.length !== 10) {
			alert('Please enter 10 digit phone number');
			return;
		}
		if (adharNum === '' || adharNum.length !== 4) {
			alert('Please enter 12 digit Adhar card number');
			return;
		}

		try {
			setIsLoading(true);
			let res = await axios({
				method: 'post',
				url: `${process.env.REACT_APP_API_URL}querys/list/unique`,
				data: {
					mobile_num: phone,
					adhar_num: adharNum
				}
			});
			setQueries(res.data.data);
			setIsLoading(false);
		} catch (err) {
			console.log(err);
			setIsLoading(false);
		}
	};

	console.log('queries', queries);

	return (
		<div className='search-wrapper'>
			<div className='wrapper-title'>Search your query/queries</div>
			<div className='search-info-text'>
				Enter the details below and click on Search to search your Queries,
				Concerns{' '}
			</div>
			<div className='search-content'>
				<div className='serch-fields'>
					<div className='field-container'>
						<label>Phone number</label>
						<input
							className='input-field'
							placeholder='Enter phone number'
							value={phone}
							onChange={(e) => handleFieldOnchange(e, setPhone)}
							maxLength={10}
						/>
					</div>
					<div className='field-container'>
						<label>Last 4 digits of adhar card number</label>
						<input
							className='input-field'
							placeholder='Enter last 4 digits of adhar card number'
							maxLength={4}
							value={adharNum}
							onChange={(e) => handleFieldOnchange(e, setAdharNum)}
						/>
					</div>
				</div>
				<div className='search-action'>
					<MuiButton title='Search' onClick={handleSearcheQuery} />
				</div>
			</div>
			{queries.length ? (
				<div>
					<div className='wrapper-title'>Your queries</div>
					<div className='our-services'>
						{queries.map((eachQuery) => (
							<SearhList query={eachQuery} key={eachQuery._id} />
						))}
					</div>
				</div>
			) : (
				''
			)}
		</div>
	);
};

export default Search;
