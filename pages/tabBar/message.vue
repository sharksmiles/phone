<template>
	<view class="message-top">
		<view class="message">
			<view class="message-list-item">消息</view>
		</view>
		<view style="background-color: #fafafa; height: 100%;">
			<view class="interaction" @click="$utils.handleNavigate('/pages/user/notification')">
				<view style="display: flex;">
					<img src="../../static/imgs/interaction.png" style="width: 40px;">
					<view style="margin: 10px;">互动消息</view>
				</view>
			</view>
			<view class="interaction" @click="$utils.handleNavigate('/pages/message/chat/chat?id=' + item.friend_id)"
				v-for="(item, index) in list">
				<view style="display: flex;">
					<u-avatar :src="item.avatar" shape="circle" size="40"></u-avatar>
					<view class="message-list" style="width: 100%;">
						<view style="width: 100%; display: flex;">
							<span class="message-name">{{item.nickname}}</span>
							<span class="message-time">{{item.last_time}}</span>
						</view>
						<view class="message-content">
							[<text style="color: red;" v-if="item.isUidOnline">在线</text>
							<text v-else>离线请留言</text>]
						</view>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import {
		friendsInit
	} from '../../api/message';
	export default {
		data() {
			return {
				list: [],
			}
		},
		methods: {

		},
		onLoad() {
			let that = this
			friendsInit().then(res => {
				that.list = res.data
			})
		}
	}
</script>
<style lang="less" scoped>
	page {
		background-color: rgb(250, 250, 250);
	}

	.message-top {
		padding-bottom: calc(var(--window-bottom));
		height: auto;
	}

	.message-content {
		padding: 9px;
		color: #999;
		font-size: 14px;
	}

	.message-name {
		color: #76828c;
		flex: 1;
		padding-left: 10px;
	}

	.message-time {
		font-size: 12px;
		padding-left: 10px;
		flex-shrink: 0;
		text-align: right;
		color: #919191;
	}

	.interaction {
		padding: 12px 20px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
		-webkit-transition: .2s;
		-o-transition: .2s;
		transition: .2s;
		background: #fff;
		margin: 10px 20px;
		border-radius: 10px;
		-webkit-box-shadow: #e8e8e8 3px -2px 15px 0;
		box-shadow: 3px -2px 15px 0 #e8e8e8;
	}

	.message {
		height: 10vh;
	}

	.message-list-item {
		margin-top: 30px !important;
		margin-bottom: 18px;
		margin-left: 20px;
		white-space: nowrap;
		width: 150px;
		height: 42px;
		font-size: 30px;
		font-weight: 500;
		color: #333;
		line-height: 42px;
		// 
	}
</style>