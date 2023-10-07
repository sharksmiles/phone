<template>
	<view>
		<customNavbar title="保证金明细" />
		<u-tabs
			active-color="#87ceeb"
			:list="tabList" :is-scroll="false" :current="current" @change="change"></u-tabs>
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
	import { depositLog } from '../../api/finance';
	export default {
		data() {
			return {
				page: 1,
				list: [],
				tabList: [
					{
						name: '全部'
					},{
						name: '充值'
					}, {
						name: '提现'
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
				depositLog({
					page: this.page,
					type: this.current
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