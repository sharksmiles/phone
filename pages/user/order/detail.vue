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

						<view class="m-l-10 m-t-10 " style="font-size: 14px;">
							<text class="complaint"
								@tap="$utils.handleNavigate('/pages/order/complaint?type=2&orderId=' + data.id)">拉黑</text>
						</view>
					</view>
				</view>
			</view>

			<view class="good-item" style="font-size: 14px;">
				<u-cell-group title="支付详情" :title-style="{fontSize: '30rpx',color: '#000000'}">
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
				</u-cell-group>
			</view>

			<view class="good-item" v-if="data.refund" style="font-size: 14px;">
				<u-cell-group :title="'退款详情'+ (data.refund.interve == 1?'（客服介入）':'') +''"
					:title-style="{'fontSize': '40rpx','color': '#000000'}">
					<view class="p-t-10">{{data.refund.option_text}}</view>
					<u-input type="textarea" v-model="data.refund.desc" disabled="" />
					<view class="">
						<image v-for="(item, index) in data.refund.images_url" :src="item" mode=""></image>
					</view>
				</u-cell-group>
			</view>
		</view>
		<view style="height: 10vh;"></view>
		<view class="btn-fixed-bottom" v-if="data.status == 4 || data.status == 7">
			<view class="viewFlex btn">
				<block v-if="data.status == 4&&data.interve == 0">
					<u-button type="success" style="background-color: #61c9f0;" @click="submit(6)">同意退款</u-button>
					<u-button @click="submit(5)">拒绝退款</u-button>
				</block>
				<block v-if="data.status == 7">
					<u-button type="success" style="background-color: #61c9f0;" @click="submit(7)">发货</u-button>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		detail,
		refuse,
		agree,
		deliver
	} from "@/api/order.js"
	export default {
		data() {
			return {
				id: null,
				data: {},
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
						const {
							data
						} = res
						that.data = data
					}
				})
			},
			submit(type) {
				let that = this,
					api
				uni.showToast({
					title: "正在处理...",
					icon: "loading",
				});
				// 拒绝退款
				if (type == 5) {
					api = refuse(this.id)
				} else if (type == 6) {
					// 同意退款
					api = agree(this.id)
				} else if (type == 7) {
					// 发货
					api = deliver(this.id)
				}
				api.then(res => {
					that.$u.toast(res.msg);
					if (res.code == 1) {
						that.init()
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		height: auto;
	}

	.container {
		background: #fafafa;
		// background: linear-gradient(#fafafa,#fefefe,#fafafa);
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
</style>