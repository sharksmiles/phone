<template>
	<view>
		<view class="comment" v-for="(res, index) in commentList" :key="res.id">
			<view class="left"><image :src="res.avatar" mode="aspectFill"></image></view>
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
						<u-icon v-if="!res.is_like" name="thumb-up" :size="30" color="#9a9a9a" @click="getLike(index)"></u-icon>
						<u-icon v-if="res.is_like" name="thumb-up-fill" :size="30" @click="getLike(index)"></u-icon>
					</view>
				</view>
				<view class="content">{{ res.content }}</view>
				<view class="bottom">
					{{ res.createtime_text }}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { comment, commentLike } from "@/api/index.js"
import { mapState } from 'vuex';
export default {
	computed: {
	    ...mapState(['user']),
	}, 
	props: {
		id: {
			type: Number,
			default: 0
		},
	},
	data() {
		return {
			commentList: [],
		};
	},
	watch:{
		id:{
			handler(val){
				this.getComment()
			}
		},
	},
	methods: {
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
		getComment() {
			let that = this
			if(this.id){
				comment(this.id, {
					page: 1,
					limit: 5,
				}).then(res=>{
					const { list ,total } = res.data
					that.commentList = list;
					that.$emit("total", total)
				})
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.comment {
	display: flex;
	padding: 10px 0;
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
