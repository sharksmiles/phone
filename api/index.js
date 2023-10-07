import request from './../util/request';

export function getList(type, data) {
	return request({
		url: 'index/getList/type/' + type,
		method: 'GET',
		data
	})
}

export function detail(id) {
	return request({
		url: 'index/detail/id/' + id,
		method: 'GET',
	})
}

export function jx3(id, name) {
	return request({
		url: 'index/jx3/id/' + id + '/name/' + name,
		method: 'GET',
	})
}

export function collect(id) {
	return request({
		url: 'index/collect/id/' + id,
		method: 'GET',
	})
}

export function comment(id, data) {
	return request({
		url: 'index/comment/id/' + id,
		method: 'GET',
		data
	})
}

export function commentLike(commentId) {
	return request({
		url: 'index/commentLike/commentId/' + commentId,
		method: 'POST',
	})
}

export function adv(type) {
	return request({
		url: 'index/adv/type/' + type,
		method: 'GET',
	})
}

export function config() {
	return request({
		url: 'common/config',
		method: 'GET',
	})
}

export function subject(type) {
	return request({
		url: 'index/subject/type/' + type,
		method: 'GET',
	})
}

