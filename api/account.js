import request from './../util/request';

export function statistics(id) {
	return request({
		url: '/account/statistics/id/' + id,
		method: 'GET',
	})
}

export function releaseList(id, data) {
	return request({
		url: '/account/releaseList',
		method: 'GET',
		data
	})
}


export function releaseInit(id, data) {
	return request({
		url: '/account/releaseInit/id/' + (id ? id : 0),
		method: 'GET',
		data
	})
}

export function repeated(gameId, id, release_type) {
	return request({
		url: '/account/repeated/gameId/' + gameId + "/accountId/" + id + "/release_type/" + release_type,
		method: 'POST',
	})
}

export function rentSubmit(data) {
	return request({
		url: '/account/rentSubmit',
		method: 'POST',
		data
	})
}

export function skillSubmit(data) {
	return request({
		url: '/account/skillSubmit',
		method: 'POST',
		data
	})
}

export function trainingSubmit(data) {
	return request({
		url: '/account/trainingSubmit',
		method: 'POST',
		data
	})
}

export function changePassword(data) {
	return request({
		url: '/account/changePassword',
		method: 'POST',
		data
	})
}
export function delShowInfo(data) {
	return request({
		url: 'account/delAccount',
		method: 'POST',
		data
	})
}
export function upAccount(data) {
	return request({
		url: 'account/upAccount ',
		method: 'POST',
		data
	})
}
export function downAccount(data) {
	return request({
		url: 'account/downAccount ',
		method: 'POST',
		data
	})
}


export function subject(type) {
	return request({
		url: '/account/subject/type/' + type,
		method: 'GET',
	})
}

export function quickReceive(id) {
	return request({
		url: '/account/quickReceive/id/' + id,
		method: 'POST',
	})
}

export function handalFee(data) {
	return request({
		url: 'account/handalFee',
		method: 'POST',
		data
	})
}