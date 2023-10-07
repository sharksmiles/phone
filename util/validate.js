export function mobile(mobile) {
	let reg = /^1(3\d|5[0-35-9]|8[025-9]|47)\d{8}$/;
	return reg.test(mobile)
}


export function checkIsPositiveEx0(val) {
	let reg = /^\d+(?=\.{0,1}\d+$|$)/
	
	return reg.test(val) && val > 0
}