<template>
	<view class="container">
		<u-form :model="form" ref="uForm" label-position="top" :label-style="{fontSize:'30rpx',fontWeight:'bold'}">
			<u-form-item label="用户头像" prop="avatar">
				<u-upload
					:deletable="form.isprofile"
					:show-progress="false"
					:action="env.uploadUrl"  
					max-count="1"
					:file-list="form.avatar" 
					ref="imageUpload" 
				></u-upload>
				<!-- <u-avatar @click="chooseImg" :src="form.avatar" size="150"></u-avatar> -->
			</u-form-item>
			<u-form-item label="昵称" prop="nickname">
				<u-input v-model="form.nickname" placeholder="请输入昵称" />
			</u-form-item>
			<u-form-item label="QQ号" prop="qq">
				<u-input v-model="form.qq" placeholder="请输入qq号" />
			</u-form-item>
			<u-form-item label="手机号"  prop="mobile">
				<u-input v-model="form.mobile" placeholder="请输入手机号" />
			</u-form-item>
		</u-form>
		<view class="m-t-20 m-b-20" style="color: #909399;text-align: center;">
			保存成功后 30 天内支持修改一次
		</view>
		<block v-if="form.status == 1">
			<view style="font-size: 40rpx; font-weight: bold;text-align: center;">审核中，请等待</view>
		</block>
		<block v-else-if="form.status == 3">
			<u-button @click="submit" type="success" style="background-color: #61c9f0;">重新提交</u-button>
		</block>
		<u-button v-else @click="submit" type="success" style="background-color: #61c9f0;" :disabled="!user.info.isprofile">{{user.info.isprofile?"提交":user.info.profileday + "天后可修改资料"}}</u-button>
	</view>
</template>

<script>
	import { profileInit, profile } from "@/api/user.js"
	import { mapState } from 'vuex';
	import env from "@/util/env.js"
	export default {
		computed: {
		    ...mapState(['user']),
		}, 
		data() {
			return {
				form: {
				},
				env: env,
				rules: {
					nickname: [
						{
							required: true,
							message: '请输入昵称',
							trigger: ['change','blur'],
						},
					],
					qq: [
						{
							required: true,
							message: '请输入qq号码',
							trigger: ['change','blur'],
						},
					],
					mobile: [
						{
							required: true,
							message: '请输入手机号',
							trigger: ['change','blur'],
						},
						{
							validator: (rule, value, callback) => {
								return this.$u.test.mobile(value);
							},
							message: '手机号码不正确',
							trigger: ['change','blur'],
						}
					]
				}
			}
		},
		onLoad() {
			let that = this
			profileInit().then(res=>{
				const { data, code} = res
				if(code == 1){
					if(data){
						that.form = {
							avatar: [{
								'url': data.avatar
							}],
							nickname: data.nickname,
							qq: data.qq,
							mobile: data.mobile,
							isprofile: data.isprofile,
							profileday: data.profileday,
							status: data.status
						}
					}
				}
				
			})
		},
		methods: {
			submit() {
				let that = this
					, form = that.form
					, avatar = this.$utils.formatImage(this.$refs.imageUpload.lists).shift()
					
				if(!avatar){
					this.$throw("请上传头像")
				}
				this.$refs.uForm.validate(valid => {
					if (valid) {
						uni.showLoading({
							title: '正在提交'
						})
						form.avatar = avatar
						profile({
							nickname: form.nickname,
							qq: form.qq,
							mobile: form.mobile,
							avatar: avatar,
						}).then(res=>{
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