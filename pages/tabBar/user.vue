<template>
	<view class="u-page">
		<view class="user-info">
			<u-avatar :src="user.info.avatar" size="150"></u-avatar>
			<view class="u-text" v-if="!user.hasLogin">
				<navigator url="../user/login" hover-class="none" class="small-text">
					注册/登录
				</navigator>
			</view>
			<view class="u-text" v-else @click="$utils.handleNavigate('/pages/user/profile')">
				<view>{{user.info.nickname}}</view>
				<view class="small-text">
					<text>年龄:{{user.info.age_text}}天</text>
					<text class="m-l-5">用户ID:{{user.info.zid}}</text>
				</view>
			</view>
			<view v-if="user.hasLogin" class="u-icon-setting" @click="$utils.handleNavigate('/pages/user/profile')">
				<u-icon name="arrow-right" color="rgb(227 227 227)" size="18"></u-icon>
			</view>
		</view>

		<view class="balance-info">
			<view class="balance-wrapper">
				<view class="balance">
					<view class="balance-money">{{user.info.totalAmount}} </view>
					<view style="font-size: 12px;">账户余额(元)</view>
				</view>
				<view class="balance-actions">
					<view class="action-recharge m-b-10">
						<u-button type="primary" @click="$utils.handleNavigate('/pages/user/recharge')"
							icon="red-packet" size="mini">充值</u-button>
					</view>
					<view class="action-withdraw m-b-10">
						<u-button @click="bindAlipay" type="primary" icon="red-packet" size="mini">提现</u-button>
					</view>
				</view>
			</view>
		</view>

		<u-grid :col="4">
			<u-grid-item @click="$utils.handleNavigate('/pages/user/account/list?release_type=1')">
				<u-icon name="photo" :size="46"></u-icon>
				<view class="grid-text">我的账号</view>
			</u-grid-item>
			<u-grid-item @click="$utils.handleNavigate('/pages/user/account/list?release_type=2')">
				<u-icon name="lock" :size="46"></u-icon>
				<view class="grid-text">我的技能</view>
			</u-grid-item>
			<u-grid-item @click="$utils.handleNavigate('/pages/user/account/list?release_type=3')">
				<u-icon name="lock" :size="46"></u-icon>
				<view class="grid-text">代练</view>
			</u-grid-item>
			<u-grid-item @click="$utils.handleNavigate('/pages/user/order/index')">
				<u-icon name="hourglass" :size="46"></u-icon>
				<view class="grid-text">今日订单</view>
			</u-grid-item>
		</u-grid>
		<view class="u-menu-list m-10">
			<view class="u-menu-item" @click="itemClick(item)" v-for="(item,index) in menu" :key="index">
				<u-cell-item :icon="item.icon" :title="item.name"></u-cell-item>
			</view>
		</view>

		<u-popup v-model="gameShow" mode="bottom" ref="gameRef">
			<view class="game-popup">
				<view class="title">选择游戏专区</view>
				<u-grid :border="false">
					<u-grid-item :col="3" v-for="(item, index) in game.data" @click="releaseClick(item, release_type)"
						v-if="item.release_type.includes(release_type)">
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
		mapState
	} from 'vuex';
	export default {
		computed: {
			...mapState(['user', "game"]),
		},
		data() {
			return {
				release_type: 1,
				menu: [{
						name: "发布账号",
						icon: 'calendar',
						fun(that) {
							if (that.user.info.score < 60)
								that.$throw("信誉分过低，禁止发布账号")
							that.gameShow = true
							that.release_type = 1
						},
					},
					{
						name: "发布技能",
						icon: 'cut',
						fun(that) {
							if (that.user.info.score < 60)
								that.$throw("信誉分过低，禁止发布技能")
							that.gameShow = true
							that.release_type = 2
						}
					},
					{
						name: "发布代练",
						icon: 'attach',
						fun(that) {
							if (that.user.info.score < 60)
								that.$throw("信誉分过低，禁止发布技能")

							if (!that.user.info.realname) {
								that.$utils.handleNavigate("/pages/user/points")
								return
							}
							that.gameShow = true
							that.release_type = 3
						}
					},
					{
						name: "余额明细",
						icon: 'order',
						fun(that) {
							that.$utils.handleNavigate('/pages/finance/moneyLog')
						}
					},
					{
						name: "我的收藏",
						icon: 'star',
						fun(that) {
							that.$utils.handleNavigate('/pages/user/collect/collect')
						}
					},
					{
						name: "我的等级",
						icon: 'error-circle',
						fun(that) {
							that.$utils.handleNavigate('/pages/user/level')
						}
					},
					{
						name: "信誉积分",
						icon: 'fingerprint',
						fun(that) {
							that.$utils.handleNavigate('/pages/user/points')
						}
					},
					{
						name: "联系客服",
						icon: 'bell',
						fun(that) {
							that.$utils.handleNavigate('/pages/common/service')
						}
					},
					{
						name: "退出登陆",
						path: '/pages/user/login',
						icon: 'man-delete',
						fun(that) {
							that.$store.commit("user/logout")
						}
					},
				],
				gameShow: false
			}
		},
		onShow() {
			this.$store.dispatch("user/getUserInfo")
		},
		methods: {
			itemClick(item) {
				item.fun(this)
			},
			releaseClick(item, release_type) {
				let url = release_type == 1 ? "rent" : (release_type == 2 ? "accompany" : "training");
				this.$utils.handleNavigate("/pages/account/" + url + "/release?game_id=" + item.id)
				this.$refs.gameRef.close()
			},
			bindAlipay() {
				if (!this.user.info.aliidentity) {
					this.$utils.handleNavigate("/pages/user/bindAlipay")
				} else {
					this.$utils.handleNavigate("/pages/user/cash")
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.u-page {
		background: #fbfbfb;
		padding-bottom: calc(var(--window-bottom));
		height: auto;
	}

	.balance-actions {
		padding: 10px 20px;
	}

	.balance-money {
		font-size: 32px;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		line-height: 45px;
		margin-top: 12px;
		display: inline-block;
	}

	.balance {
		padding-left: 20px;
	}

	.balance-wrapper {
		display: flex;
		justify-content: space-between;
	}

	.balance-info {
		background-color: #FFFFFF;
		margin: 10px;
		border-radius: 10px;
	}

	.user-info {
		height: 220rpx;
		display: flex;
		padding: 30rpx 40rpx 10rpx 60rpx;
		background-image: linear-gradient(135deg, #26bcff 10%, #078ef9);
		position: relative;

		.u-img {
			width: 150rpx;
			height: 150rpx;
			border-radius: 50%;
			border: 2rpx solid #FFFFFF;
		}

		.u-text {
			flex: 1;
			color: #FFFFFF;
			padding: 26rpx 30rpx;
		}

		.small-text {
			font-size: 24rpx;
			padding-top: 10rpx;
		}

		.u-icon-setting {
			width: 30rpx;
			color: #FFFFFF;
			padding-top: 50rpx;
		}
	}

	.u-menu-list {
		background: #FFFFFF;
		border-radius: 5rpx;
	}
</style>