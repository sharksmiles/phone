<template>
	<view>
		<customNavbar :title="(data.release_type == 2?'陪玩':'代练') + '详情'" />
		<view class="accompany" style="position: relative; background: rgb(255, 255, 255); height: 180px;">
			<view class="mint-swipe" style="height: 140px;">
				<view class="mint-swipe-items-wrap">
					<u-swiper :current="imageIndex" @tap="previewImage" :list="data.image_url"></u-swiper>
				</view>
			</view>
			<view class="share-avatar oh">
				<view class="pull-left" style="position: relative;">
					<img width="90" height="90" class="pull-left"
						style="border-radius: 50%; overflow: hidden; border: 2px solid rgb(255, 255, 255);"
						:src="data.userInfo.avatar">
					<img v-if="data.userInfo.official_certification" src="@/static/imgs/vip.png" alt="" class="vip">
				</view>
				<div class="username pull-left m-t-20" style="display: block; margin-left: 16px;">
					<div class="block">
						<text>{{data.userInfo.nickname}}</text>
					</div>
					<text class="idcard">用户ID: <span :style="{color:fontColor}">{{data.userInfo.zid}}</span> </text>
					<img v-if="data.userInfo.beautiful" :src="beautiful" alt="" height="20px" width="20px"
						style="position: relative; top: 5px; left: 1px;">
				</div>
			</view>
			<view class="month_play">本月接单时长 {{data.sumHour}} 小时</view>
		</view>
		<view class="details bg-mainbg">
			<view class="info bg-white">
				<h3 class="p-l-r-10 p-t-5">
					<!-- <span class="tagOrderOrConfirm">
						需要预约时间
					</span> -->
					{{data.name}}
				</h3>
				<view class="text-center m-t-5" style="justify-content: space-between;">
					<p class="p-l-r-10">技能ID:{{data.zid}}</p>
					<view class="p-5"
						style="border-radius: 100px 0 0 100px; display: flex;align-items: center;box-shadow: 3px -2px 17px 0 hsla(0,0%,91%,.5);">
						<img src="@/static/imgs/kefu.png" alt="" style="width: 20px;">
						<span @click="$utils.handleNavigate('/pages/common/service?accountId=' + data.id)">联系客服</span>
					</view>
				</view>
				<p class="p-l-r-10 lable-commodity m-t-10">
					<text class="m-r-5">{{data.zoneName}}{{data.serverName}}</text>
					<text class="m-r-5">{{data.schoolName}}/{{data.bodyName}}</text>
				</p>
				<!-- <view class="p-l-r-10 lable-commodity m-t-10">
					<span class="p-l-5 m-r-5" style="color: #fa7e12;">
						¥<span class="price">{{data.showHourRent}}</span>/时
					</span>
				</view> -->
				<view class="lable-commodity p-l-r-10 m-t-10">
					<text class="tag m-r-5">近期接单{{data.rentNum}}笔</text>
					<text class="tag m-r-5">{{data.collectNum}}收藏</text>
				</view>

				<view v-if="data.userInfo.audio_path" class="voice-card bg-white m-t-10 p-l-r-10" @click="soundClick">
					<view class="voice-bd">
						<view class="icon-play">
							<image v-if="!soundShow" src="@/static/imgs/icon-play2.png" alt="">
								<image v-else src="@/static/imgs/icon-pause2.png" alt="">
						</view>
						<view class="time-box ">
							<span class="start-taste-line" :class="soundShow?'active':''">
								<hr class="hr1" />
								<hr class="hr2" />
								<hr class="hr3" />
								<hr class="hr4" />
								<hr class="hr5" />
								<hr class="hr6" />
								<hr class="hr7" />
								<hr class="hr8" />
								<hr class="hr9" />
								<hr class="hr10" />
								<hr class="hr11" />
								<hr class="hr12" />
							</span>
						</view>
						<text class="duration">{{data.userInfo.audio_duration}}"</text>
					</view>
				</view>
			</view>

			<view class="good-item" style="font-size: 14px;">
				<view class="m-t-10 package" @click="$refs.rentRef.show = true">
					<p>
						<span class="p-title">代练项目</span>
						<span class="p-activity">
							<text class="m-r-10" v-for="(item, index) in data.trainingPrice"
								v-if="index < 3">{{item.name}} {{item.price}}元</text>
						</span>
					</p>
					<div class="arrow-right"></div>
				</view>
			</view>

		</view>
		<u-gap height="20" bg-color="#f2f2f2"></u-gap>



		<u-gap height="20" bg-color="#f2f2f2"></u-gap>
		<view class="good-item" style="font-size: 14px;">
			<view class="m-t-10 ">
				<p class="p-title" style="margin: 10px 0 ;">官方认证</p>
				<view class="tags" v-if="data.auth_label">
					<span v-for="(item, index) in data.auth_label" class="label m-b-5">{{item}}</span>
				</view>
				<u-read-more close-text="显示更多" v-if="data.auth_text" show-height="200" text-indent="0">
					<view class="description">
						<span style="font-size: 12px;display: block;">{{data.auth_text}}</span>
					</view>
				</u-read-more>
			</view>
		</view>

		<u-gap height="20" bg-color="#f2f2f2"></u-gap>
		<view class="good-item" style="font-size: 14px;">

			<p class="p-title">历史服务展示</p>
			<view class="m-t-10">
				<view class="tags" v-if="data.aclass">
					<span v-for="(item, index) in data.aclass" class="label m-b-5">{{item}}</span>
				</view>




				<view class="m-t-15">
					<u-read-more close-text="显示更多" v-if="data.desc" show-height="200" text-indent="0">
						<view class="description">
							<span v-for="(item, index) in data.desc_arr"
								style="font-size: 12px;display: block;">{{item}}</span>
						</view>
					</u-read-more>
					<view class="m-t-10">
						<u-swiper bg-color="transparent" height="500" :autoplay="false" v-if="data.images"
							:effect3d="true" :list="data.images_url" :current="imageIndex1"
							@tap="previewImage1"></u-swiper>
					</view>
				</view>

				<view style="font-size: 14px;">
					<view class="m-t-10 package">
						<span class="p-title">用户评论（{{commentTotal}}）</span>
						<view class="arrow-right"
							@click="$utils.handleNavigate('/pages/account/comment?id=' + data.id)"></view>
					</view>
					<comment-list :id="data.id" @total="(total)=>{commentTotal = total}" />
				</view>
				<question :list="config.data.trainingQuestion" />

			</view>

		</view>



		<view class="buttom-line"></view>

		<view class="buttom">
			<view class="buttom-content" style="flex: 1;justify-content: space-evenly;}">
				<view class="buttom-content" @click="collectClick">
					<u-icon name="heart" size="45" v-if="!collect"></u-icon>
					<u-icon name="heart-fill" size="45" color="#ff5c5c" v-else></u-icon>
					<span>收藏</span>
				</view>
				<view class="buttom-content"
					@click="$utils.handleNavigate('/pages/message/chat/chat?id=' + data.userInfo.id)">
					<u-icon name="chat" size="45"></u-icon>
					<span>聊天</span>
				</view>
				<!-- <view class="buttom-content" @click="$refs.qrcode.changeShow()">
					<u-icon name="zhuanfa" size="45"></u-icon>
					<span>分享</span>
				</view> -->
			</view>
			<view style="flex: 1;">
				<u-button v-if="user.info.score < 60" :disabled="user.info.score < 60" type="success"
					style="background-color: #61c9f0;" class="mint-button pull-right">
					信誉分过低，禁止下单
				</u-button>
				<block v-else>
					<!-- <u-button class="submit"
						:type="data.orderStatus?'warning':'success'"
						@click="$utils.isLoginReLaunch('/pages/order/create/training?id=' + id)"
						v-if="data.status == 2"
						:disabled="data.orderStatus">
						<view v-if="data.orderStatus">
							<view style="line-height: normal;">代练中</view>
							<view style="line-height: normal;font-weight: normal; font-size: 12px; display: block;">{{data.expiretime}}后下单</view>
						</view>
						<text v-else>立即下单</text>
					</u-button> -->
					<u-button class="submit" type="success" style="background-color: #61c9f0;"
						@click="$utils.isLoginReLaunch('/pages/order/create/training?id=' + id)"
						v-if="data.status == 2">
						<text>立即下单</text>
					</u-button>
					<u-button v-else class="submit" disabled="" type="warning">
						<text>{{data.status_text}}</text>
					</u-button>
				</block>
			</view>
		</view>

		<training-price-popup :data="data" ref="rentRef" />
		<qrcode ref="qrcode" :url="shareUrl" />
	</view>

</template>

<script>
	import {
		mapState
	} from 'vuex';
	import {
		detail,
		collect
	} from "@/api/index.js"

	export default {
		computed: {
			...mapState(['user', "config"]),
			fontColor() {
				return this.data.userInfo.is_cute_id == 2 ? '#ff233e' : this.data.userInfo.is_official_id == 2 ?
					'#fede3c' :
					'#000'
			}
		},
		data() {
			return {
				data: {
					userInfo: {}
				},
				shareUrl: null,
				collect: false,
				id: null,
				soundShow: false,
				commentTotal: 0,
				imageIndex: 0,
				imageIndex: 1,
				beautiful: ''
			}
		},
		onLoad(options) {
			this.id = options.id
			this.init()
		},
		onReady() {
			this.shareUrl = window.location.href
		},
		methods: {
			init() {
				let that = this
				detail(this.id).then(res => {
					const {
						data
					} = res

					this.collect = data.collect || false
					data.userInfo.beautiful ? this.beautiful = require('../../../fonts/img/' + data.userInfo
						.beautiful + '.gif') : ''

					that.data = data
				})
			},
			collectClick() {
				let that = this
				if (this.user.hasLogin) {
					uni.showToast({
						title: "请稍后...",
						icon: "loading",
					});
					collect(this.id).then(res => {
						that.collect = !that.collect
						that.$u.toast(res.msg)
					})
				} else {
					this.$utils.reLaunchLogin()
				}
			},
			soundClick() {
				if (this.soundShow) {
					this.$utils.soundDestroy()
					this.soundShow = false
					return
				}
				this.$utils.playSound(this.data.userInfo.audio_path),
					this.soundShow = true
			},
			previewImage1() {
				uni.previewImage({
					current: this.imageIndex1, //预览图片的下标
					urls: this.data.images_url
				})
			},
			previewImage() {
				uni.previewImage({
					current: this.imageIndex, //预览图片的下标
					urls: this.data.image_url
				})
			}
		}

	}
</script>

<style lang="scss" scoped>
	.idcard {
		padding: 1px 5px;
		background: #e5e5e5;
		border-radius: 15px;
		font-size: 12px !important;
		font-weight: 400 !important;
		color: #203152 !important;
		line-height: 17px !important;
		text-align: center;
	}

	.buttom-content span {
		height: 22px;
		font-size: 16px;
		font-weight: 600;
		color: #666;
	}

	.buttom-content {
		padding: 3px;
		display: flex;
		align-items: center;
	}

	.buttom {
		display: flex;
		position: fixed;
		bottom: 0;
		width: 100%;
		left: 0;
		padding: 6px 0px;
		background: #fafafa !important;
		align-items: center;

		.submit {
			border-radius: 25px;
			font-weight: 600;
			color: #fff;
			font-size: 16px;
		}
	}

	.accompany {

		.mint-swipe,
		.mint-swipe-items-wrap {
			overflow: hidden;
			position: relative;
			height: 100%;

			.is-active {
				display: block;
				transform: none;
			}
		}

		.share-avatar {
			position: absolute;
			left: 18px;
			bottom: 0;
			z-index: 5;

			.username {
				text {
					font-size: 20px;
					font-weight: 600;
					color: #fff;
					line-height: 28px;
				}

				p {
					padding: 1px 5px;
					background: #e5e5e5;
					border-radius: 15px;
					font-size: 12px;
					font-weight: 400;
					color: #203152;
					line-height: 17px;
					text-align: center;
				}
			}
		}

		.month_play {
			display: flex;
			align-items: center;
			position: absolute;
			right: 13px;
			top: 15px;
			width: 150px;
			height: 26px;
			font-size: 12px;
			color: #fff;
			background: rgba(0, 0, 0, .3);
			border-radius: 20px;
			justify-content: center;
			z-index: 3;
		}
	}

	.details {
		.info h3 {
			font-size: 16px;
			font-weight: 600;
			color: #203152;
			line-height: 22px;

			.tagOrderOrConfirm {
				position: relative;
				top: -1px;
				display: inline-block;
				padding: 0 5px;
				height: 17px;
				line-height: 17px;
				color: #958dfb;
				background: rgba(149, 141, 251, .1);
				border-radius: 8px;
				box-sizing: border-box;
				font-size: 12px;
			}
		}
	}

	.lable-commodity {
		text {
			padding: 5rpx 10rpx;
			font-size: 12px;
			background: #ffeed5;
			border-radius: 9px;
			color: #2e2c2b;
		}

		.tag {
			background: rgba(250, 126, 18, .1);
			color: #f6790c;
		}

		.price {
			font-size: 22px;
			font-style: normal;
			font-weight: 600;
		}
	}

	ul {
		overflow: hidden;
		display: block;
		list-style-type: disc;
		margin-block-end: 1em;
		margin-inline-start: 0px;
		margin-inline-end: 0px;
		padding-inline-start: 10px;

		li {
			overflow: hidden;
			width: 30%;
			height: 44px;
			line-height: 44px;
			border-radius: 5px;
			font-weight: 500;
			text-align: center;
			margin-right: 10px;
			font-size: 12px;
			font-weight: 600;
			color: #fff;
			float: left;
			margin-top: 10px;
			background: #61c9f0;
		}
	}

	.img {
		image {
			width: 100%;
		}
	}

	.arrow-right {
		margin-right: 5px;
		width: 7px;
		height: 7px;
		background-color: transparent;
		/* 模块背景为透明 */
		border-style: solid;
		border-width: 1px 1px 0 0;
		transform: rotate(45deg);
		/*箭头方向可以自由切换角度*/

	}


	.tags {
		.label {
			margin-left: 10px;
			background: rgba(91, 197, 169, .1);
			border-radius: 8px;
			padding: 1px 10px;
			border: 1px solid #4eb59a;
			color: #0ea17a;
			font-size: 12px;
			display: inline-block;
		}
	}


	.p-title {
		height: 17px;
		font-size: 15px;
		font-weight: 600;
		color: #222;
		line-height: 17px;

		border-radius: 1px;
		display: inline-block;
	}

	.p-activity {
		font-size: 12px;
		padding-left: 10px;
	}

	.good-item {
		background-color: #fff;
		width: 100%;
		padding: 20rpx;

		.package {
			padding: 5px;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}

	.buttom-line {
		height: 120rpx;
	}

	.voice-card {
		position: unset;

		.voice-bd {
			width: 245px;
			height: 36px;

			.icon-play {
				width: 25px;
				height: 25px;
			}

			.time-box {
				margin-left: 80px;
			}

			.duration {
				margin-left: 206px;
			}
		}
	}
</style>