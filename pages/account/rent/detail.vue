<template>

	<view style="background-color: #f4f4f5;">

		<view class="good-frame">
			<customNavbar title="商品详情" />
			<view class="good-info">
				<u-swiper height="500" :list="data.image_url" circular :autoplay="false" border-radius="0"
					:current="imageIndex" @tap="previewImage"></u-swiper>
				<view class="info p-b-10">
					<h3 class="details-title m-t-10 p-l-r-10">
						{{data.name}}
					</h3>
					<view class="text-center m-t-5" style="justify-content: space-between;">
						<p class="p-l-10">账号:{{data.zid}}</p>
						<view class="p-5"
							style="border-radius: 100px 0 0 100px; display: flex;align-items: center;box-shadow: 3px -2px 17px 0 hsla(0,0%,91%,.5);">
							<img src="@/static/imgs/kefu.png" alt="" style="width: 20px;">
							<span
								@click="$utils.handleNavigate('/pages/common/service?accountId=' + data.id)">联系客服</span>
						</view>
					</view>
					<p class="lable-commodity m-t-10 p-l-r-10">
						<text class="m-r-5">{{data.zoneName}}{{data.serverName}}</text>
						<text class="m-r-5">{{data.schoolName}}/{{data.bodyName}}</text>
					</p>

					<p class="lable-commodity m-t-10 p-l-r-10">
						<text class="m-r-5" v-if="data.guarantee">租号保障</text>
						<text class="m-r-5" v-if="data.is_hour">{{data.minHour}}小时起租</text>
					</p>

					<view class="lable-commodity m-t-10 p-l-r-10">
						<span class="p-l-5 m-r-5" style="color: #fa7e12;">
							¥<span class="price">{{data.showHourRent}}</span>/时
						</span>
						<text class="tag m-r-5">近期出租{{data.rentNum}}次</text>
						<text class="tag m-r-5">{{data.collectNum}}收藏</text>
					</view>
				</view>
			</view>

			<view class="good-item" style="font-size: 14px;">
				<view class="m-t-10 package" @click="$refs.rentRef.show = true">
					<p>
						<span class="p-title">套餐</span>
						<span class="p-activity">
							<text class="m-r-10" v-if="data.is_hour">时租{{data.showHourRent}}元</text>
							<text class="m-r-10" v-if="data.is_day">日租{{data.showDayRent}}元</text>
							<text class="m-r-10" v-if="data.is_month">月租{{data.showMonthRent}}元</text>
						</span>
					</p>
					<div class="arrow-right"></div>
				</view>
				<view class="m-t-10 package" v-if="data.is_gift && data.gift.length" @click="$refs.giftRef.show = true">
					<p>
						<span class="p-title">活动</span>
						<span class="p-activity">
							<text
								class="m-r-10">满{{data.gift[0].full_val}}{{data.gift[0].full_name}}送{{data.gift[0].gift_val}}{{data.gift[0].gift_name}}
							</text>
						</span>
					</p>
					<div class="arrow-right"></div>
				</view>
			</view>

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



			<u-gap height="25" bg-color="#f2f2f3"></u-gap>
			<view class="good-item" style="font-size: 14px;">
				<view class="m-t-10 package">
					<span class="p-title">查询事项</span>
				</view>
				<ul style="padding: 0;">
					<li @click="$utils.handleNavigate('/pages/account/rent/jx3?name=attribute&id=' + data.id)">查询角色装备属性
					</li>
					<li v-if="data.jjc"
						@click="$utils.handleNavigate('/pages/account/rent/jx3?name=recent&id=' + data.id)">查询竞技场战绩</li>
					<li v-if="data.copy"
						@click="$utils.handleNavigate('/pages/account/rent/jx3?name=teamCdList&id=' + data.id)">查询副本CD
					</li>
				</ul>
			</view>

			<u-gap height="25" bg-color="#f2f2f3"></u-gap>
			<view class="good-item" style="font-size: 14px;">
				<p class="p-title">账号简介</p>
				<view>
					<ul style="padding: 0;">
						<li v-if="data.jjc==1">允许JJC</li>
						<li v-if="data.copy==1">允许打副本</li>
						<li v-if="releaseSelect.cw==1">有cw</li>
						<li v-if="releaseSelect['帮战']==1">允许打帮战</li>
						<block v-for="(item, index) in data.fitout">
							<li>{{item.name}}{{item.fitoutType_name}}{{item.score}}</li>
						</block>
						<li v-if="data.pushbar" @click="$utils.copy(data.pushbar)">推栏ID {{data.pushbar}}</li>
					</ul>
					<view class="tags" v-if="data.bright">
						<span v-for="(item, index) in data.bright" class="label m-b-5">{{item}}</span>
					</view>

					<view class="m-t-15">
						<u-read-more close-text="显示更多" v-if="data.desc" show-height="200" text-indent="0">
							<view class="description">
								<span v-for="(item, index) in data.desc_arr"
									style="font-size: 12px;display: block;">{{item}}</span>
							</view>
						</u-read-more>
						<view class="img" v-if="data.images">
							<u-swiper bg-color="transparent" height="500" :autoplay="false" v-if="data.images"
								:effect3d="true" :list="data.images_url" :current="imageIndex1"
								@tap="previewImage1"></u-swiper>

						</view>
					</view>

					<view cstyle="font-size: 14px;">
						<view class="m-t-10 package">
							<span class="p-title">租客评论（{{commentTotal}}）</span>
							<view class="arrow-right"
								@click="$utils.handleNavigate('/pages/account/comment?id=' + data.id)">
							</view>
						</view>
						<comment-list :id="data.id" @total="(total)=>{commentTotal = total}" />
					</view>
					<question :list="config.data.rentQuestion" />

				</view>

			</view>



			<subject-list :type="1" />

			<view class="buttom-line"></view>

			<view class="buttom">
				<view class="buttom-content" style="flex: 1;justify-content: space-evenly;}">
					<view class="buttom-content" @click="collectClick">
						<u-icon name="heart" size="45" v-if="!collect"></u-icon>
						<u-icon name="heart-fill" size="45" color="#ff5c5c" v-else></u-icon>
						<span>收藏</span>
					</view>
					<view class="buttom-content" @click="$refs.qrcode.changeShow()">
						<u-icon name="zhuanfa" size="45"></u-icon>
						<span>分享</span>
					</view>
				</view>
				<view style="flex: 1;">
					<u-button v-if="user.info.score < 60" :disabled="user.info.score < 60" type="success"
						style="background-color: #61c9f0;" class="mint-button pull-right">
						信誉分过低，禁止租用
					</u-button>
					<block v-else>
						<u-button class="submit" :type="data.orderStatus?'warning':'success'"
							style="background-color: #61c9f0;"
							@click="$utils.isLoginReLaunch('/pages/order/create/rent?id=' + id)" v-if="data.status == 2"
							:disabled="data.orderStatus">
							<view v-if="data.orderStatus">
								<view style="line-height: normal;">租用中</view>
								<view style="line-height: normal;font-weight: normal; font-size: 12px; display: block;">
									{{data.expiretime}}后下单
								</view>
							</view>
							<text v-else>立即租用</text>
						</u-button>
						<u-button v-else class="submit" disabled="" type="warning">
							<text>{{data.status_text}}</text>
						</u-button>
					</block>
				</view>
			</view>

		</view>

		<rent-popup :data="data" ref="rentRef" />
		<gift-popup :list="data.gift" ref="giftRef" />
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
		},
		data() {
			return {
				data: {
					gift: []
				},
				shareUrl: null,
				collect: false,
				id: null,
				commentTotal: 0,
				releaseSelect: {},
				imageIndex1: 0,
				imageIndex: 0
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
					this.releaseSelect = JSON.parse(decodeURIComponent(data.releaseSelect))

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

	.p-activity {
		font-size: 12px;
		padding-left: 10px;
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
	}

	.details-title {
		font-size: 15px;
		font-weight: 600;
		color: #203152;
		line-height: 22px;
	}

	.good-indent {
		margin-top: 10px;
		background-color: #fff;
		width: 100%;
		height: 200px;
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

	.good-info {
		background-color: #ffffff;

		.info {}
	}


	.buttom-line {
		height: 120rpx;
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

	.good-frame {
		.img {
			image {
				width: 100%;
			}
		}
	}

	.price {
		font-size: 22px;
		font-style: normal;
		font-weight: 600;
	}

	.description {
		line-height: 24px;
		font-weight: 400;
		color: #333;
		margin-bottom: 10px;
		word-wrap: break-word;
	}
</style>