<template>
	<view>
		<u-navbar :is-fixed="false" :custom-back="()=>{$utils.comeback()}">
			<view class="slot-wrap">
				<view class="title">我的订单</view>
				<view class="search">
					<u-search placeholder="输入订单号/账号ID搜索" v-model="keyword" @search="search" @custom="search"
						:animation="true" />
				</view>
			</view>
		</u-navbar>
		<view class="container">
			<view class="header"></view>
			<view class="commonContainer">
				<view class="mainBlock">
					<u-sticky h5-nav-height="0" bg-color="linear-gradient(#fafafa, #fefefe, #fafafa)" class="sticky">
						<u-tabs active-color="#87ceeb" :list="tabList" :is-scroll="false" :current="current"
							@change="change"></u-tabs>

						<view class="text-center status">
							<view v-for="(item, index) in statusList" class="item" @click="statusClick(item.value)"
								:class="statusCurrent == item.value?'curr':''">
								<text>{{item.name}}</text>
							</view>
						</view>
					</u-sticky>
					<view v-if="list.length > 0">
						<view v-for="(item, index) in list" class="interaction"
							@click="$utils.handleNavigate('./detail?id=' + item.id)">
							<view style="display: flex;    margin-bottom: 10px;">
								<u-avatar :src="item.imgs" shape="circle" size="40"></u-avatar>
								<view class="message-list" style="width: 100%;">
									<view style="width: 100%; display: flex;">
										<span class="message-game">{{item.game_name}}</span>
										<span class="message-name">{{item.name}}</span>
										<span class="message-state"
											:class="'status' + item.status">{{item.status_text}}</span>
									</view>
									<view style="display: flex; padding:5px">
										<view class="message-content m-r-5">{{item.zone_name}}{{item.server_name}}
										</view>
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
			</view>
		</view>
	</view>
</template>

<script>
	import {
		userOrderList
	} from "@/api/order.js"
	export default {
		data() {
			return {
				keyword: "",
				page: 1,
				list: [],
				statusList: [{
						name: '全部',
						value: 0
					},
					{
						name: '未发货',
						value: 7
					},
					{
						name: '进行中',
						value: 2
					},
					{
						name: '已完成',
						value: 3
					},
					{
						name: '其他',
						value: 10
					},
					{
						name: '交易纠纷',
						value: 12
					},
				],
				statusCurrent: 0,
				tabList: [{
					name: '今日'
				}, {
					name: '全部'
				}],
				current: 0,
				total: 0,
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
				userOrderList({
					page: this.page,
					current: this.current,
					status: this.statusCurrent,
					keyword: this.keyword
				}).then(res => {
					let loadmoreStatus = "loadmore"
					if (res.code == 1) {
						const {
							total,
							list
						} = res.data
						if (list.length > 0) {
							that.list = that.list.concat(list)
						} else {
							this.page = this.page - 1
							loadmoreStatus = "nomore"
						}
						that.loadmoreStatus = loadmoreStatus
						that.total = total
					}
				})
			},
			search() {
				this.page = 1
				this.list = []
				this.loadmoreStatus = "loading"
				this.getList()
			},
			statusClick(status) {
				this.statusCurrent = status
				this.page = 1
				this.list = []
				this.loadmoreStatus = "loading"
				this.getList()
			},
			change(e) {
				this.current = e
				this.page = 1
				this.loadmoreStatus = "loading"
				this.list = []
				this.getList()
			}
		}
	}
</script>

<style lang="scss">
	page {
		background: linear-gradient(#fafafa, #fefefe, #fafafa);
	}

	.slot-wrap {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex: 1;
		padding: 0 30rpx;

		.title {
			width: 35%;
			font-size: 18px;
			font-weight: 500;
			color: #333;
		}

		.search {
			width: 65%;
		}
	}

	.container {
		.header {
			height: 8vh;
		}

		.commonContainer {
			margin-top: -6vh;

			.mainBlock {
				color: #000000;

				.sticky {
					.status {
						overflow: hidden;
						padding: 20px 10px;
						background: linear-gradient(#fafafa, #fefefe, #fafafa);
						justify-content: space-between;

						.item {
							color: #000000;
							background: #f4f4f4;
							width: 55px;
							height: 20px;
							border-radius: 10px;
							line-height: 20px;
							text-align: center;
							font-size: 12px;
						}

						.curr {
							background: #61c9f0;
							color: #fff;
						}
					}
				}
			}
		}
	}

	.message-top {
		padding-bottom: calc(var(--window-bottom));
		height: auto;
	}

	.message-content {
		// background: rgba(255, 238, 213, 1.0);
		border-radius: 9px;
		color: rgba(46, 44, 43, 1.0);
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
		background-image: url(/static/imgs/account-game-icon.png);
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

	.message-list {
		.status1 {
			background: #4c92d4 !important;
		}

		.status2 {
			background: #fd8d26 !important;
		}

		.status3 {
			background: #21b464 !important;
		}

		.status4 {
			background: red;
		}
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