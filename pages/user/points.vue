<template>
	<view style="background-color: rgb(245, 245, 245)">
		<customNavbar title="我的信誉" />

		<view class="points-title text-center ">
			<view class="grade backg">
				<img src="@/static/imgs/1.png" alt="" style="width: 200pt;height: 200pt;" v-if="user.info.score<=59">
				<img src="@/static/imgs/2.png" alt="" style="width: 200pt;height: 200pt;"
					v-else-if="user.info.score>59&&user.info.score<=80">
				<img src="@/static/imgs/3.png" alt="" style="width: 200pt;height: 200pt;" v-else>
				<h4 style="font-weight: 400; font-size: 18pt; position: relative; top: -105pt;">
					{{user.info.score}}
				</h4>
				<!-- <span class="border-radius-15 credit-item">信誉良好</span> -->
			</view>
		</view>
		<view class="points-div m-t-20 border-radius-10">
			<ul>
				<li>
					完成订单可增加积分
					<text style="color: #00aaff;">
						(每日上限5分)
					</text>
				</li>
				<li class="m-t-15">
					被举报/拉黑会扣除积分
				</li>
				<li class="m-t-15">
					完成实名认证
					<text style="color: #00aaff;">
						(+20积分)
					</text>
				</li>
			</ul>
		</view>
		<view class="points-div m-t-15 border-radius-10">
			<ul>
				<li>
					信誉分 59分禁止租用
				</li>
				<li class="m-t-15">
					信誉分>59分可时租、日租
				</li>
				<li class="m-t-15">
					信誉分>60分每积1分可获得5元免押金额度
				</li>
				<li class="m-t-15">
					信誉分>60分可月租
				</li>
				<li class="m-t-15">
					为保证客户账号安全，代练类业务需要强制实名
				</li>
				<p class="m-t-20" style="color: rgb(153, 153, 153);">
					信誉分达到100分可享免押金租借(平台活动期,暂不收取押金)
				</p>
			</ul>
		</view>
		<view style="height: 10vh;"></view>
		<view class="footer">
			<u-button :disabled="user.info.realname?true:false" type="success"
				style="background-color: #00aaff !important" @click="$utils.handleNavigate('/pages/user/bindReal')">
				{{user.info.realname?"已实名":"实名认证"}}
			</u-button>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex';
	export default {
		computed: {
			...mapState(['user'])
		},
		data() {
			return {

			}
		},
		onShow() {
			this.$store.dispatch("user/getUserInfo")
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.points-title {
		height: 260px;
		text-align: center;
		font-weight: 600;
		color: #fff;
		margin: 0 -20px;
	}

	.backg {
		// background-image: url(@/static/imgs/points-bg.png);
		background-repeat: no-repeat;
		background-size: cover;
		background-color: #fff;
		margin-top: 20px;
		color: #000;
	}

	.grade {
		width: 100%;
		height: 100%;
		position: relative;
		// background-image: url("@/static/imgs/grade-icon.png");
		background-repeat: no-repeat;
		background-size: cover;

		h3 {
			line-height: 200px;
			font-size: 40px;
		}

		.credit-item {
			position: absolute;
			bottom: 28px;
			left: 45px;
			width: 110px;
			height: 30px;
			background: #fff;
			font-size: 16px;
			font-weight: 600;
			color: #61c9f0;
			line-height: 30px;
		}
	}

	.points-div {
		padding: 15px;
		background: #fff;
		box-shadow: 3px -2px 15px 0 hsla(0, 0%, 91%, .5);
		font-size: 14px;

		.mintui {
			font-family: mintui !important;
			font-style: normal;
			-webkit-font-smoothing: antialiased;
			-webkit-text-stroke-width: 0.2px;
			-moz-osx-font-smoothing: grayscale;
		}
	}

	.footer {
		position: fixed;
		bottom: 0;
		width: 100vw;
		height: 60px;
		background-color: #fff;
		display: flex;
		-ms-flex-pack: center;
		justify-content: center;
		align-items: center;

		button {
			width: 80%;
			height: 40px;
			line-height: 40px;
			border-radius: 40px;
			font-size: 16px;
		}
	}
</style>