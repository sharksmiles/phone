<template>
	<view class="container">
		<customNavbar :title="type == 1? '投诉': '拉黑'" />
		<u-form :model="form" ref="uForm" label-position="top" :label-style="{fontSize:'30rpx',fontWeight:'bold'}">
			<u-form-item label="说明" prop="desc">
				<u-input
					border-color="#dcdfe6"
					v-model="form.desc" 
					type="textarea" 
					:auto-height="true" 
					height="200" 
					maxlength="-1"
					placeholder="说明" />
			</u-form-item>
			<u-form-item label="图片" prop="images">
				<u-upload 
					:action="env.uploadUrl"
					max-count="10"
					:file-list="form.images" 
					ref="imageUpload" 
				></u-upload>
			</u-form-item>
			<u-form-item label="其他选项" prop="option">
				<u-radio-group v-model="form.option">
					<u-radio 
						v-if="type == 1"
						v-for="(item, index) in config.data.complaintArr" :key="index" 
						:name="index"
					>
						{{item}}
					</u-radio>
					<u-radio
						v-if="type == 2"
						v-for="(item, index) in config.data.blockArr" :key="index" 
						:name="index"
					>
						{{item}}
					</u-radio>
				</u-radio-group>
			</u-form-item>
		</u-form>
		<u-button @click="submit" type="success" style="background-color: #61c9f0;">提交</u-button>
	</view>
</template>

<script>
	import env from "@/util/env.js"
	import { complaint, block } from "@/api/order.js"
	import { mapState } from 'vuex';
	export default {
		computed: {
		    ...mapState(["config"]),
		}, 
		data() {
			return {
				form: {},
				env: env,
				rules: {
					desc: [
						{
							required: true,
							message: '请输入说明',
							trigger: ['change','blur'],
						}
					],
					option: [
						{
							required: true,
							message: '请选择一个选项',
							trigger: ['change','blur'],
						}
					]
				},
				orderId: null,
				type: null
			}
		},
		onLoad(options) {
			this.orderId = options.orderId
			this.type = options.type
		},
		methods: {
			submit() {
				let that = this
				this.$refs.uForm.validate(valid => {
					if (valid) {
						let images = that.$utils.formatImage(that.$refs.imageUpload.lists)
						if(images.length == 0){
							that.$throw("请上传图片")
						}
						uni.showLoading({
							title: '正在提交'
						})
						that.form.orderId = that.orderId
						that.form.images = images
						that.form.type = that.type
						let api = that.type == 1? complaint(that.form): block(that.form)
						api.then(res=>{
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