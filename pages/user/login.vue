<template>
	<view class="loginWrap ">
		<view class="imgWrap">
			<image class="logo" style="width: 100upx;height: 100upx;" src="../../static/logo.png" mode=""></image>
		</view>



		<u-form class="loginForm" :model="form">
			<block v-if="loginWay == 1">
				<view class="uni-form-item uni-column">
					<u-input placeholder="请输入登录账号" v-model="form.mobile" type="number" clearable />
				</view>
				<view class="uni-form-item uni-column">
					<u-input v-model="form.password" type="password" placeholder="请输入密码" :password-icon="true" />
				</view>
			</block>
			<block v-if="loginWay == 2">
				<view class="uni-form-item uni-column">
					<u-input maxlength="11" placeholder="请输入手机号码" type="number" v-model="form.mobile" />
				</view>
				<view class="uni-form-item uni-column">
					<u-input maxlength="4" placeholder="请输入验证码" type="number" v-model="form.code" />
					<view class="wrap">
						<u-toast ref="uToast"></u-toast>
						<u-verification-code :seconds="seconds" ref="uCode" @change="codeChange"></u-verification-code>
						<u-button type="success" style="background-color: #61c9f0;" size="mini"
							@click="getCode">{{tips}}</u-button>
					</view>
				</view>
			</block>

			<p style="font-size: 14px; margin: 30px 15px;text-align: center;">
				<u-checkbox-group @change="checkboxGroupChange" shape="circle">
					<u-checkbox v-model="checked" active-color="red">
						我已阅读并同意
						<span style=" color: #61c9f0;text-decoration: underline;"
							@click="$utils.handleNavigate('/pages/common/xieyi?name=userAgreement')">
							《服务协议》
						</span>
					</u-checkbox>
				</u-checkbox-group>
			</p>

			<u-button :disabled="!checked" type="success" style="background-color: #61c9f0;" class="loginbtn"
				@click="formSubmit">登录</u-button>
		</u-form>

		<view class="action center">
			<text @click="changeLoginWay" style="color: #71B6F7;">{{loginWay == 2?'账号密码登录':'短信验证登录'}}</text>
		</view>
	</view>
</template>

<script>
	import {
		sendCode as sendCodeApi
	} from '../../api/user';
	export default {
		data() {
			return {
				form: {
					mobile: "",
					code: "",
					password: null,
					invite_code: this.invite_code
				},
				loginWay: 2,
				seconds: 60,
				tips: '',
				checked: false,

			}
		},
		computed: {
			invite_code() {
				console.log(this.$route.query.invite_code, 'this.$route.query.invite_code')
				return this.$route.query.invite_code || ''
			}
		},
		mounted() {
			// this.$route.query.invite_code ? this.form.invite_code = this.$route.query.invite_code : null
		},
		methods: {
			formSubmit() {
				let loginWay = this.loginWay,
					form = this.form,
					that = this


				if (!this.$u.test.mobile(form.mobile)) {
					this.$u.toast('请输入正确手机号');
					return
				}
				if (loginWay == 2) {
					if (form.code.length != 4) {
						this.$u.toast('请输入正确验证码');
						return
					}
				} else {
					if (this.$utils.isEmpty(form.password)) {
						this.$u.toast('请输入密码');
						return
					}
				}

				form.loginWay = loginWay
				form.invite_code = this.invite_code
				this.$store.dispatch("user/login", form)
			},
			changeLoginWay() {
				this.loginWay = this.loginWay == 1 ? 2 : 1;
			},
			codeChange(text) {
				this.tips = text;
			},
			getCode() {
				if (this.$refs.uCode.canGetCode) {
					uni.showLoading({
						title: '正在获取验证码'
					})
					sendCodeApi({
						mobile: this.form.mobile,
						event: "mobilelogin"
					}).then(res => {

						this.$refs.uCode.start();
					})
				}
			},
			submit() {
				let that = this
				this.$refs.uForm.validate(valid => {
					console.log(valid)
					if (valid) {
						console.log('验证通过');
					} else {
						console.log('验证失败');
					}
				});
			},
			checkboxChange(e) {
				//console.log(e);
			},
			checkboxGroupChange(e) {
				// console.log(e);
			},
		}
	}
</script>

<style lang="less">
	.loginWrap {
		.imgWrap {
			text-align: center;
			padding: 50upx;
		}

		.loginForm {
			.uni-form-item {
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-bottom: 1upx solid #DCDCDC;
				padding: 10upx 30upx;
				margin: 20upx;

				u-input {
					flex: 1;
				}

				.forgetText {
					color: #C8C7CC;
				}

			}

			.wrap {
				height: auto;
			}

			.loginbtn {
				margin: 20upx;
				margin-top: 60upx;
			}
		}

		.action {
			padding: 10upx 30upx;
		}
	}
</style>