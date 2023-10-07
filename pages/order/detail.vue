<template>
	<view class="container">
		<view class="good-frame">
			<customNavbar title="订单详情" />
			<view class="good-state" style="margin-top: 20px;">
				<span class="status" :class="'status' + data.status">{{data.status_text}}</span>
			</view>

			<view class="good-item">
				<view class="good-item-area"
					@tap="$utils.handleNavigate('/pages/account/'+ (data.release_type == 1?'rent':'accompany') +'/detail?id=' + data.account_id)">
					<span>{{data.zone_name}}{{data.server_name}}</span>
					<span>{{data.school_name}}/{{data.body_name}}</span>
				</view>
				<view style="display: flex;">
					<view class="good-item-imgs"
						@tap="$utils.handleNavigate('/pages/account/'+ (data.release_type == 1?'rent':'accompany') +'/detail?id=' + data.account_id)">
						<image :src="data.cover_image" mode="widthFix" style="width:10vh; border-radius: 10px;  ">
					</view>
					<view>
						<view class="good-item-content m-l-10">
							{{data.name}}
						</view>
						<view class="m-l-10" style="font-size: 14px;">
							{{data.release_type == 1?"账号":"技能"}}ID： <span>{{data.zid}}</span>
						</view>

						<view class="m-l-10 m-t-5 " style="font-size: 14px;">
							<text class="complaint"
								@tap="$utils.handleNavigate('/pages/order/complaint?type=1&orderId=' + data.id)">投诉</text>
						</view>
					</view>
				</view>
			</view>

			<view class="good-item" style="font-size: 14px;" v-if="data.status == 2 && data.release_type == 1">
				<u-cell-group title="账号信息" :title-style="{fontSize: '30rpx',color: '#000000'}">
					<u-cell-item title="账号" :value="data.account" :arrow="false">
						<text class="m-l-5" slot="right-icon" @click="$utils.copy(data.account)">复制</text>
					</u-cell-item>
					<u-cell-item title="密码" :value="data.password" :arrow="false">
						<text class="m-l-5" slot="right-icon" @click="$utils.copy(data.password)">复制</text>
					</u-cell-item>
				</u-cell-group>
			</view>

			<view class="good-item" style="font-size: 14px;">
				<u-cell-group title="订单详情" :title-style="{fontSize: '30rpx',color: '#000000'}">
					<u-cell-item title="订单编号" :value="data.ordersn" :arrow="false">
						<text class="m-l-5" slot="right-icon" @click="$utils.copy(data.ordersn)">复制</text>
					</u-cell-item>
					<u-cell-item title="创建时间" :value="data.createtime_text" :arrow="false"></u-cell-item>
					<block v-if="data.status > 1">
						<u-cell-item title="支付时间" :value="data.paytime_text" :arrow="false"></u-cell-item>
						<u-cell-item title="结束时间" :value="data.expiretime_text" :arrow="false"></u-cell-item>
					</block>
					<u-cell-item v-if="data.coupon_id" title="优惠券" :value="`满${data.full}减${data.discount}`"
						:arrow="false"></u-cell-item>
					<u-cell-item title="实际金额" :value="`${data.amount}元`" :arrow="false"></u-cell-item>
					<u-cell-item title="支付金额" :value="`${data.price}元`" :arrow="false"></u-cell-item>
					<u-cell-item v-if="data.status == 2" title="说明" value="PS:续租订单不可退款哦!" :arrow="false"></u-cell-item>

				</u-cell-group>
			</view>

		</view>

		<view style="height: 10vh;"></view>
		<view class="btn-fixed-bottom"
			v-if="data.status == 1 || data.status == 2 || data.status == 3 || data.status == 5 || data.status == 8 || data.status == 9">
			<view class="viewFlex btn">
				<block v-if="data.status == 1">
					<u-button @click="cancel">取消订单</u-button>
					<u-button type="success" style="background-color: #61c9f0;" @click="pay">支付</u-button>
				</block>
				<block v-if="data.status == 2">
					<u-button type="success" style="background-color: #61c9f0;"
						@click="relet(data.account_id,data.id)">续租</u-button>
				</block>
				<block v-if="data.status == 2 || data.status == 3 || data.status == 8 || data.status == 9">
					<u-button type="warning"
						@click="$utils.handleNavigate('/pages/order/refund?id=' + data.id)">申请售后</u-button>
				</block>
				<block v-if="data.status == 3 && data.is_comment == 0">
					<u-button type="success" style="background-color: #61c9f0;"
						@click="$utils.handleNavigate('/pages/order/comment?id=' + data.id)">评论</u-button>
				</block>
				<block v-if="data.status == 5">
					<u-button type="success" style="background-color: #61c9f0;"
						@click="$utils.handleNavigate('/pages/order/refund?interve=1&id=' + data.id)">客服介入</u-button>
				</block>
				<block v-if="data.status == 8">
					<u-button type="success" style="background-color: #61c9f0;" @click="submit">确认</u-button>
				</block>
				<block v-if="data.status == 9 || (data.release_type == 3 && data.status == 2)">
					<u-button type="success" style="background-color: #61c9f0;" @click="delivery">确认收货</u-button>
				</block>
			</view>
		</view>
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
		cancel as cancelApi,
		pay as payApi,
		memberConfirm,
		memberDelivery
	} from "@/api/order.js"
	export default {
		data() {
			return {
				id: null,
				data: {},
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
		onLoad(options) {
			if (options.id)
				this.id = options.id

			this.init()
		},
		methods: {
			init() {
				let that = this
				detail(this.id).then(res => {
					if (res.code == 1) {
						that.data = res.data
					}
				})
			},
			cancel() {
				let that = this
				uni.showToast({
					title: "正在取消...",
					icon: "loading",
				});
				cancelApi(this.id).then(res => {
					that.$u.toast(res.msg);
					that.data.status = -1
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

				payApi(this.id, this.$utils.getMethod(), type).then(res => {
					this.$u.toast(res.msg);
					const {
						data
					} = res
					if (data.success == 1) {
						uni.reLaunch({
							url: `/pages/order/detail?id=${this.id}`
						})
					} else {
						document.querySelector('body').innerHTML = res.data;
						document.forms[0].submit()
					}

				})
			},
			pay() {
				this.payTypeShow = true
			},
			relet(account_id, orderid) {
				uni.redirectTo({
					url: `/pages/order/create/rent?id=${account_id}&orderid=${orderid}&&type=relet`
				});


			},
			submit(type) {
				let that = this
				uni.showToast({
					title: "请稍等...",
					icon: "loading",
				});
				memberConfirm(this.id).then(res => {
					that.$u.toast(res.msg);
					if (res.code == 1) {
						that.init()
					}
				})
			},
			delivery(type) {
				let that = this
				uni.showToast({
					title: "请稍等...",
					icon: "loading",
				});
				memberDelivery(this.id).then(res => {
					that.$u.toast(res.msg);
					if (res.code == 1) {
						that.init()
					}
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	page {
		height: auto;
	}

	.container {
		background: #fafafa;
	}

	.good-item-li strong {
		width: 50px;
	}


	.good-indent {
		margin-top: 10px;
		background-color: #fff;
		width: 100%;
		height: 200px;
	}

	.good-state,
	.good-item {
		padding-left: 10px;
		border-radius: 10px;
	}

	.good-frame {
		margin: 0px 5vw;

	}

	.good-item-content {
		font-size: 14px;
		font-weight: bold;
	}


	.good-item-area {
		display: flex;
		font-size: 14px;
		justify-content: space-between;
		padding-top: 10px;
	}

	.good-state {
		width: 100%;
		height: 50px;
		background-color: #fff;
		display: flex;
		align-items: center;

	}

	.good-item {
		margin-top: 10px;
		background-color: #fff;
		padding: 20rpx;
	}

	.btn-fixed-bottom {
		position: fixed;
		bottom: 0;
		width: 100%;
		left: 0;
		padding: 10px;
		background: #fafafa !important;

		.btn {
			button {
				width: 45%;
			}
		}
	}

	.complaint {
		padding: 2rpx 20rpx;
		border: 1rpx solid #000000;
		border-radius: 20rpx;
		font-size: 24rpx;
	}

	.status {
		padding-left: 10px;
		font-size: 18px;
		font-weight: 600;
	}

	.status1 {
		color: #4c92d4 !important;
	}

	.status2 {
		color: #fd8d26 !important;
	}

	.status3 {
		color: #21b464 !important;
	}

	.status4 {
		color: red !important;
	}
</style>