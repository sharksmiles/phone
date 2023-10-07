import request from './../util/request';

export function gameList() {
	return request({
		url: 'game/getList',
		method: 'GET'
	})
}

export function filterInit(t, gameId) {
	return request({
		url: 'game/filterInit/releaseType/' + t +
			'/game_id/' + gameId,
		method: 'GET'
	})
}