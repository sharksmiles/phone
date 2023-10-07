import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import uView from "uview-ui";
import store from './store'
import * as utils from '@/util/utils.js'
import ws from '@/util/ws.js' //找好自己的路径
import * as validate from '@/util/validate.js'
import customNavbar from "@/components/customNavbar";
import AccountError from '@/exception/AccountError.js';

Vue.prototype.$toast = function(message, duration) {
	uni.showToast({
		icon: "none",
		title: "" + message,
		duration: duration || 2000,
		success(res) {
			console.log(res)
		},
		fail(err) {
			console.log(err)
		}
	})
}

Vue.prototype.$navigateBack = function () {
	this.$utils.comeback()
}

Vue.prototype.$throw = function (message) {
	this.$u.toast(message)
	throw new AccountError(message);
};

Vue.prototype.$validate = validate
Vue.prototype.$utils = utils
Vue.prototype.$store = store;
Vue.prototype.$ws = ws

Vue.config.productionTip = false;

Vue.use(uView);
Vue.component('customNavbar',customNavbar)
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif