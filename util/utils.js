import Vue from 'vue'
import env from '@/util/env.js';

function _getDate(date) {
	var year = date.getFullYear(),
		month = date.getMonth() + 1,
		day = date.getDate();
	return `${year}-${fillZero(month)}-${fillZero(day)}`
}

function fillZero(val) {
	return (val < 10 ? '0' : '') + val;
}

export function copy(data) {
	uni.setClipboardData({
		data: data,
		success: function(res) {
			uni.showToast({
				title: "复制成功",
				icon: "none",
				mask: true
			})
		}
	})
}

export function comeback() {
	let pages = getCurrentPages()
	if (pages[pages.length - 2]) {
		//如果有上一页，就返回上一页        
		uni.navigateBack();
	} else {
		//如果没有上一页，则返回首页        
		uni.reLaunch({
			url: "/pages/tabBar/rent"
		});
	}
}

export function handleSetTimeNav(url) {
	setTimeout(function() {
		handleNavigate(url)
	}, 1000)
}

export function handleNavigate(url) {
	uni.navigateTo({
		url: url,
		success(res) {
			console.log(res)
		},
		fail(err) {
			console.log(err)
		}
	})
}

export function handleReLaunch(url) {
	uni.reLaunch({
		url: url
	})
}

export function isLoginReLaunch(url) {
	if (Vue.prototype.$store.state.user.hasLogin) {
		handleNavigate(url)
	} else {
		reLaunchLogin()
	}
}

export function reLaunchLogin(url) {
	handleReLaunch('/pages/user/login')
}


export function formatImage(lists) {
	let arr = []
	for (let index in lists) {
		if (!lists[index].error) {
			if (lists[index].response) {
				lists[index].response.data && arr.push(lists[index].response.data.fullurl)
			} else {
				arr.push(lists[index].url)
			}
		}
	}
	return arr;
}

export function getDate() {
	var date = new Date();
	return _getDate(date);
}

//日期+多少天
//日期-10天：this.base.date('2023-04-02',-10)
//当天日期-10天：this.base.date(this.base.getDate(),-10)
export function addDay(date, days) {
	if (!days) {
		return date;
	}
	date = new Date(new Date(date).setDate(new Date(date).getDate() + days));
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	if (month < 10) {
		month = "0" + month;
	}
	var day = date.getDate();
	if (day < 10) {
		day = "0" + day;
	}
	return year + "-" + month + "-" + day;
}

//日期+多少月，同上
export function addMonth(date, m) {
	date = new Date(
		new Date(date).setMonth(
			new Date(date).getMonth() + (m === undefined ? 1 : m)
		)
	);
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	if (month < 10) {
		month = "0" + month;
	}
	var day = date.getDate();
	if (day < 10) {
		day = "0" + day;
	}
	return year + "-" + month + "-" + day;
}

export function formatTime() {
	//dataString是整数，否则要parseInt转换
	var time = new Date();
	var year = time.getFullYear();
	var month = time.getMonth() + 1;
	var day = time.getDate();
	var hour = time.getHours();
	var minute = time.getMinutes();
	var second = time.getSeconds();
	return year + '-' + (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day) + ' ' + (hour < 10 ?
		'0' + hour : hour) + ':' + (minute < 10 ? '0' + minute : minute) + ':' + (second < 10 ? '0' + second :
		second)
}


export function handleSwitchTab(url) {
	uni.switchTab({
		url: url
	});
}

export function isEmpty(value, checkArr) {
	if (checkArr) {
		if (Array.isArray(value)) {
			if (!value.length) {
				return true;
			}
		}
	}
	return value === '' || value === ' ' || value === undefined || value === null || value === 'null'
}

export function showModal(content, title = "提示") {
	uni.showModal({
		title: title,
		content: content,
		showCancel: false,
		success: function(res) {
			if (res.confirm) {
				console.log('用户点击确定');
			} else if (res.cancel) {
				console.log('用户点击取消');
			}
		}
	});
}

//utils.js
export function getreleaseName(type) {
	return type == 1 ? '账号' : type == 2 ? '技能' : '代练'
}

let AppMusic = null

export function soundDestroy(src) {
	AppMusic.destroy()
}

export function playSound(src) {
	if (AppMusic) {
		AppMusic.destroy()
	}
	AppMusic = uni.createInnerAudioContext();
	AppMusic.autoplay = true;
	AppMusic.src = src;
	AppMusic.onPlay((res) => {
		console.log(res)
	});
	AppMusic.onError((err) => {
		console.log(err)
	});
}

export function rentAmount(data, hour, rentIndex, couponIndex) {
	let price = 0,
		discount = 0,
		amount = 0,
		res = {}
	if (rentIndex == 0 && data.is_hour) {
		price = data.showHourRent
	}
	if (rentIndex == 1 && data.is_day) {
		price = data.showDayRent
	}
	if (rentIndex == 2 && data.is_month) {
		price = data.showMonthRent
	}
	res.univalent = price

	price = price < 0 ? 0 : price
	res.amountPrice = (price * hour).toFixed(2)

	if (couponIndex > 0) {
		discount = data.coupon[couponIndex].discount
	}
	amount = res.amountPrice - discount
	res.amount = ((amount > 0) ? amount : 0).toFixed(2)
	return res;
}

export function isMobile() {
	const userAgent = navigator.userAgent;
	const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

	return isMobile
}

export function getMethod() {
	return isMobile() ? 'wap' : 'web'
}

export function getAudioDuration(src) {
	return new Promise((resolve, reject) => {
		const audioContext = uni.createInnerAudioContext();

		audioContext.src = src;

		audioContext.onCanplay(() => {
			resolve(audioContext.duration);
		});

		audioContext.onError((error) => {
			reject(error);
		});
	});
}


export function replaceEmoji(nodes) {
	let dataList = {
		爱你: 'aini',
		奥特曼: 'aoteman',
		拜拜: 'baibai',
		抱抱: 'baobao',
		悲伤: 'beishang',
		并不简单: 'bingbujiandan',
		鄙视: 'bishi',
		闭嘴: 'bizui',
		馋嘴: 'chanzui',
		吃惊: 'chijing',
		打哈欠: 'dahaqi',
		打脸: 'dalian',
		敲头: 'ding',
		狗头: 'doge',
		二哈: 'erha',
		费解: 'feijie',
		肥皂: 'feizao',
		感冒: 'ganmao',
		鼓掌: 'guzhang',
		哈哈: 'haha',
		害羞: 'haixiu',
		汗: 'han',
		呵呵: 'hehe',
		嘿嘿嘿: 'heiheihei',
		黑线: 'heixian',
		哼: 'heng',
		坏笑: 'huaixiao',
		花心: 'huaxin',
		急眼: 'jiyan',
		可爱: 'keai',
		可怜: 'kelian',
		酷: 'ku',
		骷髅: 'kulou',
		困: 'kun',
		懒得理你: 'landelini',
		泪: 'lei',
		怒: 'nu',
		怒骂: 'numa',
		钱: 'qian',
		亲亲: 'qinqin',
		傻眼: 'shayan',
		生病: 'shengbing',
		失望: 'shiwang',
		衰: 'shuai',
		睡觉: 'shuijiao',
		思考: 'sikao',
		太开心: 'taikaixin',
		摊手: 'tanshou',
		舔: 'tian',
		偷笑: 'touxiao',
		吐: 'tu',
		挖鼻孔: 'wabishi',
		委屈: 'weiqu',
		污: 'wu',
		笑哭: 'xiaoku',
		星星眼: 'xingxingyan',
		嘻嘻: 'xixi',
		嘘: 'xu',
		阴险: 'yinxian',
		疑问: 'yiwen',
		右哼哼: 'youhengheng',
		晕: 'yun',
		允悲: 'yunbei',
		抓狂: 'zhuakuang'
	}
	// 处理表情
	let temp = []
	nodes = nodes.replace(/\+/g, '{[$add$]}')
	let reg = /\[.*?\]/g
	while ((temp = reg.exec(nodes))) {
		let str = temp[0].substring(1, temp[0].length - 1)
		if (dataList[str]) {
			let value = dataList[str]
			let html =
				`<img src='${env.domain}/emoji/d_${value}.gif' style='width:20px;height:20px;vertical-align: middle;' />`
			nodes = nodes.replace(temp[0], html)
		}
	}
	return nodes;
}