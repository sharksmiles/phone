<template>
	<view>
		<customNavbar title="我的账户" />

		<u-tabs :list="list" :is-scroll="false" :current="current" @change="change"></u-tabs>

		<view class="container">
			<view class="header"></view>
			<view class="commonContainer">
				<view class="mainBlock">
					<block v-if="current == 0">
						<view class="moneyBlcok">
							<view class="title">
								余额
							</view>
							<view class="money">
								{{user.info.money}}
							</view>
							<view class="">
								<u-button :plain="true" type="success" style="background-color: #61c9f0;"
									@click="$utils.handleNavigate('/pages/finance/rechargeLog')" shape="circle"
									size="medium">
									查看明细
								</u-button>
							</view>
						</view>
						<view class="desc">
							充值金额<text>(充值预设套餐直接享受更多优惠)</text>
						</view>
						<view class="viewFlex money-list">
							<view class="money-item viewFlex" :class="rechargeIndex == index?'active':''"
								@click="rechargeClick(index, item)" v-for="(item, index) in rechargeList">
								<view class="money">¥ {{item.money}}</view>
							</view>
						</view>

						<view class="submit" v-if="rechargeIndex > -1">
							<u-button type="success" style="background-color: #61c9f0;" @click="submit" shape="circle"
								size="medium">立即充值</u-button>
						</view>
					</block>
					<block v-else>
						<view class="moneyBlcok">
							<view class="title">
								保证金
							</view>
							<view class="money">
								{{user.info.deposit}}
							</view>
							<view class="">
								<u-button :plain="true" type="success" style="background-color: #61c9f0;"
									@click="$utils.handleNavigate('/pages/finance/depositLog')" shape="circle"
									size="medium">
									查看明细
								</u-button>
							</view>
						</view>
						<view class="desc">
							充值保证金<text>(每月仅有一次缴纳和提现保证金操作)</text>
						</view>
						<view class="formBlcok m-t-40">
							<u-field v-model="depositMoney" label="金额" placeholder="请输入保证金" required
								:error-message="errorMessage" />
						</view>
						<view class="submit m-t-40" v-if="depositMoney > 0">
							<u-button :disabled="isOperate" type="success" style="background-color: #61c9f0;"
								@click="depositSubmit" shape="circle"
								size="medium">{{isOperate?"本月已充值保证金":"立即充值"}}</u-button>
						</view>
					</block>
				</view>
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
		recharge,
		deposit
	} from '../../api/user';
	import {
		rechargeInit
	} from '../../api/finance';
	import {
		mapState
	} from 'vuex';
	export default {
		computed: {
			...mapState(['user'])
		},
		data() {
			return {
				money: "",
				rechargeList: [],
				rechargeIndex: -1,
				list: [{
					name: '充值'
				}, {
					name: '保证金'
				}],
				current: 0,
				depositMoney: "",
				errorMessage: "",
				isOperate: false,
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
		onLoad() {
			let that = this
			rechargeInit().then(res => {
				if (res.code == 1) {
					const {
						list,
						isOperate
					} = res.data
					that.rechargeList = list
					that.isOperate = isOperate
				}
			})
		},
		onShow() {
			this.$store.dispatch("user/getUserInfo")
		},
		methods: {
			submit() {
				let that = this,
					money = Number(this.money),
					rec = this.rechargeList[this.rechargeIndex]


				uni.showToast({
					title: "请稍后...",
					icon: "loading",
				});
				recharge({
					money: money,
					rechargeId: rec.id,
				}).then(res => {
					console.log(res)
					that.$u.toast(res.msg)
					if (res.code == 1) {
						document.querySelector('body').innerHTML = res.data;
						document.forms[0].submit()
					}
				})
			},
			depositSubmit() {
				this.payTypeShow = true


			},
			handleType(type) {
				if (type == 1) {
					this.payMoney(type)
				} else {
					this.payMoney(type)
				}

			},
			payMoney(type) {
				let that = this,
					money = Number(this.depositMoney)

				if (money <= 0) {
					this.errorMessage = "请输入保证金"
					return
				}
				uni.showToast({
					title: "请稍后...",
					icon: "loading",
				});

				deposit({
					money: money,
					type
				}).then(res => {
					that.$u.toast(res.msg)
					if (res.code == 1) {
						if (type == 2) {
							this.$router.go(-1)
						} else {
							document.querySelector('body').innerHTML = res.data;
							document.forms[0].submit()
						}
					}
				})
			},
			rechargeClick(index, item) {
				this.rechargeIndex = index
				this.other = false
				if (item.other) {
					this.other = true
				}
			},
			change(index) {
				this.current = index;
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #ffffff;
		color: #000000;

		.header {
			height: 20vh;
		}

		.grid-text {
			margin-top: 10rpx;
		}

		height: 100%;

		.commonContainer {
			margin-top: -18vh;
			background-color: #ffffff;
			border-top-left-radius: 30rpx;
			border-top-right-radius: 30rpx;
			overflow: hidden;
		}

		.mainBlock {
			width: 94%;
			margin: 40rpx auto 0;

			.u-empty {
				padding: 50rpx 0;
			}
		}
	}

	.mainBlock {
		color: #000000;

		.moneyBlcok {
			font-size: 34rpx;
			text-align: center;

			.money {
				font-weight: bold;
				color: red;
				margin: 20rpx 0;
			}
		}

		.desc {
			margin: 80rpx 0;

			text {
				color: red;
			}
		}

		.money-list {
			color: #ffffff;
			flex-wrap: wrap;
			justify-content: space-between;

			.money-item {
				width: 32%;
				height: 180rpx;
				justify-content: center;
				align-items: center;
				border: 1rpx solid #61c9f0;
				margin-top: 15rpx;
				color: #000000;

				.money {
					font-size: 40rpx;
					font-weight: bold;
				}
			}

			.active {
				color: #ffffff;
				background-color: #5dc191;
				border: 1rpx solid #5dc191;
			}
		}

		.formBlcok {
			margin-top: 20rpx;
			height: 100rpx;

			.give {
				margin-top: 20rpx;
			}
		}

		.submit {
			margin: 80rpx 0;
			text-align: center;
		}
	}
</style>