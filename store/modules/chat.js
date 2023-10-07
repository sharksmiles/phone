import Vue from 'vue'
import { detailInit as detailInitApi } from '../../api/message';

const state = {
	message: [],
	friend: {},
},
getters = {
	message(state) {
		return state.message;
	},
	friend(state) {
		return state.friend;
	},
},
mutations = {
	detailReset(state, data){
		state.friend = {}
		state.message = []
	},
	detailInit(state, data){
		state.friend = data.friend
		data.list.map(function(item){
			if(item.content_type == 1){
				item.content = Vue.prototype.$utils.replaceEmoji(item.content)
			}
			return item
		})
		state.message = data.list
	},
	msgSend(state, data){
		// 给用户推送消息
		let sendData = Object.assign({
			type: "send",
			req_user_id: data.user_id
		}, data);

		Vue.prototype.$ws.socketTask.send({
			data: JSON.stringify(sendData),
			success(res) {
				if(data.content_type == 1){
					data.content = Vue.prototype.$utils.replaceEmoji(data.content)
				}
				state.message.push(data)
				console.log("消息发送成功", res)
			}
		})
	},
	msgReceive(state, data){
		if(state.friend.id == data.friend_id){
			if(data.content_type == 1){
				data.content = Vue.prototype.$utils.replaceEmoji(data.content)
			}
			state.message.push(data)
		}
	}
}
, actions = {
	detailInit({ commit }, param){
		commit('detailReset')
		detailInitApi(param).then(res=>{
			if(res.code == 1){
				const { list, friend } = res.data
				commit('detailInit', {
					list: list,
					friend: friend
				})
			}
		})
	},
};

export default {
    namespaced: true,
	state,
	getters,
	mutations,
    actions
}
