<template>
	<view class="container">
		<view class="goods">
			<view class="order-list bg-white-shadow p-10 m-t-20">
				<view class="listTop viewFlex">
					<img src="https://oss-img.mengzuhao.cn/school/avatar_9/定位不限.png" width="88" height="110"
						class="pull-left border-radius-10">
					<view class="listText pull-left m-l-10" style="width: 71%;">
						<h3 class="listTitle">{{data.name}}</h3>
						<p class="listCon m-t-5">
							<span>{{data.zoneName}}/{{data.serverName}}</span>
							<i>{{data.schoolName}}/{{data.bodyName}}</i>
						</p>
						<span class="rentalsNum m-t-5">近期接单{{data.rentNum}}笔</span>
					</view>
				</view>
			</view>
			<view class="goods-list-cost order-list-cost text-center m-t-10"
				style="justify-content: flex-start;flex-flow: wrap">
				<view class="goods-item m-t-10" v-for="(item, index) in data.trainingPrice"
					:class="rentIndex == index?'act':'no-act'" @click="rentIndex = index">
					<p>{{item.name}}</p>
					<span class="h">
						<block>¥<em>{{item.price}}</em>/元</block>
					</span>
				</view>
			</view>
			<view class="duration">
				<view class="top" style="overflow: hidden; margin-top: 30px; height: 33px;">
					<span class="pull-left" style="line-height: 32px;">下单件数</span>
					<view class="button-icon- pull-right">
						<i @click="dec" class="mintui mintui-iconless pull-left m-r-5"></i>
						<span class="pull-left">{{hour}}</span>
						<i @click="inc" class="mintui mintui-tianjia pull-left m-l-5"></i>
					</view>
				</view>
			</view>
			<view class="money-item m-t-10" style="overflow: hidden;">
				<span class="pull-left">单价（元）</span>
				<strong class="pull-right">¥{{univalent}}</strong>
			</view>


			<div class="wrapZsd" v-if="data.coupon.length > 0" @click="couponShow = true" style="overflow: hidden;">
				<span class="pull-left">代金券</span>
				<div class="pull-right right">
					<span class="" @click="">
						<text class="c-orange" v-if="couponIndex > 0">
							满{{data.coupon[couponIndex].full}}元 减{{data.coupon[couponIndex].discount}}元
						</text>
						<block v-else>未获得</block>
					</span>
					<u-icon name="arrow-right" class="m-t-5"></u-icon>
				</div>
			</div>

			<view class="place-order btn-fixed-bottom">
				<span class="pull-left">
					实付：
					<strong>¥{{amount}}</strong>&nbsp;&nbsp;(元)
				</span>
				<u-button :disabled="user.info.score < 60" @click="submit" type="success"
					style="background-color: #61c9f0;" class="mint-button pull-right">
					{{user.info.score < 60?"信誉分过低，禁止下单":'立即下单'}}
				</u-button>
			</view>
		</view>

		<u-popup v-model="couponShow" mode="bottom">
			<view class="giftShow">
				<view class="each-line" v-for="(item, index) in data.coupon" @click="couponClick(index, item)">
					<text>
						<block v-if="index == 0">未获得</block>
						<block v-else>满{{item.full}}减{{item.discount}}</block>
					</text>
					<div class="pull-right"><span class="iconSelect" :class="couponIndex == index? 'active': ''"></span>
					</div>
				</view>
			</view>
		</u-popup>
		<u-popup v-model="payTypeShow" mode="bottom" ref="gameRef">
			<view class="game-popup">
				<view class="title">选择支付方式</view>
				<u-grid :border="false">
					<u-grid-item :col="2" v-for="(item, index) in payType" @click="handleType(item.type)">
						<view class="item">
							<image class="image" :src="item.image_url"></image>
							<view class="name">{{item.name}}</view>
						</view>
					</u-grid-item>
				</u-grid>
			</view>
		</u-popup>

	</view>
</template>

<script>
	import {
		detail,
		create as createOrder
	} from "@/api/index.js"
	import {
		create,
		pay as payApi

	} from "@/api/order.js"
	import {
		mapState
	} from 'vuex';
	export default {
		data() {
			return {
				hour: 1,
				rentIndex: 0,
				price: 0,
				amountPrice: 0,
				univalent: 0,
				data: {
					coupon: [],
					trainingPrice: []
				},
				couponShow: false,
				couponIndex: 0,
				payType: [{
					name: '支付宝',
					image_url: require('@/static/imgs/alipay.png'),
					type: '1'
				}, {
					name: '余额',
					image_url: require('@/static/imgs/balancepay.png'),
					type: '2'
				}],
				payTypeShow: false
			}
		},
		watch: {
			hour: {
				handler(newVal, oldVal) {
					//.reverse()
				},
				deep: true,
				immediate: true
			}
		},
		computed: {
			...mapState(['user']),
			amount: function() {
				let price = 0,
					amountPrice = 0,
					discount = 0,
					data = this.data,
					couponIndex = this.couponIndex,
					amount = 0

				if (data.trainingPrice.length > 0) {
					price = data.trainingPrice[this.rentIndex].price
					this.univalent = price
				}
				amountPrice = (price * this.hour).toFixed(2)
				this.amountPrice = amountPrice
				if (couponIndex > 0) {
					discount = data.coupon[couponIndex].discount
				}
				amount = amountPrice - discount
				amount = ((amount > 0) ? amount : 0).toFixed(2)
				return amount
			},
		},
		onLoad(options) {
			this.id = options.id
			this.init()
		},
		methods: {
			init() {
				let that = this
				detail(this.id).then(res => {
					const {
						data
					} = res
					if (data.is_hour) {
						this.rentIndex = 0
					} else if (data.is_day) {
						this.rentIndex = 1
					} else if (data.is_month) {
						this.rentIndex = 2
					}

					data.coupon.unshift({
						id: 0,
						full_id: -1,
						full_name: "未获得",
					});

					that.data = data
				})
			},
			inc() {
				this.hour = this.hour + 1
			},
			dec() {
				let hour = this.hour - 1
				hour = hour - 1 < 1 ? 1 : hour
				this.hour = hour
			},
			submit() {
				let that = this,
					data = {}

				data.rent = this.rentIndex + 1
				data.hour = this.hour
				data.id = this.id

				if (this.couponIndex > 0) {
					data.coupon_id = this.data.coupon[this.couponIndex].id
				}
				data.pay_method = this.$utils.getMethod()
				create(data).then(res => {
					// that.$u.toast(res.msg);
					if (res.code == 1) {
						const {
							data,
							code
						} = res
						if (code == 1) {
							this.payTypeShow = true
							this.orderid = data.order_id
						}

					}
				})
			},
			handleType(type) {
				if (type == 1) {
					this.payMoney(type)
				} else {
					this.payMoney(type)
				}

			},
			payMoney(type) {
				uni.showToast({
					title: "正在支付...",
					icon: "loading",
				});

				payApi(this.orderid, this.$utils.getMethod(), type).then(res => {
					this.$u.toast(res.msg);
					const {
						data
					} = res
					if (data.success == 1) {
						uni.reLaunch({
							url: `/pages/order/detail?id=${this.orderid}`
						})
					} else {
						document.querySelector('body').innerHTML = res.data;
						document.forms[0].submit()
					}

				})
			},
			couponClick(index, item) {
				if (index > 0) {
					if (Number(this.amountPrice) >= Number(item.full)) {
						this.couponIndex = index
					} else {
						this.$throw("未达到满减金额")
					}
				} else {
					this.couponIndex = index
				}
				this.couponShow = false
			},
		}
	}
</script>

<style lang="scss">
	.container {
		font-size: 24rpx;
		min-height: 100%;
		padding: 0 20px 10px;
		overflow: hidden;

		.goods {
			padding-bottom: 60px;

			.order-list {
				overflow: hidden;

				.listTop {
					min-height: 75px;

					.listTitle {
						width: 100%;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
					}

					.listCon span {
						background: rgba(255, 238, 213, 1.0);
						border-radius: 9px;
						color: rgba(46, 44, 43, 1.0);
						text-align: center;
						padding: 1px 5px;
					}

					.listCon i {
						font-style: normal;
						color: #61c9f0;
					}

					.rentalsNum {
						background: rgba(250, 126, 18, .1);
						border-radius: 8px;
						color: #f6790c;
						line-height: 14px;
						display: inline-block;
						padding: 1pt 5pt;
					}

					.tagMjd {
						display: inline-block;
						padding: 2px 8px;
						border-radius: 6px;
						background: #ff8484;
						color: #fff;
					}
				}
			}

			.goods-list-cost {
				overflow: hidden;
				color: #fa7e12;

				.goods-item {
					width: 32%;
					background: #fff;
					border-radius: 10px;
					border: 1px solid #e2e2e2;
					margin-left: 2px;
					margin-right: 2px;
					padding: 15px 5px 15px 15px;
					overflow: hidden;

					p {
						font-weight: 600;
						color: #333;
						font-size: 14px;
					}

					span {
						margin-right: 0;
					}
				}

				.act {
					background: #fff3e9;
					border: 1px solid #fa7e12;
				}

				.no-act {
					background: #f5f5f5;
					color: #999;
				}

				em {
					font-style: normal;
					font-size: 16px;
					font-weight: 600;
				}
			}

			.duration {
				span {
					font-size: 14px;
					font-weight: 600;
					color: #333;
				}

				.mintui-iconless:before {
					content: "-";
				}

				.mintui-tianjia:before {
					content: "+";
				}
			}

			.money-item {
				font-size: 14px;

				span {
					font-weight: 600;
					color: #333;
				}

				strong {
					font-size: 16px;
					color: #fa7e12;
				}
			}

			.notice-line {
				text-align: right;
				font-size: 14px;
				font-weight: 400;
				color: #4ca18c;
				line-height: 20px;
				margin: 20px 0;
			}

			.wrapZsd {
				margin: 20px 0;
				font-size: 14px;
				font-weight: 500;
				color: #333;
				line-height: 20px;
				font-weight: 700;

				.right {
					color: #999;
				}
			}

			.btn-fixed-bottom {
				position: fixed;
				bottom: 0;
				width: 100%;
				left: 0;
				padding: 20rpx;
				background: #fafafa !important;

				span {
					line-height: 44px;
					font-size: 14px;
					font-weight: 700;

					strong {
						font-size: 16px;
						color: #fa7e12;
					}
				}
			}
		}
	}
</style>