import request from './../util/request';

export function sendCode(data) {
	return request({
		url: 'cash/sendCode',
		method: 'POST',
		data
	})
}

export function bindAlipay(data) {
	return request({
		url: 'cash/bindAlipay',
		method: 'POST',
		data
	})
}

export function init() {
	return request({
		url: 'cash/init',
		method: 'GET',
	})
}

export function withdrawal(data) {
	return request({
		url: 'cash/withdrawal',
		method: 'POST',
		data
	})
}
export function depositWithdrawal(data) {
	return request({
		url: 'cash/deposit',
		method: 'POST',
		data
	})
}

export function faceCheck() {
	return request({
		url: 'face/check',
		method: 'POST',
	})
}
export function initFace(data) {
	return request({
		url: 'face/initFace',
		method: 'POST',
		data
	})
}
export function faceOrder(data) {
	return request({
		url: 'face/faceOrder',
		method: 'POST',
		data
	})
}
confirm
export function faceOrderConfirm(data) {
	return request({
		url: 'face/confirm',
		method: 'POST',
		data
	})
}