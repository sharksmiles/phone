<template>
	<view class="message-top">
		<view class="message">
			<view class="message-list-item">我的订单</view>
		</view>
		<view v-if="list.length > 0" style="background-color: #fafafa; height: 100%;">
			<view v-for="(item, index) in list" class="interaction"
				@click="$utils.handleNavigate('/pages/order/detail?id=' + item.id)">
				<view style="display: flex;    margin-bottom: 10px;">
					<u-avatar :src="item.imgs" shape="circle" size="40"></u-avatar>
					<view class="message-list" style="width: 100%;">
						<view style="width: 100%; display: flex;">
							<span class="message-game">{{item.game_name}}</span>
							<span class="message-name">{{item.name}}</span>
							<span class="message-state" :class="'status' + item.status">{{item.status_text}}</span>
						</view>
						<view style="display: flex; padding:5px">
							<view class="message-content m-r-5">{{item.zone_name}}{{item.server_name}}</view>
							<view class="message-content">{{item.school_name}}/{{item.body_name}}</view>
						</view>

					</view>
				</view>
				<view class="listBot">
					<span class="message-name">合计: ¥{{item.price}}</span>
					<span class="message-name">{{item.createtime_text}}</span>
				</view>
			</view>
			<u-loadmore :status="loadmoreStatus" @loadmore="loadmore" />
		</view>
		<u-empty class="m-t-40" v-else text="暂无数据" icon-size="300" src="/static/imgs/empty.png"></u-empty>

	</view>
</template>

<script>
	import {
		getList as getListApi
	} from "@/api/order.js"
	export default {
		data() {
			return {
				page: 1,
				list: [],
				loadmoreStatus: "loadmore"
			}
		},
		onLoad() {
			this.getList()
		},
		onReachBottom() {
			this.loadmoreStatus = "loading"
			this.page = this.page + 1
			this.getList()
		},
		methods: {
			loadmore() {
				this.page = this.page + 1
				this.getList()
			},
			getList() {
				let that = this

				getListApi({
					page: this.page
				}).then(res => {
					const {
						list,
						total
					} = res.data
					let loadmoreStatus = "loadmore"
					if (list.length > 0) {
						that.list = that.list.concat(list)
					} else {
						that.page = that.page - 1
						loadmoreStatus = "nomore"
					}
					that.loadmoreStatus = loadmoreStatus
					that.total = total
				})
			},
		},
	}
</script>
<style lang="less" scoped>
	.message-top {
		padding-bottom: calc(var(--window-bottom));
		height: auto;
	}

	.message-content {
		// background: rgba(255, 238, 213, 1.0);
		border-radius: 9px;
		color: rgba(128, 128, 128, 1.0);
		text-align: center;
		padding: 1pt 5pt;
		font-size: 12px;
		box-sizing: inherit;
	}

	.listBot {
		font-size: 12px;
		height: 43px;
		line-height: 43px;
		border-top: 1px solid #ebebeb;
	}

	.message-game {
		margin-top: 3px;
		margin-left: 10px;
		width: 60px;
		background-image: url(../../static/imgs/account-game-icon.png);
		background-repeat: no-repeat;
		background-size: cover;
		background-size: 60px;
		text-align: center;
		line-height: 17px;
		height: 17px;
		font-size: 12px;
		color: #fff;
		display: inline-block;
	}

	.message-name {

		color: #76828c;
		flex: 1;
		padding-left: 10px;
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
		height: 7vh;
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

	}
</style>