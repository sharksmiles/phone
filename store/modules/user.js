import { login as loginApi, getUserInfo as getUserInfoApi, mobilelogin as mobileloginApi } from '../../api/user';
import { setToken , getToken, removeToken} from '../../util/auth';
import Vue from 'vue'
let infoHistory = uni.getStorageSync('userInfo') || {};

const state = {
	hasLogin: Boolean(Object.keys(infoHistory).length),
	info: infoHistory
},
getters = {
	info(state) {
		return state.info;
	},
	hasLogin(state){
		return state.hasLogin;
	}
},
mutations = {
	setUserInfo(state, data) { 
		state.hasLogin = true;
		state.info = data;
		uni.setStorageSync('userInfo',data)
	},
	logout(state) {
		state.info = {};
		state.hasLogin = false;
		removeToken();
		uni.removeStorageSync('userInfo')
		Vue.prototype.$ws.completeClose()
		uni.reLaunch({
			url: "/pages/user/login",
		})
	}
}
, actions = {
	login({ commit }, param) {
		Vue.prototype.$ws.completeClose()
		
		let loginWay = param.loginWay
			, api;
		api = param.loginWay == 1? loginApi(param): mobileloginApi(param);
	    api.then(response => {
			console.log(response)
	    	if(response.code == 1){
	    		const { data } = response;
				const { userinfo } = data
	    		commit('setUserInfo', userinfo)
				
				setToken(userinfo.token)
				
				uni.reLaunch({
					url: "/pages/tabBar/rent",
				})
				Vue.prototype.$ws.init()
	    	}else{
				uni.showToast({
					title: response.msg,
					icon: 'none',
					duration: 2000
				})  
			}
	    	
	    }).catch(error => {
			uni.showToast({
				title: "操作失败",
				icon: 'none',
				duration: 2000
			})  
	        console.log(error)
	    })
	},
	getUserInfo({ commit }){
		getUserInfoApi().then(response => {
			if(response.code == 1){
				const { data } = response;
				commit('setUserInfo', data)
			}else{
				uni.showToast({
					title: response.msg,
					icon: 'none',
					duration: 2000
				})  
				commit('logout')
			}
		}).catch(error => {
	        console.log(error)
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
