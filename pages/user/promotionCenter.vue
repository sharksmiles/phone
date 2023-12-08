<template>
	<view>
		<customNavbar title="推广中心" />
		<view class="promotion_my">
			<u-card title="我的账户" @head-click="$utils.handleNavigate('/pages/finance/moneyLog')" sub-title="账户明细>"
				padding="30" :head-border-bottom="false" :foot-border-top="false" :show-foot='false'
				:head-style="{'padding-bottom':0}" :body-style="{'padding-top':0}">
				<view slot="body">
					<view class="u-body-item u-flex  u-col-between u-p-t-0">
						<view style="width: 500rpx;">
							<u-row gutter="16">
								<u-col span="5" class="demo-layout">
									<view style="font-size: 48rpx; font-weight: bold;">
										{{money}}
									</view>
									<view style=' font-size: 18rpx; color: #b5b5b5;'>
										账户余额
									</view>
								</u-col>
								<u-col span="5" class="demo-layout" style="margin-left: 40rpx;">
									<view style="font-size: 48rpx; font-weight: bold;">
										{{total_ratio}}
									</view>
									<view style=' font-size: 18rpx; color: #b5b5b5;'>
										累计获得
									</view>
								</u-col>
							</u-row>
						</view>
						<view class="toCash">
							<u-button type="primary" size="mini" @click="bindAlipay">去提现</u-button>
						</view>
					</view>

				</view>
			</u-card>
		</view>

		<view class="promotion_link">
			<view class="promotion_link_title">
				推广任务
			</view>
			<view class="invite_code_box">
				<span class="code_title">
					邀请码:
				</span>
				<span class="code" @click="handCopy(invite_code)">
					{{invite_code}}
				</span>
			</view>
			<u-button type="primary" shape='circle' @click="handCopy(url)">邀请链接</u-button>
			<view class="promotion_link_desc">
				任何人通过您的专属链接进入注册即计入您名下
			</view>
		</view>
		<view class="promotion_my">
			<u-card title="我推荐的" @head-click="$utils.handleNavigate('/pages/finance/userLog')" sub-title="明细>"
				padding="30" :head-border-bottom="false" :foot-border-top="false" :show-foot='false'
				:head-style="{'padding-bottom':0}" :body-style="{'padding-top':0}">
				<view slot="body">
					<view class="u-body-item u-flex  u-col-between u-p-t-0">
						<view style="width: 460rpx;">
							<u-row gutter="16">
								<u-col span="5" class="demo-layout">
									<view style="font-size: 48rpx; font-weight: bold;">
										{{num}}
									</view>
									<view style=' font-size: 18rpx;color: #b5b5b5;'>
										累计
									</view>
								</u-col>

							</u-row>
						</view>
						<view class="toCash">
							<u-button type="primary" size="mini" style="margin-right: 10rpx;"
								@click="bindShow=true">绑定邀请人</u-button>
						</view>
					</view>

				</view>
			</u-card>
		</view>
		<view class="ratio_text" v-html="ratio_text1" v-if="ratio_text1">
		</view>
		<view class="ratio_text" v-html="ratio_text2" v-if="ratio_text2">
		</view>

		<u-modal v-model="bindShow" title='绑定邀请人' show-cancel-button @confirm="handleBind">
			<view class="slot-content" style="padding: 0 40rpx;">
				<u-field v-model="code" label="邀请码" placeholder="请填写邀请码"></u-field>
			</view>
		</u-modal>
	</view>
</template>

<script>
	import {
		getIntive,
		bindInative
	} from "@/api/user.js"
	import {
		mapState
	} from 'vuex';
	export default {
		computed: {
			...mapState(['user']),
			url() {
				return 'https://www.jiutianzuhao.cn/#/pages/user/login?invite_code=' + this.invite_code
			}
		},
		data() {
			return {
				invite_code: '',
				money: '0.00',
				num: 0,
				total_ratio: '0.00',
				bindShow: false,
				code: '',
				ratio_text1: '',
				ratio_text2: '',




			};
		},
		mounted() {
			this.fecthgIntive()
		},
		methods: {
			handCopy(text) {

				if (navigator.clipboard) {
					// clipboard api 复制
					navigator.clipboard.writeText(text);
				} else {
					var textarea = document.createElement('textarea');
					document.body.appendChild(textarea);
					// 隐藏此输入框
					textarea.style.position = 'fixed';
					textarea.style.clip = 'rect(0 0 0 0)';
					textarea.style.top = '10px';
					// 赋值
					textarea.value = text;
					// 选中
					textarea.select();
					// 复制
					document.execCommand('copy', true);
					// 移除输入框
					document.body.removeChild(textarea);
				}
				this.$u.toast('复制成功！');
			},
			fecthgIntive() {
				getIntive().then(res => {
					this.invite_code = res.data.invite_code
					this.money = res.data.money
					this.num = res.data.num
					this.total_ratio = res.data.total_ratio
					this.ratio_text1 = res.data.ratio_text1
					this.ratio_text2 = res.data.ratio_text2
				})
			},
			bindAlipay() {
				if (!this.user.info.aliidentity) {
					this.$utils.handleNavigate("/pages/user/bindAlipay")
				} else {
					this.$utils.handleNavigate("/pages/user/cash")
				}
			},
			handleBind() {
				bindInative({
					code: this.code
				}).then(res => {
					this.$u.toast(res.msg);
					this.fecthgIntive()
					this.bindShow = false

				})
			}
		}
	};
</script>

<style scoped lang="scss">
	.ratio_text {
		padding: 0 40rpx;
		margin-bottom: 10rpx;
	}

	.invite_code_box {
		text-align: center;
		margin-bottom: 40rpx;
		height: 50rpx;

	}

	.invite_code_box .code {
		font-weight: bold;
		font-size: 48rpx;
	}

	.invite_code_box .code_title {
		font-size: 28rpx;
		color: #ccc;
		position: relative;
		top: -6rpx;
		left: -16rpx;

	}

	.promotion_link {
		padding: 30rpx;
		border: 1rpx solid #eee;
		margin: 30rpx;
		border-radius: 6rpx;
	}

	.promotion_link_title {
		margin-bottom: 10rpx;
	}

	.promotion_link_desc {
		margin-top: 20rpx;
		font-size: 16rpx
	}

	.u-card-wrap {
		background-color: $u-bg-color;
		padding: 1px;
	}

	.u-body-item {
		font-size: 32rpx;
		color: #333;
		padding: 20rpx 10rpx;
	}

	.u-body-item .toCash {
		width: 120rpx;
		flex: 0 0 120rpx;
		height: 120rpx;
		margin-left: 12rpx;
		margin-top: 60rpx;
	}

	.wrap {
		padding: 24rpx;
	}

	.u-row {
		margin: 40rpx 0;
	}

	.demo-layout {
		height: 100rpx;
		text-align: center !important;

	}
</style>