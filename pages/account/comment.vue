<template>
	<view>
		<div class="m-title m-t-30 m-b-20">
			<span>{{total}}</span>条评论
		</div>
		<block  v-if="commentList.length > 0" >
		<view class="comment" v-for="(res, index) in commentList" :key="res.id">
			<view class="left">
				<image :src="res.avatar" mode="aspectFill"></image>
			</view>
			<view class="right">
				<view class="top">
					<view>
						<view class="name">{{ res.nickname }}</view>
						<view class="name">
							<u-rate v-model="res.star" :disabled="true"></u-rate>
						</view>
					</view>
					<view class="like" :class="{ highlight: res.is_like }">
						<view class="num">{{ res.likeNum }}</view>
						<u-icon v-if="!res.is_like" name="thumb-up" :size="30" color="#9a9a9a"
							@click="getLike(index)"></u-icon>
						<u-icon v-if="res.is_like" name="thumb-up-fill" :size="30" @click="getLike(index)"></u-icon>
					</view>
				</view>
				<view class="content">{{ res.content }}</view>
				<view class="bottom">
					{{ res.createtime_text }}
				</view>
			</view>
		</view>
		<u-loadmore :status="loadmoreStatus" @loadmore="loadmore" />
		</block>
		<u-empty v-else text="暂无数据" icon-size="300" src="/static/imgs/empty.png"></u-empty>
	</view>
</template>

<script>
	import {
		comment,
		commentLike
	} from "@/api/index.js"
	import { mapState } from 'vuex';
	export default {
		computed: {
		    ...mapState(['user']),
		}, 
		data() {
			return {
				commentList: [],
				id: null,
				page: 1,
				loadmoreStatus: "loadmore",
				total: 0
			};
		},
		onReachBottom() {
			this.loadmoreStatus = "loading"
			this.page = this.page + 1
			this.getList()
		},
		onLoad(options) {
			this.id = options.id
			this.getList()
		},
		methods: {
			loadmore(){
				this.page = this.page + 1
				this.getList()
			},
			getLike(index) {
				if(this.user.hasLogin){
					this.commentList[index].is_like = !this.commentList[index].is_like;

					if (this.commentList[index].is_like == true) {
						this.commentList[index].likeNum++;
					} else {
						this.commentList[index].likeNum--;
					}
					commentLike(this.commentList[index].id)
					return 
				}
				this.$utils.reLaunchLogin()
			},
			getList() {
				let that = this
				comment(this.id, {
					page: this.page,
				}).then(res => {
					const { list, total } = res.data
					let loadmoreStatus = "loadmore"
					if(list.length > 0){
						that.commentList = that.commentList.concat(list)
					}else{
						that.page = that.page - 1
						loadmoreStatus = "nomore"
					}
					that.loadmoreStatus = loadmoreStatus
					that.total = total
				})
			}
		}
	};
</script>

<style lang="scss" scoped>
	.m-title {
		white-space: nowrap;
		width: 150px;
		height: 42px;
		font-size: 30px;
		font-weight: 500;
		color: #333;
		line-height: 42px;
		
		margin: 0 auto;
		font-size: 14px;
		text-align: center;
		font-size: 14px;

		span {
			font-size: 50rpx;
		}
	}

	.comment {
		display: flex;
		padding: 15px;
		border-bottom: 1px solid #ededed;

		.left {
			image {
				width: 64rpx;
				height: 64rpx;
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
					color: #5677fc;
				}

				.like {
					display: flex;
					align-items: center;
					color: #9a9a9a;
					font-size: 26rpx;

					.num {
						margin-right: 4rpx;
						color: #9a9a9a;
					}
				}

				.highlight {
					color: #5677fc;

					.num {
						color: #5677fc;
					}
				}
			}

			.content {
				margin-bottom: 10rpx;
			}

			.reply-box {
				background-color: rgb(242, 242, 242);
				border-radius: 12rpx;

				.item {
					padding: 20rpx;
					border-bottom: solid 2rpx $u-border-color;

					.username {
						font-size: 24rpx;
						color: #999999;
					}
				}

				.all-reply {
					padding: 20rpx;
					display: flex;
					color: #5677fc;
					align-items: center;

					.more {
						margin-left: 6rpx;
					}
				}
			}

			.bottom {
				margin-top: 20rpx;
				display: flex;
				font-size: 24rpx;
				color: #9a9a9a;

				.reply {
					color: #5677fc;
					margin-left: 10rpx;
				}
			}
		}
	}
</style>