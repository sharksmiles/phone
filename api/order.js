import request from './../util/request';

export function create(data) {
	return request({
		url: 'order/create',
		method: 'POST',
		data
	})
}
export function relet(data) {
	return request({
		url: 'order/relet',
		method: 'POST',
		data
	})
}

export function getList(data) {
	return request({
		url: 'order/getList',
		method: 'GET',
		data
	})
}

export function userOrderList(data) {
	return request({
		url: 'order/userList',
		method: 'GET',
		data
	})
}

export function detail(id) {
	return request({
		url: 'order/detail/id/' + id,
		method: 'GET',
	})
}

export function cancel(id) {
	return request({
		url: 'order/cancel/id/' + id,
		method: 'POST',
	})
}

export function pay(id, method,type=1) {
	return request({
		url: 'order/pay/id/' + id + "/method/"+ method +"/type/" + type,
		method: 'POST',
	})
}

// 退款
export function refund(data) {
	return request({
		url: 'order/refund',
		method: 'POST',
		data
	})
}


// 拒绝
export function refuse(id) {
	return request({
		url: 'order/refuse/id/' + id,
		method: 'POST',
	})
}

export function complaint(data) {
	return request({
		url: "order/complaint",
		method: 'POST',
		data
	})
}

export function block(data) {
	return request({
		url: "order/block",
		method: 'POST',
		data
	})
}

// 同意
export function agree(id) {
	return request({
		url: 'order/agree/id/' + id,
		method: 'POST',
	})
}

// 发货
export function deliver(id) {
	return request({
		url: 'order/deliver/id/' + id,
		method: 'POST',
	})
}

// 用户确认
export function memberConfirm(id) {
	return request({
		url: 'order/memberConfirm/id/' + id,
		method: 'POST',
	})
}

// 用户收货
export function memberDelivery(id) {
	return request({
		url: 'order/memberDelivery/id/' + id,
		method: 'POST',
	})
}

// 订单评论
export function comment(data) {
	return request({
		url: 'order/comment/id',
		method: 'POST',
		data
	})
}

