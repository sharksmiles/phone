import { gameList as gameListApi } from '@/api/game';
let gameList = uni.getStorageSync('gameList') || []
	, selectedAccompany = uni.getStorageSync('selectedAccompany') || {}
	, selectedRent = uni.getStorageSync('selectedRent') || {}
	, selectedTraining = uni.getStorageSync('selectedTraining') || {}

const state = {
	data: gameList,
	selectedAccompany: selectedAccompany, 
	selectedRent: selectedRent,
	selectedTraining: selectedTraining
},
getters = {
	data(state) {
		return state.data;
	},
	selectedTraining(state) {
		return state.selectedTraining;
	},
	selectedAccompany(state) {
		return state.selectedAccompany;
	},
	selectedRent(state) {
		return state.selectedRentGame;
	}
},
mutations = {
	setGameList(state, data) {
		state.data = data;
		uni.setStorageSync('gameList', data)
	},
	setSelectedRentGame(state, data) {
		state.selectedRent = data;
		uni.setStorageSync('selectedRent', data)
	},
	setSelectedAccompanyGame(state, data) {
		state.selectedAccompany = data;
		uni.setStorageSync('selectedAccompany', data)
	},
	setSelectedTrainingGame(state, data) {
		state.selectedTraining = data;
		uni.setStorageSync('selectedTraining', data)
	},
}
, actions = {
	async list({ commit }, param) {
		// await gameListApi().then(res=>{
		// 	const { data } = res
		// 	if(!uni.getStorageSync("gameList")){
		// 		commit('setGameList', data)
		// 	}
			
		// 	if(!uni.getStorageSync("selectedRent")){
		// 		commit('setSelectedRentGame', data.shift())
		// 	}
		// 	if(!uni.getStorageSync("selectedAccompany")){
		// 		commit('setSelectedAccompanyGame', data.shift())
		// 	}
		// 	if(!uni.getStorageSync("selectedTraining")){
		// 		commit('setSelectedTrainingGame', data.shift())
		// 	}
		// })
		let res = await gameListApi()
		let { data, code } = res
		if(code == 1){
			if(!uni.getStorageSync("gameList")){
				commit('setGameList', data)
			}
			if(data.length > 0){
				data = data[0]
			}
			if(!uni.getStorageSync("selectedRent")){
				commit('setSelectedRentGame', data)
			}
			if(!uni.getStorageSync("selectedAccompany")){
				commit('setSelectedAccompanyGame', data)
			}
			if(!uni.getStorageSync("selectedTraining")){
				commit('setSelectedTrainingGame', data)
			}
		}
	},
	selectedRentGame({ commit }, param) {
		commit('setSelectedRentGame', param)
	},
	selectedAccompanyGame({ commit }, param) {
		commit('setSelectedAccompanyGame', param)
	},
	selectedTrainingGame({ commit }, param) {
		commit('setSelectedTrainingGame', param)
	}
};

export default {
    namespaced: true,
	state,
	getters,
	mutations,
    actions
}
