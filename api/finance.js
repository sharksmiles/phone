import request from './../util/request';

export function rechargeInit() {
	return request({
		url: 'finance/rechargeInit',
		method: 'GET',
	})
}

export function depositLog(data) {
	return request({
		url: 'finance/getDepositLog',
		method: 'GET',
		data
	})
}

export function rechargeLog(data) {
	return request({
		url: 'finance/getRechargeLog',
		method: 'GET',
		data
	})
}

export function scoreLog(data) {
	return request({
		url: 'finance/getScoreLog',
		method: 'GET',
		data
	})
}

export function userMoneyLog(data) {
	return request({
		url: 'finance/getUserMoneyLog',
		method: 'GET',
		data
	})
}

export function delayedLog(data) {
	return request({
		url: 'finance/delayedLog',
		method: 'GET',
		data
	})
}