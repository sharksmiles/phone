<template>
	<u-popup v-model="show" mode="center">
		<view class="popupQrcode">
			<canvas :start="false" id="shareQrcode" canvas-id="shareQrcode" style="width: 200px;height: 200px;"></canvas>
			<view class="button p-5" @click="$utils.copy(url)">
				复制分享链接
			</view>
		</view>
	</u-popup>
</template>

<script>
	import UQRCode from 'uqrcodejs'; 
	const qr = new UQRCode()
	export default {
		name: "qrcode",
		props: {
			url: {
				type: String,
				default: ""
			},
		},
		data() {
			return{
				show: false,
			}
		},
		methods:{
			changeShow(){
				this.show = !this.show
				if(this.show){
					setTimeout(()=>{
						qr.data = this.url;
						// 设置二维码大小，必须与canvas设置的宽高一致
						qr.size = 200;
						// 调用制作二维码方法
						qr.make();
						// 获取canvas上下文
						var canvasContext = uni.createCanvasContext('shareQrcode', this); // 如果是组件，this必须传入
						// 设置uQRCode实例的canvas上下文
						qr.canvasContext = canvasContext;
						// 调用绘制方法将二维码图案绘制到canvas上
						qr.drawCanvas();
					},500)
				}
			},
		}
	}
</script>

<style lang="scss">
	.popupQrcode{
		padding: 20rpx;
		.button{
			width: 60%;
			margin: 20rpx auto 10rpx;
			text-align: center;
			background-color: #ffffff;
			color: #65bea5;
			border-radius: 30rpx;
			border: 1rpx solid #65bea5;
		}
	}
</style>