<template>
	<view>
		<customNavbar :title="data.name" />
		<view class="order-list m-t-10">
			<view class="listTop viewFlex p-10"
				@click="$utils.handleNavigate('/pages/account/'+ (data.release_type == 1?'rent':data.release_type == 2?'accompany':'training') +'/detail?id=' + data.id)">
				<view class="avatar-img border-radius-10 pull-left oh text-center">
					<img :src="data.cover_image" width="88" height="110">
					<view class="state" v-if="data.status != 2">{{data.status_text}}</view>
				</view>

				<view class="listText pull-left m-l-10" style="width: 98%; flex: 1 1 0%;">
					<h3 class="listTitle">
						<div class="account-item-game-icon"
							style="background-image: url(&quot;https://oss-img.mengzuhao.cn/account-game-icon.png&quot;); background-repeat: no-repeat; background-size: cover;">
							{{data.gameName}}
						</div>
						{{data.name}}
					</h3>
					<view class="listCon m-t-5">
						<span>{{data.zoneName}}</span>
						<text class="m-l-5">{{data.schoolName}}/{{data.bodyName}}</text>
					</view>
					<view class="userId m-t-5">{{data.release_type == 1?"账号":"技能"}}ID：{{data.zid}}</view>
					<div class="order-list-cost m-t-5">
						<span class="h">
							¥ <text class="price">{{data.hourRent}}</text>/时
						</span>
						<span class="d">
							¥ <text class="price">{{data.dayRent}}</text>/时
						</span>
						<span class="m">
							¥ <text class="price">{{data.monthRent}}</text>/时
						</span>
					</div>
				</view>

			</view>
		</view>

		<view class="order-parameter bg-white-shadow p-10 m-t-20">
			<view class="m-t-10 cumulative">
				<text>累计收入：</text>
				<text class="order-number">{{data.income}}元</text>
			</view>
			<view class="m-t-10">
				<text>上架时间：</text>
				<text class="desc">{{data.createtime_text}}</text>
			</view>
			<view class="m-t-10">
				<text>{{data.release_type == 1?"出租":"接单"}}次数：</text>
				<text class="desc">{{data.rentNum}}次</text>
			</view>
			<view class="m-t-10">
				<text>{{data.release_type == 1?"游戏账号":"接单QQ群"}}：</text>
				<text class="desc">{{data.account}}</text>
			</view>
			<view class="m-t-10">
				<text>{{data.release_type == 1?"游戏密码":"接单暗号"}}：</text>
				<text class="desc">{{data.password}}</text>
				<text class="click-right-em" style="margin-left: 10px;" @click="handleShow('上架',1,true)">上架</text>
				<text class="click-right-em" style="margin-left: 10px;" @click="handleShow('下架',2,true)">下架</text>
				<text class="click-right-em" style="margin-left: 10px;" @click="handleShow('删除',3,true)">删除</text>
				<text v-if="!data.orderStatus && data.release_type == 1" class="click-right-em"
					@click="changePasswordShow = true">修改密码</text>


			</view>

		</view>

		<view class="btn-fixed-bottom">
			<u-button v-if="user.info.score < 60" :disabled="user.info.score < 60" type="success"
				style="background-color: #61c9f0;">
				信誉分过低，禁止发布
			</u-button>
			<block v-else>
				<u-button :disabled="data.orderStatus"
					@click="$utils.handleNavigate(`/pages/account/${data.release_type == 1?'rent':data.release_type == 2?'accompany':'training'}/release?id=` + data.id)">
					<view v-if="data.orderStatus">
						<view style="line-height: normal;">租用中</view>
						<view style="line-height: normal;font-weight: normal; font-size: 12px; display: block;">请
							{{data.expiretime}} 后更改
						</view>
					</view>
					<text v-else>修改{{data.release_type == 1?"账号":"技能"}}</text>
				</u-button>
			</block>
		</view>
		<u-popup mode="center" width="500" v-model="changePasswordShow" border-radius="14">
			<view class="changePasswordPopup">
				<h3 class="m-b-20" style="font-size: 16px; font-weight: 400; color: rgb(51, 51, 51);">修改密码</h3>
				<u-input border-color="#f4f4f4" :border="true" placeholder="请输入新密码" v-model="password"></u-input>
				<view class="viewFlex m-t-10">
					<u-button @click="changePasswordShow = false, password = ''">取消</u-button>
					<u-button type="success" style="background-color: #61c9f0;"
						@click="changePasswordClick">确定修改</u-button>
				</view>
			</view>
		</u-popup>
		<u-popup mode="center" width="500" v-model="delShow" border-radius="14">
			<view class="changePasswordPopup">
				<h3 class="m-b-20" style="font-size: 16px; font-weight: 400; color: rgb(51, 51, 51);">确认{{text}}该条记录？
				</h3>
				<view class="viewFlex m-t-10">
					<u-button @click="delShow = false">取消</u-button>
					<u-button type="success" style="background-color: #61c9f0;" @click="delShowClick">确定</u-button>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex';
	import {
		statistics,
		changePassword,
		delShowInfo,
		upAccount,
		downAccount
	} from "@/api/account"
	export default {
		computed: {
			...mapState(['user']),
		},
		data() {
			return {
				data: {},
				changePasswordShow: false,
				delShow: false,
				password: "",
				text: ''

			}
		},
		onLoad(options) {
			let that = this
			if (options.id) {
				this.id = options.id
				statistics(options.id).then(res => {
					if (res.code == 1) {
						that.data = res.data
					}
				})
			}
		},


		methods: {
			handleShow(text, type, flag) {
				this.text = text
				this.type = type
				this.delShow = flag

			},
			delShowClick() {
				// delShowInfo({
				// 	id: this.id,
				// }).then(res => {
				// 	this.$u.toast(res.msg);
				// 	if (res.code == 1) {
				// 		this.delShow = false
				// 		uni.navigateBack();
				// 	}
				// })
				let fun = null
				if (this.type == 1) {
					fun = upAccount({
						id: this.id,
					})

				} else if (this.type == 2) {
					fun = downAccount({
						id: this.id,
					})

				} else {
					fun = delShowInfo({
						id: this.id,
					})
				}
				fun.then(res => {
					this.$u.toast(res.msg);
					if (res.code == 1) {
						this.delShow = false
						uni.navigateBack();
					}
				})
			},
			changePasswordClick() {
				let that = this,
					password = this.password

				if (!password) {
					this.$throw("请输入密码")
				}
				if (password == this.data.password) {
					this.$throw("新密码不得与旧密码相同")
				}
				changePassword({
					password: this.password,
					id: this.id,
				}).then(res => {
					this.$u.toast(res.msg);
					if (res.code == 1) {
						that.data.password = password
						that.changePasswordShow = false
						that.password = ''
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.changePasswordPopup {
		text-align: center;
		padding: 20rpx;
	}

	.state {
		background-image: url(/static/imgs/state-icon.png);
		background-repeat: no-repeat;
		background-size: cover;
		position: absolute;
		width: 70px;
		height: 70px;
		text-align: center;
		line-height: 56px;
		color: #fff;
	}
</style>