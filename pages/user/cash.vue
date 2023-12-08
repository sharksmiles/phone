<template>
	<view>
		<customNavbar title="提现" />
		<u-tabs :list="list" :is-scroll="false" :current="current" @change="change"></u-tabs>
		<view class="container">
			<view class="cashout-money m-t-30">
				<view class="cashout-title">
					提现金额
				</view>
				<block v-if="current == 0">
					<view class="bg-white-shadow p-20">
						<view class="money-item m-b-20 viewFlex">
							<view class="viewFlex">
								<image src="@/static/imgs/money-icon.png" mode="widthFix" class="pull-left viewFlex">
							</view>
							<u-input class="m-l-5" v-model="money" type="number" v-if="user.info.is_official_id == 1"
								:placeholder="`输入转出金额（不低于${config.minCash}元，且为10的倍数）`" />
							<u-input class="m-l-5" v-model="money" type="number" v-else placeholder="输入转出金额" />
						</view>
						<view class="money-con" style="display: block;">
							<view class="">
								<span>可提现金额：{{user.info.money}}元 ｜ 不可提现金额：<a href="javascript:;"
										@click="$utils.handleNavigate('/pages/finance/delayed')">{{user.info.delayedAmount}}</a>元</span>
							</view>
							<view class="strong m-t-10" style="text-align: right;">
								<text @click="money = user.info.money-1.5">全部提现</text>
							</view>
						</view>
					</view>
					<view class="cashout-explain m-t-30">
						<u-button type="success" style="background-color: #61c9f0;" @click="submit(1)">人工打款</u-button>
						<u-button type="success" style="background-color: #61c9f0; margin-top: 20px;"
							@click="submit(2)">自动打款</u-button>
					</view>
					<view class="cashout-explain m-t-30">
						<ul>
							<!-- <li>暂时仅支持支付宝提现，可提现时间为周一至周五(9:00-16:00)</li> -->
							<block>
								<block>

									<li class="m-t-15">提现金额需为10的倍数，满{{config.minCash}}元可使用</li>
									<li class="m-t-15"> 按照阿里云规则自动打款必须用手机网页或者带摄像头电脑，点击自动打款那刻起就扣次数，有效期只有半小时</li>

									<li class="m-t-15">
										注：为响应监管部门反洗钱要求规范，提现分为人工审核打款和自动打款两种。人工提现3-7个工作日到账，且0费率不需要扫脸。自动审核打款需扫脸，提现秒到账，每个月第一次提现免手续费，当月后面每次1.5元固定手续费。（手续费为阿里云提供的人脸实名费用）
									</li>
								</block>
							</block>
						</ul>
					</view>
				</block>
				<block v-else>
					<view class="bg-white-shadow p-20">
						<view class="money-item m-b-20 viewFlex">
							<view class="viewFlex">
								<image src="@/static/imgs/money-icon.png" mode="widthFix" class="pull-left viewFlex">
							</view>
							<u-input class="m-l-5" v-model="money" type="number" placeholder="输入转出提现金额" />
						</view>
						<div class="money-con">
							<span>可提现金额：{{user.info.deposit}}元</span>
							<view class="strong">
								<text @click="money = user.info.deposit-1.5">全部提现</text>
							</view>
						</div>
					</view>
					<view class="cashout-explain m-t-30">
						<u-button type="success" style="background-color: #61c9f0;" @click="submit(3)"
							:disabled="config.deposit">{{config.deposit?"本月已提现保证金":"确认提现"}}</u-button>
					</view>
					<view class="cashout-explain m-t-30">
						<ul>
							<li>每月仅有一次缴纳和提现保证金操作</li>
							<li class="m-t-15">保证金交的越多，默认排名越靠前</li>
							<li class="m-t-15">退保证金当天不可接单，有正在进行中的订单也不能退保证金</li>
							<li class="m-t-15"> 注：提现秒到账，每个月第一次提现免手续费，当月后面每次1.5元固定手续费。（手续费为阿里云提供的人脸实名费用）
							</li>

						</ul>
					</view>
				</block>
			</view>
		</view>
		<view style="font-size: 12px;  transform: scale(0.8); margin-top: 10px;">
			本平台实名认证由阿里云提供，人脸实名信息只有阿里云可以看到，本平台无法获取用户可以放心使用，由于阿里云的计费规则无论实名成功还是失败均会扣费，费用为每次为1.5元从余额中扣除，请用户在进行人脸实名之前确保人脸信息和之前平台上认证的姓名电话身份证为同一人，且不要在光线过强或过暗的环境下进行人脸认证，以防验证失败。
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex';
	import {
		withdrawal,
		init,
		depositWithdrawal,
		faceCheck,
		initFace,
		faceOrder,
		faceOrderConfirm
	} from "@/api/cash.js"
	export default {
		computed: {
			...mapState(['user']),
		},
		data() {
			return {
				money: "",
				multiple: 10,
				config: {
					minCash: 50
				},
				list: [{
					name: '余额'
				}, {
					name: '保证金'
				}],
				current: 0,
				certifyId: '',
				order_id: '0'
			}
		},
		onLoad() {
			let that = this
			init().then(res => {
				if (res.code == 1) {
					that.config = res.data
				}
			})
			this.getfaceOrderConfirm()

		},
		onShow() {
			this.$store.dispatch("user/getUserInfo")

		},
		methods: {
			getfaceOrderConfirm() {
				const {
					money,
					type,
					order_id
				} = this.$route.query
				console.log(order_id, money, '----')
				if (!order_id || !money) {
					return
				}
				this.current = type || 0
				this.order_id = order_id;
				this.money = money
				if (order_id) {
					faceOrderConfirm({
						order_id
					}).then(res => {
						console.log(res, 'res')
						if (res.code == 1) {
							type == 0 ? this.submitPay(2) : this.depositSubmit();
						} else {
							this.$u.toast(res.msg);
						}

					})
				}

			},
			getFaceCheck(type = 'withdrawal') {
				return faceCheck().then(res => {
					const {
						idcard,
						is_face_num,
						is_one,
						is_pay,
						order_id,
						realname,
						meta_info
					} = res.data
					if (!this.money) {
						this.$throw("请输入提现金额")
						return false
					}
					if (is_one || type == 'depositWithdrawal') {
						if (is_face_num >= 2) {
							this.$u.toast('身份验证失败次数超出限制，请联系客服！');
							return false
						} else {
							if (!idcard || !realname) {
								this.$utils.handleNavigate("/pages/user/bindReal")
							} else {

								let metaInfo = JSON.stringify(window.getMetaInfo()).replace(/"/g, "'")
								console.log(metaInfo, '===')
								if (order_id != 0) {
									initFace({
										order_id,
										meta_info: metaInfo,
										money: this.money,
										cert_name: realname,
										cert_no: idcard,
										type: this.current

									}).then(res => {
										if (res.code) {
											location.href = res.data.certifyUrl
										} else {
											this.$u.toast('系统错误，请联系客服！');
										}
									})
								} else {
									faceOrder({
										realname,
										idcard,
										money: this.money,

									}).then(res => {
										let {
											order_id
										} = res.data
										initFace({
											order_id,
											meta_info: metaInfo,
											money: this.money,
											cert_name: realname,
											cert_no: idcard,
											type: this.current
										}).then(res => {
											if (res.code) {
												location.href = res.data.certifyUrl
											} else {
												that.$u.toast('系统错误，请联系客服！');
											}

										})
									})
								}
								return false
							}
						}
					} else {
						return true
					}


				})

			},
			submit(type) {
				if (type == 2) {
					this.getFaceCheck().then(flag => {
						console.log(flag, 'flag')
						if (flag) {
							this.submitPay(type)
						}
					})
				} else if (type == 1) {
					if (this.user.info.is_real == 1) {
						this.$utils.handleNavigate("/pages/user/bindReal")
						return
					}
					this.submitPay(type)
				} else {
					this.getFaceCheck('depositWithdrawal')
				}

			},
			submitPay(type) {
				let that = this,
					money = Number(that.money),
					min = Number(this.config.minCash),
					multiple = Number(this.multiple),
					is_official_id = this.user.info.is_official_id,
					no_fee = this.user.info.no_fee

				if (!money)
					that.$throw("请输入提现金额")

				if (is_official_id == 1) {
					if (!money || money < min)
						that.$throw("最低提现金额为" + min)
					if (money % multiple !== 0)
						that.$throw("请输入" + multiple + "的倍数")
				}

				if (money > Number(this.user.info.money))
					that.$throw("最大提现金额为" + this.user.info.money + "元")

				withdrawal({
					type,
					money: money,
					order_id: this.order_id
				}).then(res => {
					that.$u.toast(res.msg);
					if (res.code == 1) {
						setTimeout(function() {
							that.$utils.handleSwitchTab("/pages/tabBar/user")
						}, 1000)
					}
				})

			},
			depositSubmit() {
				let that = this,
					deposit = Number(that.money)

				if (!deposit)
					that.$throw("请输入提现金额")
				if (deposit > Number(this.user.info.deposit))
					that.$throw("最大提现金额为" + this.user.info.deposit + "元")

				depositWithdrawal({
					money: deposit,
					order_id: this.order_id

				}).then(res => {
					that.$u.toast(res.msg);
					if (res.code == 1) {
						that.$utils.handleSwitchTab("/pages/tabBar/user")
					}
				})
			},
			change(index) {
				this.current = index;
				this.money = ''
			}
		}
	}
</script>

<style lang="scss">
	.container {
		width: 90%;
		margin: 0 auto;

		.cashout-money {
			.cashout-title {
				font-size: 14px;
				font-weight: 600;
				color: #333;
				margin-bottom: 15px;
			}

			.money-item {
				image {
					width: 18px;
					align-self: center;
				}
			}

			.money-con {
				border-top: 1px solid #e9e9e9;
				display: flex;
				padding-top: 15px;

				.strong {
					flex: 1;
					text-align: right;
					font-size: 14px;
					font-weight: 600;
					color: #61c9f0;
				}
			}

			.cashout-explain {
				ul {
					padding: 0;

					li {
						list-style: none;
					}
				}
			}
		}
	}
</style>