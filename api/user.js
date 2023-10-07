import request from './../util/request';

export function login(data) {
	return request({
		url: 'user/login',
		method: 'POST',
		data
	})
}

export function profileInit() {
	return request({
		url: 'user/profileInit',
		method: 'GET',
	})
}

export function profile(data) {
	return request({
		url: 'user/profile',
		method: 'POST',
		data
	})
}

export function sendCode(data) {
	return request({
		url: 'sms/send',
		method: 'POST',
		data
	})
}

export function mobilelogin(data) {
	return request({
		url: 'user/mobilelogin',
		method: 'POST',
		data
	})
}

export function getUserInfo() {
	return request({
		url: 'user/getUserInfo',
		method: 'GET'
	})
}

export function accountList(releaseType, data) {
	return request({
		url: 'user/accountList/releaseType/' + releaseType,
		method: 'GET',
		data
	})
}

export function collectList(data) {
	return request({
		url: 'user/collectList',
		method: 'GET',
		data
	})
}

// 充值
export function recharge(data) {
	return request({
		url: 'user/recharge',
		method: 'POST',
		data
	})
}

export function deposit(data) {
	return request({
		url: 'user/deposit',
		method: 'POST',
		data
	})
}

export function bindReal(data) {
	return request({
		url: 'user/bindReal',
		method: 'POST',
		data
	})
}

export function audio(data) {
	return request({
		url: 'user/audio',
		method: 'POST',
		data
	})
}


export function follow(friendId) {
	return request({
		url: 'user/follow/friendId/' + friendId,
		method: 'GET',
	})
}