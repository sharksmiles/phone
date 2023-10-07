<template>
	<view>
		<customNavbar title="互动消息" />
		<u-tabs :current="current" :list="tabs" @change="tabChange"></u-tabs>
		<view class="imgs" v-if="list.length == 0">
			<img src="/static/imgs/empty.png" alt="">
			<span class="imgs-font">暂无信息~</span>
		</view>
		<view v-else>
			<view class="list" v-for="(item, index) in list" v-if="current != 1">
				<view class="user-info">
					<view class="left">
						<image :src="item.avatar" mode="aspectFill"></image>
					</view>
					<view class="right">
						<view class="top">
							<view>
								<view class="name">{{ item.nickname }}</view>
								<view class="time">
									{{ item.createtime_text }}
								</view>
							</view>
						</view>
					</view>
					<!-- <view class="follow">
						<text class="follow">关注</text>
					</view> -->
				</view>
				<block v-if="current == 0">
					<view class="m-t-5">赞了我的评论</view>
					<view class="content m-t-5">
						{{ item.content }}
					</view>
				</block>
				<block v-else>
					<view class="m-t-5">{{ item.content }}</view>
					<view class="content m-t-5">
						{{ item.name }}
					</view>
				</block>
			</view>
			<view class="follow-list" v-else v-for="(item, index) in list">
				<view class="avatar">
					<image :src="item.avatar" mode="widthFix"></image>
				</view>
				<view class="info">
					<view class="nickname">
						{{item.nickname}}
					</view>
					<view class="text">
						<text class="age">年龄:{{item.age}}天</text>
					</view>
				</view>
				<view class="viewFlex btn">
					<u-button :type="item.follow?'default':'success'" @click="userFollowClick(item, index)" shape="circle" size="mini">{{item.follow?'已':''}}关注</u-button>
				</view>
			</view>
			<u-loadmore :status="loadmoreStatus" @loadmore="loadmore" />
		</view>
	</view>
</template>

<script>
	import { information } from '@/api/message';
	import { follow } from "@/api/user.js"
	import { mapState } from 'vuex';
	export default {
		computed: {
		    ...mapState(['user']),
		}, 
		data() {
			return {
				current: 0,
				page: 1,
				tabs: [{
					name: '点赞',
				}, {
					name: '关注'
				}, {
					name: '评论'
				}],
				loadmoreStatus: "loadmore",
				list: [],
				total: 0
			}
		},
		onLoad(){
			this.getList()
		},
		onReachBottom(){
			this.loadmoreStatus = "loading"
			this.page = this.page + 1
			this.getList()
		},
		methods: {
			loadmore(){
				this.page = this.page + 1
				this.getList()
			},
			tabChange(index) {
				this.current = index
				this.page = 1
				this.list = []
				this.getList()
			},
			getList(){
				let that = this
				
				information({
					type: this.current,
					page: this.page,
				}).then(res=> {
					if(res.code == 1){
						const { list, total } = res.data
						let loadmoreStatus = "loadmore"
						if(list.length > 0){
							that.list = that.list.concat(list)
						}else{
							that.page = that.page - 1
							loadmoreStatus = "nomore"
						}
						that.loadmoreStatus = loadmoreStatus
						that.total = total
					}
				})
			},
			userFollowClick(item, index) {
				let that = this
				if(this.user.hasLogin){
					uni.showToast({
						title: "请稍后...",
						icon: "loading",
					});
					follow(item.id).then(res=>{
						that.list[index].follow = !that.list[index].follow
					})
				}else{
					this.$utils.reLaunchLogin()
				}
			},
		}
	}
</script>

<style lang="less" scoped>
	.imgs-font {
		margin-top: 20px !important;
		padding-left: 2vh;
		display: inline-block;
		font-size: 12px;
	}

	.imgs {
		text-align: center;
		border-radius: 20px;
		width: 300px;
		height: 179px;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
	
	.list{
		border-bottom: 1px solid #ededed;
		padding: 15px;
		.user-info {
			display: flex;
		
			.left {
				image {
					width: 75rpx;
					height: 75rpx;
					border-radius: 50%;
					background-color: #f2f2f2;
				}
			}
		
			.right {
				flex: 1;
				padding-left: 20rpx;
				font-size: 30rpx;
		
				.top {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-bottom: 10rpx;
		
					.name {
						color: #000000;
						font-weight: bold;
					}
					.time{
						color: #b2b2b2;
						font-size: 22rpx;
					}
				}
			}
			.follow{
				text{
					padding: 2px 5px;
					font-size: 22rpx;
					border: 1rpx solid red;
					border-radius: 6rpx;
					color: red;
				}
			}
		}
		.content{
			padding: 10rpx;
			background-color: #f9fafc;
			line-height: 45px;
			border-radius: 6rpx;
		}
	}
	.follow-list{
		padding: 20rpx;
		display: flex;
		.avatar{
			image{
				width: 50px;
				height: 50px;
				border-radius: 50%;
			}
		}
		.info{
			margin-left: 20rpx;
			flex: 1;
			.nickname{
				font-weight: bold;
			}
			.age{
				padding: 0 5px;
				background: #f4f6f8;
				font-size: 12px;
				border-radius: 20rpx;
				color: #bf778e;
			}
		}
		.btn{
			
			align-items: center;
		}
	}
</style>