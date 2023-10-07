<template>
	<view>
		<customNavbar title="充值明细" />
		<view class="container">
			<view class="header"></view>
			<view class="commonContainer">
				<view class="mainBlock">
					<u-tabs
						active-color="#87ceeb"
						:list="tabList" :is-scroll="false" :current="current" @change="change"></u-tabs>

					<view v-if="list.length > 0">
						<u-cell-group>
							<u-cell-item v-for="(item, index) in list" 
							:title="item.status==2?'成功':'失败'" :arrow="false" :value="item.money"
							:label="item.createtime_text"
							></u-cell-item>
						</u-cell-group>
					</view>
					<u-empty v-else mode="list" />
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { rechargeLog } from '../../api/finance';
	export default {
		data() {
			return {
				page: 1,
				list: [],
				tabList: [
					{
						name: '全部'
					}, {
						name: '充值失败'
					}, {
						name: '充值成功'
					}
				],
				current: 0,
			}
		},
		onLoad() {
			this.getList()
		},
		onReachBottom(){
			this.page = this.page + 1
			this.getList()
		},
		methods: {
			getList(){
				let that = this
				rechargeLog({
					page: this.page,
					t: this.current
				}).then(res=>{
					if(res.code == 1){
						const { data } = res.data
						if(data.length > 0){
							that.list = that.list.concat(data)
						}else{
							this.page = this.page - 1
						}
					}
				})
			},
			change(e){
				this.current = e
				this.page = 1
				this.list = []
				this.getList()
			}
		}
	}
</script>

<style lang="scss">
	.container{
		.header{
			height: 8vh;
		}
		.commonContainer{
			margin-top: -6vh;
			.mainBlock{
				color: #000000;
			}
		}
	}
	
</style>