<template>
	<view>
		<u-gap height="25" bg-color="#f2f2f3"></u-gap>
		<view class="good-item special" style="font-size: 14px;">
			<view class="m-t-10 package">
				<p class="p-title">推荐专题</p>
				<ul>
					<li @click="$utils.handleNavigate('/pages/account/subject?type=' + type + '&subjectId=' + item.id)" class="m-t-20" v-for="(item, index) in list">
						<span>{{item.name}}</span>
						<view class="border-radius-10 oh" style="height: 60px;">
							<img :src="item.image_url" width="60" height="60">
						</view>
					</li>
				</ul>
			</view>
			
		</view>
	</view>
</template>

<script>
	import { subject } from "@/api/index.js" 
	export default {
		name: "subject-list",
		props: {
			type: {
				type: Number,
				default: 1
			},
		},
		data() {
			return {
				list: [],
			}
		},
		created() {
			let that = this
			subject(this.type).then(res=>{
				if(res.code == 1){
					that.list = res.data
				}
			})
		}
	}
</script>

<style lang="scss">
	.special{
		ul{
			padding: 0;
			margin: 0;
			li{
				line-height: 60px;
				display: flex;
				list-style: none;
				span{
					flex: 1;
					font-size: 16px;
					font-weight: 500;
					color: #333;
				}
			}
		}
	}
	.good-item {
	    background-color: #fff;
	    width: 100%;
	    padding: 9px;
	}
	.p-title {
		height: 17px;
		font-size: 15px;
		font-weight: 600;
		color: #222;
		line-height: 17px;
		
		border-radius: 1px;
		display: inline-block;
	}
</style>