import request from './../util/request';

export function list() {
	return request({
		url: 'level/getList',
		method: 'GET',
	})
}
