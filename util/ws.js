import env from "./env.js"
import Vue from 'vue'

//是否已经连接上ws
let isOpenSocket = false
//心跳间隔，单位毫秒
let heartBeatDelay = 3000
let heartBeatInterval = null
//心跳时发送的消息文本
let heartBeatText = "PING"
//最大重连次数
let reconnectTimes = 10
let reconnectInterval = null
//重连间隔，单位毫秒
let reconnectDelay = 3000

let wsUrl = env.wsUrl

let socketTask = null

//这个参数是防止重连失败之后onClose方法会重复执行reconnect方法，导致重连定时器出问题
//连接并打开之后可重连，且只执行重连方法一次
let canReconnect = false

//封装的对象，最后以模块化向外暴露，
//init方法 初始化socketTask对象
//completeClose方法 完全将socketTask关闭（不重连）
//其他关于socketTask的方法与uniapp的socketTask api一致
let ws = {
	socketTask: null,
	init,
	completeClose
}

function init() {
	if (isOpenSocket) return
	socketTask = uni.connectSocket({
		url: wsUrl,
		complete: () => {}
	})
	socketTask.onOpen((res) => {
		console.log("ws连接成功")
		clearInterval(heartBeatInterval)
		clearInterval(reconnectInterval)
		isOpenSocket = true
		canReconnect = true
		//开启心跳机制
		heartBeat()
	})
	socketTask.onMessage((massage) => {
		//自定义处理onMessage方法
		console.log("接收消息-massage：", massage)
		let res = JSON.parse(massage.data)
		console.log("接收消息-res：", res)
		switch (res.type) {
			case "init":
				send({
					type: 'bind',
					client_id: res.client_id,
				});
				break;
			case "receive_message":
				Vue.prototype.$store.commit("chat/msgReceive", res)
				break;
		}
	})
	socketTask.onClose((err) => {
		console.log(err, 'ws,关闭原因')
		if (isOpenSocket) {
			console.log("ws与服务器断开")
		} else {
			console.log("连接失败")
		}
		isOpenSocket = false
		if (canReconnect) {
			reconnect()
			canReconnect = false
		}
	})
	ws.socketTask = socketTask
}

function heartBeat() {
	heartBeatInterval = setInterval(() => {
		send({
			type: `${heartBeatText}`
		});
	}, heartBeatDelay)
}

function send(data) {
	let user_id = Vue.prototype.$store.state.user.info.id
	data.req_user_id = user_id
	ws.socketTask.send({
		data: JSON.stringify(data),
		async success(res) {
			console.log("消息发送成功", )
		}
	});
}

function reconnect() {
	//停止发送心跳
	clearInterval(heartBeatInterval)
	//如果不是人为关闭的话，进行重连
	if (!isOpenSocket) {
		let count = 0;
		reconnectInterval = setInterval(() => {
			console.log("正在尝试重连")
			init();
			count++
			//重连一定次数后就不再重连
			if (count >= reconnectTimes) {
				clearInterval(reconnectInterval)
				console.log("网络异常或服务器错误")
			}
		}, reconnectDelay)
	}
}

function completeClose() {
	//先将心跳与重连的定时器清除
	clearInterval(heartBeatInterval)
	clearInterval(reconnectInterval)
	canReconnect = false
	if (ws.socketTask) {
		ws.socketTask.close()
	}
}

module.exports = ws