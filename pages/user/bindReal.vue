<template>
	<view class="container">
		<customNavbar title="实名认证" />

		<view class="rule">
			<u-steps :list="numList" mode="number" :current="-1"></u-steps>
			<view class="m-t-10">
				根据国家法律法规响应实名制政策，请在实名认证后使用平台服务您填写的身份证资料除认证外不会用作其他用途，但如有涉及诈骗、盗号等违反国家法律法规的行为，平台有权配合警方和受害人提供您的信息</view>
		</view>
		<view class="form">
			<u-form :model="form" ref="uForm" label-position="top" :label-style="{fontSize:'30rpx',fontWeight:'bold'}">
				<u-form-item label="姓名" prop="realname"><u-input v-model="form.realname"
						placeholder="请输入真实姓名" /></u-form-item>
				<u-form-item label="身份证号" prop="idcard"><u-input v-model="form.idcard"
						placeholder="请输入身份证号" /></u-form-item>
			</u-form>
		</view>
		<u-button class="submit-btn" @click="submit" type="success" style="background-color: #61c9f0;">去核验</u-button>
	</view>
</template>

<script>
	import {
		bindReal
	} from "@/api/user.js"
	export default {
		data() {
			return {
				form: {},
				numList: [{
					name: '填写资料'
				}, {
					name: '公安认证'
				}, {
					name: '注册成功'
				}],
				rules: {
					realname: [{
						required: true,
						message: '请输入真实姓名',
						trigger: ['change', 'blur'],
					}],
					idcard: [{
						required: true,
						message: '请输入身份证号',
						trigger: ['change', 'blur'],
					}, ],
				}
			}
		},
		onLoad() {
			this.$store.dispatch("user/getUserInfo")
		},
		methods: {
			submit() {
				let that = this
				this.$refs.uForm.validate(valid => {
					if (valid) {
						uni.showLoading({
							title: '正在提交'
						})
						bindReal(that.form).then(res => {
							that.$u.toast(res.msg);
							if (res.code == 1) {
								setTimeout(function() {
									// that.$utils.handleReLaunch("/pages/user/points")
									this.$router.go(-1)
								}, 1000)
							}
						})
					}
				});
			},
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		}
	}
</script>

<style lang="scss">
	/deep/ .u-steps__item__num {
		background-color: #ffffff !important;
		width: 40px !important;
		height: 40px !important;
		border-color: #ffffff !important;
	}

	/deep/ .u-steps__item__text--row {
		span {
			color: #ffffff !important;
		}
	}

	.rule {
		background: linear-gradient(90deg, #90e0cf, #61c9f0);
		color: #fff;
		font-size: 10px;
		line-height: 15px;
		padding: 30px 42px 0;
		height: 30vh;
	}

	.form {
		margin-top: -30px;
		margin-left: auto;
		margin-right: auto;
		background-color: #fff;
		border-radius: 10px;
		padding: 18px 28px 25px;
		box-shadow: 0 0 6px 0 rgba(54, 54, 54, .2);
		width: 90%;
	}

	.submit-btn {
		position: fixed;
		bottom: 60rpx;
		width: 90%;
		left: 50%;
		transform: translate(-50%);
	}
</style>