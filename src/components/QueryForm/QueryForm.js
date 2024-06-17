import React from 'react';
import axios from 'axios';

import Button from 'components/Button/Button';

import './QueryForm.css';
import { AppContext } from 'container';
import PrintDoc from 'components/PrintDoc/PrintDoc';
import MuiModal from 'components/Modal/MuiModal';
import { checkIsNumber } from 'module/isNumber';

const Input = ({ placeholder, value, onChange, maxLength }) => {
	return (
		<input
			className='input-field'
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			maxLength={maxLength}
		/>
	);
};

const QueryForm = () => {
	const { setIsLoading } = React.useContext(AppContext);
	const [name, setName] = React.useState('');
	const [phone, setPhone] = React.useState('');
	const [adharNum, setAdharNum] = React.useState('');
	const [pincode, setPincode] = React.useState('');
	const [category, setCategory] = React.useState('');
	const [queryDesc, setQueryDesc] = React.useState('');
	const [querySubmitted, setQuerySubmitted] = React.useState(false);

	const handleCreateQuery = async () => {
		if (name === '') {
			alert('Please enter you name');
			return;
		}
		if (phone === '' || phone.length !== 10) {
			alert('Please enter 10 digit phone number');
			return;
		}
		if (adharNum === '' || adharNum.length !== 12) {
			alert('Please enter 12 digit Adhar card number');
			return;
		}

		if (pincode === '' || pincode.length !== 6) {
			alert('Please enter 6 pincode');
			return;
		}
		if (category === '') {
			alert('Please select a category');
			return;
		}
		if (queryDesc === '') {
			alert('Please write your query');
			return;
		}

		try {
			setIsLoading(true);
			await axios({
				method: 'post',
				url: `${process.env.REACT_APP_API_URL}querys/create`,
				data: {
					user_name: name,
					adhar_num: adharNum,
					mobile_num: phone,
					query_desc: queryDesc,
					pincode,
					category
				}
			});
			setIsLoading(false);
			setQuerySubmitted(true);
		} catch (err) {
			console.log(err);
			setIsLoading(false);
		}
	};

	const handleTextField = (e, setter) => {
		const { value } = e.target;
		setter(value);
	};

	const handleFieldOnchange = (e, setter) => {
		const isNumber = checkIsNumber(e.target.value, setter);
		if (isNumber) setter(e.target.value);
	};

	return (
		<div className='query-form-wrapper'>
			<div className='form-logo'>Java Avedana</div>
			<div className='form-header'>Let us know your problem</div>
			<div className='form-fields'>
				<div className='field-container'>
					<label>user name</label>
					<Input
						placeholder='User name'
						value={name}
						onChange={(e) => handleTextField(e, setName)}
					/>
				</div>
				<div className='form-fields-set-1'>
					<div className='field-container'>
						<label>phone number</label>
						<Input
							placeholder='Phone number'
							value={phone}
							onChange={(e) => handleFieldOnchange(e, setPhone)}
							maxLength={10}
						/>
					</div>
					<div className='field-container'>
						<label>adhar card number</label>
						<Input
							placeholder='Adhar card number'
							value={adharNum}
							onChange={(e) => handleFieldOnchange(e, setAdharNum)}
							maxLength={12}
						/>
					</div>
				</div>
				<div className='field-container'>
					<label>pincode</label>
					<Input
						placeholder='Pincode'
						value={pincode}
						onChange={(e) => handleFieldOnchange(e, setPincode)}
						maxLength={6}
					/>
				</div>
				<div className='field-container'>
					<label>category</label>
					<select
						className='input-field'
						onChange={(e) => setCategory(e.target.value)}
						value={category}
					>
						<option value={''}>Select query type</option>
						<option value={'query'}>Query</option>
						<option value={'concern'}>Concern</option>
						<option value={'feedback'}>Feedback</option>
					</select>
				</div>
				<div className='field-container'>
					<label>Write the Query in brief </label>
					<textarea
						className='input-field'
						placeholder='Query'
						value={queryDesc}
						onChange={(e) => setQueryDesc(e.target.value)}
					/>
				</div>
			</div>
			<div className='form-actions'>
				<Button title='Cancel' style={{ margin: '0.5em' }} />
				<Button
					title='Send'
					style={{ margin: '0.5em' }}
					onClick={handleCreateQuery}
				/>
			</div>

			<MuiModal
				children={
					<PrintDoc
						name={name}
						phone={phone}
						adharNum={adharNum}
						queryDesc={queryDesc}
						pincode={pincode}
						category={category}
					/>
				}
				open={querySubmitted}
				handleClose={() => {
					setQuerySubmitted(false);
				}}
			/>
		</div>
	);
};

export default QueryForm;
