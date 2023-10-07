<template>
	<view>
		<view class="special-banner special-bg">
			<view class="special-top">
				<span>专题ID&nbsp;36</span>
				<h3>声控认证</h3>
			</view>
		</view>
		<rent-list v-if="release_type == 1" :list="list" @loadmore="loadmore" ref="list"/>
		<accompany-list v-if="release_type == 2" :list="list" @loadmore="loadmore" ref="list"/>
		<training-list v-if="release_type == 3" :list="list" @loadmore="loadmore" ref="list"/>
	</view>
</template>

<script>
	import { mapState } from 'vuex';
	import { getList as getListApi } from "@/api/index.js"
	export default {
		data() {
			return {
				list: [],
				page: 1,
				total: 0,
				subjectId: 0,
				release_type: 0
			}
		},
		onLoad(options){
			this.subjectId = options.subjectId
			this.release_type = options.type
			
			this.getList()
		},
		onReachBottom(){
			this.$refs.list.loadmoreStatus = "loading"
			this.page = this.page + 1
			this.getList()
		},
		methods:{
			getList(){
				let that =this
					, query = this.query
				
				getListApi(1, {
					page: this.page,
					release_type: this.release_type,
					subjectVal: this.subjectId,
				}).then(res=>{
					const { list, total } = res.data
					let loadmoreStatus = "loadmore"
					if(list.length > 0){
						that.list = that.list.concat(list)
					}else{
						that.page = that.page - 1
						loadmoreStatus = "nomore"
					}
					that.$refs.list.loadmoreStatus = loadmoreStatus
					that.total = total
				})
			},
			loadmore(){
				this.page = this.page + 1
				this.getList()
			},
		}
	}
</script>

<style lang="scss">
	.special-banner{
		position: relative;
		height: 114px;
		background: linear-gradient(137deg,#90e0cf,#61c9f0);
		.special-top{
			z-index: 10;
			left: 20px;
			bottom: 20px;
			position: absolute;
			font-weight: 600;
			color: #fff;
		}
	}
</style>