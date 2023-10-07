import request from './../util/request';

export function examine(data) {
	return request({
		url: '/common/examine',
		method: 'POST',
		data
	})
}