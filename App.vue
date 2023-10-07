<script>
	import TIM from 'tim-wx-sdk'
	import TIMUploadPlugin from 'tim-upload-plugin'

	export default {
		onLaunch: function(options) {
			this.$store.dispatch("game/list")
			this.$store.dispatch("config/init")

			// 判断是否为移动端
			const isMobile = this.$utils.isMobile()

			if (isMobile) {
				if (!this.$store.state.user.hasLogin) {
					let paths = [
						"pages/tabBar/rent",
						"pages/tabBar/accompany",
						"pages/tabBar/training",
						"pages/rent/detail",
						"pages/accompany/detail",
						"pages/training/detail",
					];
					if (paths.indexOf(options.path) == -1) {
						uni.reLaunch({
							url: "/pages/user/login",
						})
						return
					}
				} else {
					if ("/pc/index".indexOf(options.path) > -1) {
						uni.reLaunch({
							url: "/pages/tabBar/rent",
						})
					}
				}
			}
			if (!isMobile) {
				if (window.location.href == 'https://www.jiutianzuhao.cn/h5/#/pc/index' || window.location.href ==
					'https://www.jiutianzuhao.cn') {
					uni.navigateTo({
						url: '/pc/index'
					});
				}
			}
		},
		onShow: function() {
			if (this.$store.state.user.hasLogin) {
				this.$ws.init()
				this.$store.dispatch("user/getUserInfo")
			}
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		onError(err) {
			console.log(err)
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
	@import "@/static/iconfont/iconfont.css";
	@import "@/static/css/order.scss";

	/*每个页面公共css */
	.u-tabbar>.u-tabbar__content {
		padding-bottom: 10rpx;
		border-top: 1px solid #eee;
	}

	/* 	.u-popup .u-fade-enter-active{
		    z-index: 999999 !important;
	} */
	uni-toast {
		z-index: 99999999 !important;
	}

	uni-page-body,
	html,
	body {
		height: 100%;
	}

	uni-page-body>uni-view:first-child {
		height: 100%;
	}

	.sort-form-popup .u-fade-enter-to {
		z-index: 9999999 !important;
	}

	.u-button {
		border-color: unset !important;
		border-width: 0 !important;
	}

	/* 	.grid-u-model>.u-transition {
		z-index: 99999999 !important;
	} */
	.grid-u-model .u-transition {
		z-index: 99999999 !important;
	}

	// #ifdef MP-WEIXIN
	page {
		height: 100%;
	}

	page>view:first-child {
		height: 100%;
	}

	// #endif

	.vol-action-sheet-select-container {
		min-height: 200rpx;
		display: flex;
		flex-direction: column;
	}

	.vol-action-sheet-select-container .vol-action-sheet-select-title {
		padding: 24rpx;
		text-align: center;
		position: relative;
		// border-bottom: 1px solid rgb(233 233 233);

	}

	.vol-action-sheet-select-container .vol-action-sheet-select-title .vol-action-sheet-select-confirm {
		position: absolute;
		right: 30rpx;
		color: #007AFF;
		font-weight: 500;
	}

	.vol-action-sheet-select-container .vol-action-sheet-select-content {
		flex: 1;
		height: 0;
		overflow: scroll;
	}

	.u-popup .u-transition {
		z-index: 99999999 !important;
	}

	.viewFlex {
		display: flex;
	}

	.p-10 {
		padding: 10px;
	}

	.p-5 {
		padding: 5px;
	}

	.p-15 {
		padding: 15px;
	}

	.p-20 {
		padding: 20px;
	}

	.m-10 {
		margin: 10px !important;
	}

	.m-b-5 {
		margin-bottom: 5px !important;
	}

	.m-b-10 {
		margin-bottom: 10px !important;
	}

	.m-b-20 {
		margin-bottom: 20px !important;
	}

	.m-l-10 {
		margin-left: 10px !important;
	}

	.m-t-5 {
		margin-top: 5px !important;
	}

	.m-t-10 {
		margin-top: 10px !important;
	}

	.m-t-20 {
		margin-top: 20px !important;
	}

	.m-t-30 {
		margin-top: 30px !important;
	}

	.m-t-40 {
		margin-top: 40px !important;
	}

	.m-r-5 {
		margin-right: 5px !important;
	}

	.m-r-10 {
		margin-right: 10px !important;
	}

	.m-l-5 {
		margin-left: 5px !important;
	}

	.m-t-15 {
		margin-top: 15px !important;
	}

	.p-t-5 {
		padding-top: 5px !important;
	}

	.p-t-10 {
		padding-top: 15px !important;
	}

	.p-l-10 {
		padding: 0 10px !important;
	}

	.p-r-5 {
		padding-right: 5px !important;
	}

	.p-b-10 {
		padding-bottom: 10px !important;
	}

	.p-l-5 {
		padding-left: 5px !important;
	}

	.p-l-r-10 {
		padding-right: 10px !important;
		padding-left: 10px !important;
	}

	.pull-left {
		float: left;
	}

	.pull-right {
		float: right;
	}

	.oh {
		overflow: hidden;
	}

	.border-radius-15 {
		border-radius: 15px;
	}

	.border-radius-10 {
		border-radius: 10px;
	}

	.bg-white-shadow {
		background: #fff;
		-webkit-box-shadow: 3px -2px 17px 0 hsla(0, 0%, 91%, .5);
		box-shadow: 3px -2px 17px 0 hsla(0, 0%, 91%, .5);
		border-radius: 10px;
	}

	.c-orange {
		color: #fa7e12;
	}

	.mintui {
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-webkit-text-stroke-width: 0.2px;
		-moz-osx-font-smoothing: grayscale;
	}

	.account-item-game-icon {
		margin-right: 10px;
		text-align: center;
		line-height: 17px;
		width: 57px;
		height: 17px;
		font-size: 12px;
		color: #fff;
		display: inline-block;
	}

	.button-icon- i {
		color: #61c9f0;
		font-size: 24px;
	}

	.button-icon- span {
		padding: 5px 30px;
		border-radius: 25px;
		border: 1px solid #61c9f0;
	}

	.text-center {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.game-popup {
		.title {
			color: #333;
			font-size: 17px;
			text-align: center;
			margin-bottom: 10px;
			padding-top: 20px;
		}

		.item {
			width: 104px;
			height: 121px;
			text-align: center;
			background: #f3f3f3;
			border-radius: 7px;
			padding: 17px 20px 0;
			position: relative;
			margin-bottom: 10px;

			.image {
				width: 62px;
				height: 62px;
				border-radius: 10px;
				margin-bottom: 13px;
			}

			.name {
				color: #666;
				font-size: 12px;
				line-height: 12px;
				font-weight: 700;
			}
		}

	}

	.voice-card {
		position: absolute;
		display: flex;
		align-items: center;
		bottom: 11px;
		left: 102px;

		.voice-bd {
			width: 170px;
			height: 26px;
			background-color: rgba(87, 189, 162, .2);
			border-radius: 18px;
			position: relative;
			display: flex;
			align-items: center;

			.icon-play {
				width: 20px;
				height: 20px;
				border-radius: 50%;
				position: absolute;
				left: 4px;
				text-align: center;
				line-height: 18px;

				image {
					width: 100%;
					height: 100%;
					vertical-align: middle;
				}
			}

			.time-box {
				color: #fff;
				margin-left: 36px;
			}

			.start-taste-line {
				display: flex;
				align-items: center;
			}

			.start-taste-line hr {
				background-color: #61c9f0; //声波颜色
				width: 2px;
				height: 8px;
				display: inline-block;
				border: none;
				margin-right: 5px;
			}


			.hr1 {
				height: 6px !important;
			}

			.hr2 {
				height: 10px !important;
			}

			.hr3 {
				height: 4px !important;
			}

			.hr4 {
				height: 10px !important;
			}

			.hr5 {
				height: 7px !important;
			}

			.hr6 {
				height: 4px !important;
			}

			.hr7 {
				height: 10px !important;
			}

			.hr8 {
				height: 4px !important;
			}

			.hr9 {
				height: 6px !important;
			}

			.hr10 {
				height: 7px !important;
			}

			.hr11 {
				height: 10px !important;
			}

			.hr12 {
				height: 6px !important;
			}

			.time-box {
				.active {
					hr {
						height: 3px !important;
						animation: note 0.6s ease-in-out;
						animation-iteration-count: infinite;
						animation-direction: alternate;
						animation-delay: -1s;
					}

					.hr2 {
						animation-delay: -0.11s;
					}

					.hr3 {
						animation-delay: -0.10s;
					}

					.hr4 {
						animation-delay: -0.9s;
					}

					.hr5 {
						animation-delay: -0.8s;
					}

					.hr6 {
						animation-delay: -0.7s;
					}

					.hr7 {
						animation-delay: -0.6s;
					}

					.hr8 {
						animation-delay: -0.5s;
					}

					.hr9 {
						animation-delay: -0.4s;
					}

					.hr10 {
						animation-delay: -0.3s;
					}

					.hr11 {
						animation-delay: -0.2s;
					}

					.hr12 {
						animation-delay: -0.1s;
					}

					.hr8 {
						animation-delay: -0.5s;
					}
				}
			}

			@keyframes note {
				from {
					transform: scaleY(1);
				}

				to {
					transform: scaleY(4);
				}
			}

			.duration {
				font-size: 14px;
				color: #61c9f0;
				margin-left: 135px;
				position: absolute;
				font-weight: 700;
			}

		}
	}

	.vip-img {
		width: 9px;
		height: 9px;
		position: absolute;
		bottom: 9px;
		right: -2px;
	}

	.vip {
		position: absolute;
		right: -10px;
		bottom: -10px;
		width: 21px;
		height: 21px;
		padding: 10px;
		box-sizing: content-box;
	}

	.message-state {
		background: #ccc !important;
		width: 64px;
		height: 20px;
		background: #61c9f0;
		border-radius: 10px 0 0 10px;
		opacity: .9;
		position: absolute;
		top: 10px;
		right: 0;
		text-align: center;
		line-height: 20px;
		color: #fff;
		font-size: 12px;
	}

	.message-list {
		.status1 {
			background: #4c92d4 !important;
		}

		.status2 {
			background: #fd8d26 !important;
		}

		.status3 {
			background: #21b464 !important;
		}

		.status4 {
			background: red !important;
		}
	}

	.giftShow {
		width: 100vw;
		padding: 10px 20px;

		.each-line {
			overflow: hidden;
			height: 52px;
			line-height: 52px;
			font-size: 16px;
			color: #666;
			border-bottom: 1px solid #ededed;

			.iconSelect {
				position: relative;
				top: 9px;
				display: inline-block;
				width: 30px;
				height: 30px;
				background: url(https://oss-img.mengzuhao.cn/selectDisable.png) no-repeat;
				background-size: contain !important;
			}

			.iconSelect.active {
				background: url(https://oss-img.mengzuhao.cn/selectActive.png) no-repeat;
			}
		}
	}
</style>