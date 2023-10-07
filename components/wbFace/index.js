const wbFace = () => {
	const face = uni.requireNativePlugin('DC-WBFaceServiceV2');
	console.log(face, 'face====')
	// face.startWbFaceVerifyService({
	// 	userId: "test_user_1",
	// 	nonce: "xxxxxx",
	// 	sign: "xxxxxx",
	// 	appId: "xxxxxx",
	// 	orderNo: "xxxxxx",
	// 	apiVersion: "1.0.0",
	// 	licence: "xxxxxx",
	// 	compareType: "0",
	// 	faceId: "xxxx",
	// 	sdkConfig: {
	// 		//和iOS共有的配置参数
	// 		showSuccessPage: false, //是否展示成功页面,默认不展示
	// 		showFailurePage: false, //是否展示失败页面,默认不展示
	// 		recordVideo: false, //是否录制视频,默认不录制
	// 		checkVideo: false, //是否检查视频大小
	// 		playVoice: false, //是否播放语音提示，默认不播放
	// 		theme: '1', //sdk皮肤设置，0黑色，1白色
	// 		customerTipsLoc: '0', //自定义提示的位置，0在预览框下面，1在预览框上面
	// 		customerTipsInLive: '', //检测时的自定义提示语
	// 		customerTipsInUpload: '', //上传时的自定义提示语
	// 		customerLongTip: '', //自定义长提示语
	// 		//android独有的配置参数
	// 		isEnableLog: true, //是否打开刷脸native日志，请release版本关闭！！！
	// 		//iOS独有的配置参数
	// 		windowLevel: '1', //sdk中拉起人脸活体识别界面中使用UIWindow时的windowLevel配置
	// 		manualCookie: true, //是否由SDK内部处理sdk网络请求的cookie
	// 		useWindowSecene: false,
	// 	}
	// }, result => {
	// 	console.log("【uni log】face SDK callback ================> result.");
	// 	console.log(result);
	// });
}
export default wbFace