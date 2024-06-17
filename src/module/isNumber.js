export const checkIsNumber = (value) => {
	let reg = new RegExp('^[0-9]*$');
	if (reg.test(value)) {
		return true;
	} else {
		alert('Only number are allowed');
	}
};
