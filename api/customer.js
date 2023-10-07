import request from './../util/request';

export function getMessage() {
	return request({
		url: '/customer/getMessage',
		method: 'GET',
	})
}

export function send(data) {
	return request({
		url: '/customer/send',
		method: 'POST',
		data
	})
}