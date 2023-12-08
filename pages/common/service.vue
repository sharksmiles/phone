<template>
	<view>
		<view class="container">
			<scroll-view scroll-y class="list container-list" :scroll-with-animation="true" :scroll-top="scrollTop"
				:scroll-into-view="scrollToViewID">
				<view id="chat-box">
					<block v-if="account">
						<view class="goods-info">
							<view class="left">
								<img :src="account.cover_image" alt="" width="100%">
							</view>
							<view class="right">
								<view class="title">
									{{account.name}}
								</view>
								<view class="area">
									<text>
										{{account.zoneName}}{{account.serverName}}
									</text>
								</view>
								<view class="account">账号ID：{{account.id}}</view>
							</view>
						</view>
						<u-gap height="20" bg-color="#f7f7f7"></u-gap>
					</block>
					<view class="hint" style="color: #999;">
						页面非自动刷新，需手动刷新/退出重进查看新回复
					</view>
					<!-- <view class="hint">
						当前无网页客服在线，请稍后咨询感手动添加QQ各服联系我们
						QQ:1039899995,
						QQ客服工作时间上午11:00-凌晨2：00基本秒回。
					</view> -->
					<view class="hint">
						当前无网页客服在线，请稍后咨询感手动添加QQ各服联系我们
					</view>
					<view class="hint">
						QQ:1039899995
					</view>
					<view class="hint">
						QQ客服工作时间上午11:00-凌晨2：00基本秒回。
					</view>
					<view class="msg" v-for="(item,index) in list" :key="index" :id="'msg'+ index">
						<view>
							<view class="viewFlex">
								<view class="avatar">
									<image v-if="!item.user_id" src="@/static/imgs/service/system.png"></image>
									<image v-else :src="user.info.avatar"></image>
								</view>
								<view class="time">
									{{item.createtime_text}}
								</view>
							</view>
							<view class="text">
								<rich-text v-if="item.type == 1" :nodes="item.content"></rich-text>
								<image v-if="item.type == 2" :src="item.content" mode="widthFix"></image>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>

			<view class="bottom-block">
				<view class="bottom-view">
					<view class="input">
						<view class="">
							<textarea auto-height v-model="value" placeholder="请输入文本" bindinput="getInput"
								maxlength="1000" />
						</view>
						<view class="image" @click="chooseImage">
							<view></view>
						</view>
						<view class="image send" @click="send">
							<view></view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex';
	import env from "@/util/env.js"
	import {
		getMessage,
		send as sendApi
	} from "@/api/customer.js"
	import {
		detail
	} from "@/api/index.js"
	import {
		examine
	} from '@/api/common';
	export default {
		computed: {
			...mapState(['user']),
		},
		data() {
			return {
				list: [],
				value: "",
				scrollToViewID: "",
				scrollTop: 0,
				accountId: null,
				account: {}
			}
		},
		onLoad(options) {
			if (options.accountId) {
				this.accountId = options.accountId
			}
			this.init()
		},
		mounted() {
			this.safariHacks();
		},
		methods: {
			init() {
				let that = this
				getMessage().then(res => {
					that.list = res.data
					that.scrollToView()
				})
				detail(this.accountId).then(res => {
					const {
						data
					} = res
					that.account = data
				})
			},
			send() {
				let that = this,
					value = this.value

				if (value == "" || value == null || value == undefined) return;

				value = value.replace(/\+/g, '{[$add$]}')
				let data = {
					user_id: that.user.info.id,
					content: value,
					type: 1,
				};
				that.sendPush(data)

				that.value = ""
			},
			sendPush(data) {
				let that = this
				data.createtime_text = this.$utils.formatTime()

				examine({
					content: data.content,
					content_type: data.type,
				}).then(res => {
					if (res.code == 1) {
						that.list.push(data);
						that.scrollToView()
						data.accountId = that.accountId
						sendApi(data)
					} else {
						uni.showModal({
							title: "提示",
							content: res.msg,
							showCancel: false
						});
					}
				})
			},
			scrollToView() {
				let that = this
				setTimeout(function() {
					uni.createSelectorQuery().select('#chat-box').boundingClientRect(function(rect) {
						console.log(rect.height)
						that.scrollTop = rect.height
					}).exec()
				}, 100)
			},
			safariHacks() {
				let convertStyle = function() {
					setTimeout(function() {
						let bottomHeight = document.querySelector(".bottom-block").offsetHeight + "px",
							windowsVH = window.innerHeight + "px";
						document.querySelector('.container-list').style.setProperty("height", "calc(" +
							windowsVH + " - " + bottomHeight + ")", "important");
					}, 1000)
				}
				window.addEventListener('resize', function() {
					convertStyle()
				});
				convertStyle()
			},
			chooseImage() {
				const _this = this;
				uni.chooseImage({
					count: 1,
					sourceType: ['album'],
					sizeType: ['original'],
					success(res) {
						let path = res.tempFilePaths[0]
						uni.uploadFile({
							url: env.uploadUrl,
							filePath: path,
							name: "file",
							fileType: 'image',
							success: function(res) {
								let data = JSON.parse(res.data);
								_this.sendPush({
									user_id: _this.user.info.id,
									content: data.data.fullurl,
									type: 2,
								})
							},
							fail: function(err) {
								let res = JSON.parse(err)
								console.log(res)
							}
						});
					},
					fail() {
						console.log('失败', err);
					},
					complete() {
						console.log('结束');
					},
				})
			}
		}
	}
</script>

<style lang="scss">
	.container {
		background: #fff;

		.hint {
			text-align: left;
			color: #000;
			padding: 0 30rpx;
		}

		.list {
			.msg {
				padding: 20rpx;

				.avatar {
					width: 13%;
					border-radius: 10rpx;
					display: flex;
					align-items: center;

					image {
						border-radius: 50%;
						width: 80rpx;
						height: 80rpx;
					}
				}

				.time {
					color: #999;
					font-size: 14px;
				}

				.text {
					width: 87%;
					margin-left: 13%;
					color: #3b414f;
					margin-top: -15px;

					image {
						max-width: 100%;
					}
				}
			}

			.system {
				background-color: #f7f7f8;
			}
		}
	}

	.bottom-block {
		// height: 90rpx;
		padding: 20rpx 0;
		position: fixed;
		bottom: 0;
		left: 0;
		background-color: #ffffff;
		width: 100vw;

		.bottom-view {
			width: 90%;
			margin: 0 auto;
			display: flex;

			.input {
				width: 100%;
				position: relative;
				background-color: #f4f4f4;

				textarea {
					margin: 20rpx;
					border-radius: 5rpx;
					width: 70%;
				}

				.image {
					position: absolute;
					top: 0;
					right: 100rpx;
					display: flex;
					align-items: end;
					height: 100%;

					view {
						width: 70rpx;
						height: 70rpx;
						background: url(@/static/imgs/service/emoji.png) no-repeat;
						background-size: 100% 100%;
						border-radius: 5rpx;
					}
				}

				.send {
					right: 10rpx;

					view {
						background: url(@/static/imgs/service/send.png) no-repeat;
						background-size: 100% 100%;
					}
				}
			}
		}

	}

	.goods-info {
		display: flex;
		padding: 20px 20px 12px;
		background-color: #fff;

		.left {
			width: 90px;
			height: 90px;
			overflow: hidden;
			border-radius: 10px;
		}

		.right {
			flex: 1;
			padding-left: 10px;

			.title {
				overflow: hidden;
				font-size: 14px;
				line-height: 20px;
				min-height: 40px;
				color: #333;
				font-weight: 700;
				-o-text-overflow: ellipsis;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
			}

			.area {
				padding-top: 4px;
				color: #58bda2;
				display: flex;
				font-size: 11px;
				line-height: 15px;

				text {
					background-color: #eef8f5;
					padding: 0 4px;
					border-radius: 8px;
				}
			}

			.account {
				padding-top: 10px;
				color: #999;
			}
		}
	}
</style>