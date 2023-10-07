import { config as configApi } from '@/api/index';
let config = uni.getStorageSync('config') || {}

const state = {
	data: config,
},
getters = {
	data(state) {
		return state.data;
	},
},
mutations = {
	setConifg(state, data) {
		state.data = data;
		uni.setStorageSync('config', data)
	}
}
, actions = {
	init({ commit }, param) {
		configApi().then(res=>{
			if(res.code == 1){
				commit("setConifg", res.data)
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
