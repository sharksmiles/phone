import request from './../util/request';

export function detailInit(data) {
	return request({
		url: 'message/detailInit',
		method: 'GET',
		data
	})
}

export function friendsInit(data) {
	return request({
		url: 'message/friendsInit',
		method: 'GET',
		data
	})
}

export function information(data) {
	return request({
		url: 'message/information',
		method: 'GET',
		data
	})
}

export function isSend(data) {
	return request({
		url: 'message/isSend',
		method: 'POST',
		data
	})
}
