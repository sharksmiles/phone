import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import game from './modules/game'
import config from './modules/config'
import chat from './modules/chat'

Vue.use(Vuex)
const store = new Vuex.Store({
	modules: {
		user,
		game,
		config,
		chat
	}
});

export default store
