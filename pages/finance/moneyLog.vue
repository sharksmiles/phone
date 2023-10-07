<template>
	<view>
		<customNavbar title="余额明细" />
		<view class="container">
			<view class="header"></view>
			<view class="commonContainer">
				<view class="mainBlock">
					<view v-if="list.length > 0">
						<u-cell-group>
							<u-cell-item v-for="(item, index) in list" 
							:title="item.memo" :arrow="false" :value="item.value"
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
	import { userMoneyLog } from '../../api/finance';
	export default {
		data() {
			return {
				page: 1,
				list: []
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
				userMoneyLog({
					page: this.page
				}).then(res=>{
					console.log(res)
					if(res.code == 1){
						const { data } = res.data
						if(data.length > 0){
							that.list = that.list.concat(data)
						}else{
							this.page = this.page - 1
						}
					}
				})
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