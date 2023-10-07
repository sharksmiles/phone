<template>
	<view>
		<customNavbar :title="`我发布的${$utils.getreleaseName(release_type)}(${total})`" />
		<block class="" v-if="list.length > 0">
			<view class="order-list m-t-10" v-for="(item, index) in list"
				@click="$utils.handleNavigate('/pages/user/account/statistics?id=' + item.id)">
				<view class="listTop viewFlex p-10">
					<view class="avatar-img border-radius-10 pull-left oh text-center">
						<img :src="item.cover_image" width="88" height="110">
						<view class="state" v-if="item.status != 2">{{item.status_text}}</view>
					</view>

					<view class="listText pull-left m-l-10" style="width: 98%; flex: 1 1 0%;">
						<h3 class="listTitle">
							<view class="account-item-game-icon"
								style="background-image: url(&quot;https://oss-img.mengzuhao.cn/account-game-icon.png&quot;); background-repeat: no-repeat; background-size: cover;">
								{{item.game_name}}
							</view>
							{{item.name}}
						</h3>
						<view class="listCon m-t-5">
							<span>{{item.zone_name}}</span>
							<text class="m-l-5">{{item.school_name}}/{{item.body_name}}</text>
						</view>
						<view class="userId m-t-5">{{release_type == 1?"账号":"技能"}}ID：{{item.zid}}</view>
						<div class="order-list-cost m-t-5">
							<span class="h">
								¥ <text class="price">{{item.hourRent}}</text>/时
							</span>
							<span class="d">
								¥ <text class="price">{{item.dayRent}}</text>/时
							</span>
							<span class="m">
								¥ <text class="price">{{item.monthRent}}</text>/时
							</span>
						</div>
					</view>
				</view>
				<view v-if="item.release_type == 2" style="text-align: right;" class="p-b-10 m-r-10">
					<u-button @click="quickReceiveClick(item, index)" size="mini"
						:type="item.quick_receive?'warning':'primary'">
						{{item.quick_receive?"取消秒接单":"秒接单"}}
					</u-button>
				</view>
			</view>
			<u-loadmore :status="loadmoreStatus" @loadmore="loadmore" />
		</block>
		<u-empty v-else mode="list"></u-empty>
		<!-- <u-popup v-model="emojiShow" mode="center" :closeable="true" border-radius="10">
			<view class="bqb bqb2">
				<i
					class="emoji m-r-5"
					v-for="(item1, index1) in faceList[tabIndex].iconArr"
					:key="index1"
					@click="clickEmoji(item1.icon)"
				>
					{{ item1.icon }}
				</i>
			</view>
		</u-popup> -->
	</view>
</template>

<script>
	// import { emojiArr } from "@/util/emojiArr"; //引入js文件
	import {
		accountList,
	} from "@/api/user"
	import {
		quickReceive
	} from "@/api/account.js"
	export default {
		data() {
			return {
				// faceList: emojiArr,
				tabIndex: 0,
				page: 1,
				loadmoreStatus: "loadmore",
				list: [],
				total: 0,
				release_type: 0,
				emojiShow: false
			}
		},
		onReachBottom() {
			this.loadmore()
		},
		onLoad(options) {
			this.release_type = options.release_type
			// this.getList()
		},
		onShow(options) {
			this.getList('new')
		},
		methods: {
			loadmore() {
				this.loadmoreStatus = "loading"
				this.page = this.page + 1
				this.getList()
			},
			getList(type) {
				let that = this
				accountList(this.release_type, {
					page: this.page,
				}).then(res => {
					const {
						list,
						total
					} = res.data
					if (list.length > 0) {
						type == 'new' ? that.list = list : that.list = that.list.concat(list)
						that.loadmoreStatus = "loadmore"
					} else {
						this.page = this.page - 1
						that.loadmoreStatus = "nomore"
					}
					that.total = total
				})
			},
			quickReceiveClick(item, index) {
				let that = this
				// this.emojiShow = true
				quickReceive(item.id).then(res => {
					that.list[index].quick_receive = that.list[index].quick_receive ? 0 : 1
				})
			}
		}
	}
</script>

<style lang="scss">
	.state {
		background-image: url(/static/imgs/state-icon.png);
		background-repeat: no-repeat;
		background-size: cover;
		position: absolute;
		width: 70px;
		height: 70px;
		text-align: center;
		line-height: 56px;
		color: #fff;
	}

	.bqb {
		background-color: #ffffff;
		width: 80vw;
		padding: 20rpx;
		padding-top: 70rpx;
	}

	.bqb2 {
		.emoji:hover {
			background-color: #f2f2f2;
		}

		i {
			font-size: 25px;
			font-style: normal;
		}
	}
</style>