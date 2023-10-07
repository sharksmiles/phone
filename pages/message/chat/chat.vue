<template>
	<view class="content">
		<u-navbar :title="chat.friend.nickname" :autoBack="true" :custom-back="$navigateBack" :immersive="true">
		</u-navbar>
		<u-gap height="88"></u-gap>

		<scroll-view class="chat container-list" scroll-y="true" :scroll-with-animation="true" :scroll-top="scrollTop"
			:scroll-into-view="scrollToViewID">
			<view class="chat-main" id="chat-box">
				<view class="chat-ls" v-for="(item,index) in chat.message" :key="index" :id="'msg'+ index">
					<view class="msg-m msg-left" v-if="item.user_id !=  user.info.id">
						<image class="user-img" :src="chat.friend.avatar"></image>
						<view class="message">
							<rich-text v-if="item.content_type == 1" :nodes="item.content"
								class="rich-text msg-text"></rich-text>
							<image v-if="item.content_type == 2" :src="item.content" class="msg-img" mode="widthFix">
							</image>
						</view>
					</view>
					<view class="msg-m msg-right" v-if="item.user_id ==  user.info.id">
						<image class="user-img" :src="user.info.avatar"></image>
						<view class="message">
							<rich-text v-if="item.content_type == 1" :nodes="item.content"
								class="rich-text msg-text"></rich-text>
							<image v-if="item.content_type == 2" :src="item.content" class="msg-img" mode="widthFix">
							</image>
							<view class="read">
								{{item.read == 1 || !item.read?"未读":"已读"}}
							</view>
						</view>
					</view>
					<view class="chat-time" :class="item.user_id !=  user.info.id?'left':'right'"
						v-if="item.createtime_text">{{item.createtime_text}}</view>
				</view>
			</view>
		</scroll-view>

		<view class="submit">
			<view class="submit-block">
				<view class="submit-chat">
					<view class="bt-img" @tap="chooseImage">
						<image src="@/static/imgs/chat/image.png"></image>
					</view>
					<!-- 文本框 -->
					<textarea auto-height="true" class="chat-send btn" v-model="value"></textarea>
					<view class="bt-img" @tap="showEmoji = !showEmoji">
						<image src="@/static/imgs/chat/emoji.png"></image>
					</view>
					<view class="bt-img" @tap="send">
						<image src="@/static/imgs/chat/send.png"></image>
					</view>
				</view>

				<swiper v-if="showEmoji" class="swiper-list" :indicator-dots="true">
					<swiper-item v-for="(parentItem, parentIndex) in dataList" :key="parentIndex">
						<view class="swiper-item">
							<block v-for="item in parentItem">
								<image :src="item.value | textOrEmoji" :key="item.value" @click="clickEmoji(item)"
									mode="aspectFit"></image>
							</block>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
	</view>
</template>

<script>
	let timeOut = 1000
	import {
		mapState
	} from 'vuex';
	import env from '@/util/env.js';
	import {
		isSend
	} from '@/api/message';
	export default {
		// components: {
		// 	TUICallKit
		// },
		computed: {
			...mapState(["chat", "user"]),
		},
		watch: {
			"chat.message": {
				handler(val) {
					let that = this
					setTimeout(function() {
						uni.createSelectorQuery().select('#chat-box').boundingClientRect(function(rect) {
							that.scrollTop = rect.height
							timeOut = 100
						}).exec()
					}, timeOut)
				}
			}
		},
		data() {
			return {
				friend_id: 0,
				scrollToViewID: '',
				value: "",
				scrollTop: 0,
				showEmoji: false,
				dataList: [
					[{
							lable: '[爱你]',
							value: 'aini'
						},
						{
							lable: '[奥特曼]',
							value: 'aoteman'
						},
						{
							lable: '[拜拜]',
							value: 'baibai'
						},
						{
							lable: '[抱抱]',
							value: 'baobao'
						},
						{
							lable: '[悲伤]',
							value: 'beishang'
						},
						{
							lable: '[并不简单]',
							value: 'bingbujiandan'
						},
						{
							lable: '[鄙视]',
							value: 'bishi'
						},
						{
							lable: '[闭嘴]',
							value: 'bizui'
						},
						{
							lable: '[馋嘴]',
							value: 'chanzui'
						},
						{
							lable: '[吃惊]',
							value: 'chijing'
						},
						{
							lable: '[打哈欠]',
							value: 'dahaqi'
						},
						{
							lable: '[打脸]',
							value: 'dalian'
						},
						{
							lable: '[敲头]',
							value: 'ding'
						},
						{
							lable: '[狗头]',
							value: 'doge'
						},
						{
							lable: '[二哈]',
							value: 'erha'
						},
						{
							lable: '[费解]',
							value: 'feijie'
						},
						{
							lable: '[肥皂]',
							value: 'feizao'
						},
						{
							lable: '[感冒]',
							value: 'ganmao'
						},
						{
							lable: '[鼓掌]',
							value: 'guzhang'
						},
						{
							lable: '[哈哈]',
							value: 'haha'
						},
						{
							lable: '[害羞]',
							value: 'haixiu'
						},
						{
							lable: '[汗]',
							value: 'han'
						},
						{
							lable: '[呵呵]',
							value: 'hehe'
						},
						{
							lable: '[嘿嘿嘿]',
							value: 'heiheihei'
						}
					],
					[{
							lable: '[黑线]',
							value: 'heixian'
						},
						{
							lable: '[哼]',
							value: 'heng'
						},
						{
							lable: '[坏笑]',
							value: 'huaixiao'
						},
						{
							lable: '[花心]',
							value: 'huaxin'
						},
						{
							lable: '[急眼]',
							value: 'jiyan'
						},
						{
							lable: '[可爱]',
							value: 'keai'
						},
						{
							lable: '[可怜]',
							value: 'kelian'
						},
						{
							lable: '[酷]',
							value: 'ku'
						},
						{
							lable: '[骷髅]',
							value: 'kulou'
						},
						{
							lable: '[困]',
							value: 'kun'
						},
						{
							lable: '[懒得理你]',
							value: 'landelini'
						},
						{
							lable: '[泪]',
							value: 'lei'
						},
						{
							lable: '[怒]',
							value: 'nu'
						},
						{
							lable: '[怒骂]',
							value: 'numa'
						},
						{
							lable: '[钱]',
							value: 'qian'
						},
						{
							lable: '[亲亲]',
							value: 'qinqin'
						},
						{
							lable: '[傻眼]',
							value: 'shayan'
						},
						{
							lable: '[生病]',
							value: 'shengbing'
						},
						{
							lable: '[失望]',
							value: 'shiwang'
						},
						{
							lable: '[衰]',
							value: 'shuai'
						},
						{
							lable: '[睡觉]',
							value: 'shuijiao'
						},
						{
							lable: '[思考]',
							value: 'sikao'
						},
						{
							lable: '[太开心]',
							value: 'taikaixin'
						},
						{
							lable: '[摊手]',
							value: 'tanshou'
						}
					],
					[{
							lable: '[舔]',
							value: 'tian'
						},
						{
							lable: '[偷笑]',
							value: 'touxiao'
						},
						{
							lable: '[吐]',
							value: 'tu'
						},
						{
							lable: '[挖鼻孔]',
							value: 'wabishi'
						},
						{
							lable: '[委屈]',
							value: 'weiqu'
						},
						{
							lable: '[污]',
							value: 'wu'
						},
						{
							lable: '[笑哭]',
							value: 'xiaoku'
						},
						{
							lable: '[嘻嘻]',
							value: 'xixi'
						},
						{
							lable: '[嘘]',
							value: 'xu'
						},
						{
							lable: '[疑问]',
							value: 'yiwen'
						},
						{
							lable: '[右哼哼]',
							value: 'youhengheng'
						},
						{
							lable: '[晕]',
							value: 'yun'
						},
						{
							lable: '[允悲]',
							value: 'yunbei'
						},
						{
							lable: '[抓狂]',
							value: 'zhuakuang'
						}
					]
				]
			}
		},
		mounted() {
			this.safariHacks();
		},
		filters: {
			textOrEmoji(value) {
				return `${env.domain}/emoji/d_${value}.gif`
			}
		},
		onLoad(options) {
			if (options.id) {
				this.friend_id = options.id
				timeOut = 1000
				this.$store.dispatch("chat/detailInit", {
					friend_id: options.id
				})

			}
		},
		methods: {
			safariHacks() {
				let convertStyle = function() {
					setTimeout(function() {
						let bottomHeight = document.querySelector(".submit").offsetHeight + "px",
							navHeight = document.querySelector(".u-navbar-inner").offsetHeight + "px",
							windowsVH = window.innerHeight + "px";
						document.querySelector('.container-list').style.setProperty("height", "calc(" +
							windowsVH + " - " + navHeight + " - " + bottomHeight + ")", "important");
					}, 1000)
				}
				window.addEventListener('resize', function() {
					convertStyle()
				});
				convertStyle()
			},
			send() {
				let that = this,
					value = this.value

				if (value == "" || value == null || value == undefined) return;
				let data = {
					content: value,
					content_type: 1,
					createtime_text: this.$utils.formatTime()
				};
				that.sendPush(data)
				that.value = ""
				that.showEmoji = false
			},
			sendPush(data) {
				let that = this
				data.friend_id = that.friend_id
				isSend(data).then(res => {
					if (res.code == 1) {
						data.user_id = that.user.info.id
						data.avatar = that.user.info.avatar
						that.$store.commit("chat/msgSend", data)
					} else {
						uni.showModal({
							title: "提示",
							content: res.msg,
							showCancel: false
						});
					}
				})
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
									content: data.data.fullurl,
									content_type: 2
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
			},
			clickEmoji(item) {
				let value = this.value
				this.value = value + item.lable
			},
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
	}

	.content {
		height: 100%;
		background-color: rgba(244, 244, 244, 1);
	}

	.chat {
		height: 100%;

		.chat-main {
			padding-left: 32rpx;
			padding-right: 32rpx;
			padding-top: 20rpx;
			// padding-bottom: 120rpx;  //获取动态高度
			display: flex;
			flex-direction: column;
		}

		.chat-ls {
			.chat-time {
				font-size: 24rpx;
				color: rgba(39, 40, 50, 0.3);
				line-height: 34rpx;
				padding: 10rpx 0rpx;
				text-align: center;
			}

			.chat-time.left {
				text-align: left;
				margin-left: 80rpx;
			}

			.chat-time.right {
				text-align: right;
				margin-right: 80rpx;
			}

			.msg-m {
				display: flex;
				padding: 20rpx 0;
				padding-bottom: 0;

				.user-img {
					flex: none;
					width: 80rpx;
					height: 80rpx;
					border-radius: 20rpx;
				}

				.message {
					flex: none;
					max-width: 480rpx;
					position: relative;
				}

				.msg-text {
					font-size: 32rpx;
					color: rgba(39, 40, 50, 1);
					line-height: 44rpx;
					padding: 18rpx 24rpx;
					display: inherit;
				}

				.msg-img {
					max-width: 400rpx;
					border-radius: 20rpx;
					margin-right: 8px;
				}
			}

			.msg-left {
				flex-direction: row;

				.msg-text {
					margin-left: 16rpx;
					background-color: #fff;
					border-radius: 0rpx 20rpx 20rpx 20rpx;
				}

				.msg-img {
					margin-left: 8px !important;
				}

			}

			.msg-right {
				flex-direction: row-reverse;

				.msg-text {
					margin-right: 16rpx;
					background-color: rgba(255, 228, 49, 0.8);
					border-radius: 20rpx 0rpx 20rpx 20rpx;
				}

				.read {
					display: flex;
					position: absolute;
					top: 0;
					left: -35px;
					color: #6e7981;
				}
			}
		}
	}

	.submit {
		background: rgba(244, 244, 244, 0.96);
		border-top: 1px solid rgba(39, 40, 50, 0.1);
		width: 100%;
		position: fixed;
		bottom: 0;
		z-index: 100;
		// padding-bottom: var(--status-bar-height);
		padding-bottom: env(safe-area-inset-bottom);
	}

	.submit-chat {
		width: 100%;
		display: flex;
		align-items: flex-end;
		box-sizing: border-box;
		padding: 14rpx 14rpx;

		image {
			width: 56rpx;
			height: 56rpx;
			margin: 0 10rpx;
			flex: auto;
		}

		.btn {
			flex: auto;
			background-color: #fff;
			border-radius: 10rpx;
			padding: 20rpx;
			margin: 0 10rpx;
		}

		.chat-send {
			line-height: 44rpx;
		}

		.record {
			line-height: 44rpx;
			text-align: center;
			font-size: 20rpx;
			color: rgba(39, 40, 50, 0.6);
		}
	}

	.submit-block {
		.swiper-list {
			.swiper-item {
				display: flex;
				align-items: center;
				flex-wrap: wrap;

				image {
					width: 12.5%;
					height: 60upx;
					margin-bottom: 20upx;
				}
			}
		}
	}

	.rich-text {
		word-break: break-all;
		white-space: pre-line;
	}
</style>