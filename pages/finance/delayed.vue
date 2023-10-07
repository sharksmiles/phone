<template>
	<view>
		<customNavbar title="不可提现明细" />
		<view class="container">
			<view class="header"></view>
			<view class="commonContainer">
				<view class="mainBlock">
					<view v-if="list.length > 0">
						<u-cell-group>
							<u-cell-item v-for="(item, index) in list" 
							:title="item.name" :arrow="false" :value="item.price"
							:label="'到账时间：' + item.settlementtime_text"
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
	import { delayedLog } from '../../api/finance';
	export default {
		data() {
			return {
				list: [],
			}
		},
		onLoad() {
			this.getList()
		},
		methods: {
			getList(){
				let that = this
				delayedLog().then(res=>{
					if(res.code == 1){
						const { data } = res
						that.list = data
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