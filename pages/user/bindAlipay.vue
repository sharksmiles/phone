<template>
	<view class="container">
		<customNavbar title="绑定支付宝" />
		<u-form :model="form" ref="uForm" label-position="top" :label-style="{fontSize:'30rpx',fontWeight:'bold'}">
			<!-- <u-form-item label="真实姓名" prop="realname"><u-input v-model="form.realname" placeholder="请输入真实姓名"
					:disabled="isRealname" />
			</u-form-item>
			<u-form-item label="身份证号" prop="idcard"><u-input v-model="form.idcard" placeholder="请输入身份证号"
					:disabled="isIdcard" />
			</u-form-item> -->
			<u-form-item label="支付宝实名" prop="aliname"><u-input v-model="form.aliname" placeholder="请输入支付宝实名" />
			</u-form-item>
			<u-form-item label="支付宝账户" prop="alimobile"><u-input v-model="form.alimobile"
					placeholder="请输入支付宝账户" /></u-form-item>
			<u-form-item label="手机" prop="mobile"><u-input v-model="form.mobile" placeholder="请输入手机" /></u-form-item>
			<u-form-item label="验证码" prop="code">
				<u-input v-model="form.code" placeholder="请输入验证码" maxlength="4" />
				<block solt="right">
					<u-verification-code :seconds="seconds" @change="codeChange" ref="uCode"></u-verification-code>
					<u-button size="mini" @tap="getCode" type="success"
						style="background-color: #61c9f0;">{{tips}}</u-button>
				</block>
			</u-form-item>
		</u-form>
		<view class="m-t-20 m-b-20" style="color: #909399;text-align: center;">
			注：一经绑定暂不支持修改
		</view>
		<u-button @click="submit" type="success" style="background-color: #61c9f0;">提交</u-button>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex';
	import {
		sendCode,
		bindAlipay
	} from "@/api/cash.js"
	export default {
		computed: {
			...mapState(['user']),
			isRealname() {
				return !!this.user.info.realname
			},
			isIdcard() {
				return !!this.user.info.idcard
			}
		},
		data() {
			return {
				form: {},
				tips: "",
				seconds: 10,
				rules: {
					// realname: [{
					// 	required: true,
					// 	message: '请输入真实姓名',
					// 	trigger: ['change', 'blur'],
					// }],
					// idcard: [{
					// 	required: true,
					// 	message: '请输入身份证号',
					// 	trigger: ['change', 'blur'],
					// }],
					aliname: [{
						required: true,
						message: '请输入姓名',
						trigger: ['change', 'blur'],
					}],
					aliidentity: [{
						required: true,
						message: '请输入收款账号',
						trigger: ['change', 'blur'],
					}, ],
					mobile: [{
							required: true,
							message: '请输入手机号',
							trigger: ['change', 'blur'],
						},
						{
							validator: (rule, value, callback) => {
								return this.$u.test.mobile(value);
							},
							message: '手机号码不正确',
							trigger: ['change', 'blur'],
						}
					],
					code: [{
							required: true,
							message: '请输入4位数验证码',
							trigger: ['change', 'blur'],
						},
						{
							min: 4,
							message: '请输入4位数验证码',
							trigger: ['change', 'blur'],
						}
					],
				}
			}
		},
		methods: {
			codeChange(text) {
				this.tips = text;
			},
			getCode() {
				let that = this,
					mobile = this.form.mobile

				if (!this.$u.test.mobile(mobile)) {
					this.$throw("请输入正确手机号")
				}
				if (this.$refs.uCode.canGetCode) {
					// 模拟向后端请求验证码
					uni.showLoading({
						title: '正在获取验证码'
					})

					sendCode({
						mobile: mobile
					}).then(res => {
						if (res.code == 1) {
							that.$u.toast('验证码已发送');
							that.$refs.uCode.start();
						}
					})
				} else {
					this.$u.toast('倒计时结束后再发送');
				}
			},
			submit() {
				let that = this
				this.$refs.uForm.validate(valid => {
					if (valid) {
						uni.showLoading({
							title: '正在提交'
						})
						bindAlipay(that.form).then(res => {
							that.$u.toast(res.msg);
							if (res.code == 1) {
								setTimeout(function() {
									that.$utils.handleSwitchTab("/pages/tabBar/user")
								}, 1000)
							}
						})
					}
				});
			},
		},
		onReady() {
			console.log(this.user.info, '00000')
			this.$refs.uForm.setRules(this.rules);
			// this.form['realname'] = this.user.info.realname
			// this.form['idcard'] = this.user.info.idcard


		}
	}
</script>

<style lang="scss">
	.container {
		width: 90%;
		margin: 0 auto;
	}
</style>