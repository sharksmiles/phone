<template>
	<view class="container">
		<customNavbar title="订单评论" />
		<u-form :model="form" ref="uForm" label-position="top" :label-style="{fontSize:'30rpx',fontWeight:'bold'}">
			<u-form-item label="评论内容" prop="content">
				<u-input type="textarea" v-model="form.content" placeholder="请输入评论内容" />
			</u-form-item>
			<u-form-item label="评分" prop="star">
				<u-rate v-model="form.star"></u-rate>
			</u-form-item>
		</u-form>
		<u-button @click="submit" type="success" style="background-color: #61c9f0;">提交</u-button>
	</view>
</template>

<script>
	import { comment } from "@/api/order.js"
	export default {
		data() {
			return {
				form: {
					star: 0
				},
				id: null,
				rules: {
					
				}
			}
		},
		onLoad(options) {
			this.id = options.id
		},
		methods: {
			submit() {
				let that = this
				this.$refs.uForm.validate(valid => {
					if (valid) {
						uni.showLoading({
							title: '正在提交'
						})
						that.form.orderid = that.id
						comment(that.form).then(res=>{
							that.$u.toast(res.msg);
							if(res.code == 1){
								setTimeout(function(){
									that.$utils.handleSwitchTab("/pages/tabBar/user")
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
	.container{
		width: 90%;
		margin: 0 auto;
	}
</style>