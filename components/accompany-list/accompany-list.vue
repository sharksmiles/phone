<template>
	<view>
		<block v-if="list.length > 0">
			<view class="order-list p-10 m-t-10" v-for="(item, index) in list">
				<view class="listTop viewFlex"
					@click="$utils.handleNavigate('/pages/account/accompany/detail?id=' + item.id)">
					<view class="avatar-img border-radius-10 pull-left oh text-center" style="position: relative;">
						<img :src="item.avatar" width="88">
						<view class="state" v-if="item.orderStatus ">出租中</view>
						<view v-if="item.quick_receive == 1" class="pull-right receiving">

							<!-- <span class="enjoy">😀</span> -->
						</view>
					</view>

					<view class="listText pull-left m-l-10" style="width: 71%;">
						<h3 class="listTitle">
							<span style="vertical-align: bottom;">
								<span class="online" v-if="item.isUidOnline==1">
									<u-icon name="attach" size="4"></u-icon>
									在线
								</span>
								{{item.name}}
							</span>
						</h3>
						<view class="listCon m-t-5">
							<span class="rentalsNum m-t-5">近期接单{{item.rentNum}}次</span>
							<span v-if="item.is_gift == 1" class="tagMZ m-t-5">满赠</span>
						</view>
						<view class="listCon m-t-5" v-if="item.auth_label.length>0">
							<span class="rentalsNum m-t-5" v-for="it in item.auth_label" :key="it"
								style="margin-right: 5px;">{{it}}</span>
						</view>

						<view class="order-list-cost m-t-5">
							<span class="h" v-if="item.hourRent && item.is_hour">
								¥ <text class="price">{{item.showHourRent}}</text>/时
							</span>
							<span class="d" v-if="item.dayRent && item.is_day">
								¥ <text class="price">{{item.showDayRent}}</text>/日
							</span>
							<span class="m" v-if="item.monthRent && item.is_month">
								¥ <text class="price">{{item.showMonthRent}}</text>/月
							</span>
						</view>
						<view class="order-list-cost m-t-5 deposit" v-if="item.deposit">
							保证金:{{item.deposit}}
						</view>
					</view>
				</view>
				<view class="listBot m-t-5" style="border-top: none; height: 30px; line-height: 30px;">
					<span class="avatar-img pull-left m-r-5">
						<img :src="item.cover_image" width="24" height="24"
							style="margin-top: 4px; border-radius: 50%;">
						<img v-if="item.official_certification" src="@/static/imgs/vip.png" alt="" class="vip-img">
					</span>
					<view v-if="item.audio_path">
						<p
							style="color: rgb(255, 122, 14); line-height: 10px; font-size: 10px; padding-top: 7px; max-width: 48px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">
							{{item.nickname}}
						</p>
						<p
							style="margin-top: 2px; line-height: 8px; font-size: 8px; padding-left: 10px; color: rgb(153, 153, 153);">
							年龄{{item.age}}天</p>
					</view>
					<view v-else>
						<span>{{item.nickname}}</span>
						<span class="m-l-10" style="color: #666;font-size: 10px!important;">年龄{{item.age}}天</span>
					</view>
				</view>
				<view v-if="item.audio_path" class="voice-card" @click="soundClick(index, item)">
					<view class="voice-bd">
						<view class="icon-play">
							<image v-if="activeIndex != index" src="@/static/imgs/icon-play2.png" alt="">
								<image v-else src="@/static/imgs/icon-pause2.png" alt="">
						</view>
						<view class="time-box ">
							<span class="start-taste-line" :class="index == activeIndex?'active':''">
								<hr class="hr1" />
								<hr class="hr2" />
								<hr class="hr3" />
								<hr class="hr4" />
								<hr class="hr5" />
								<hr class="hr6" />
								<hr class="hr7" />
								<hr class="hr8" />
								<hr class="hr9" />
								<hr class="hr10" />
								<hr class="hr11" />
								<hr class="hr12" />
							</span>
						</view>
						<text class="duration">{{item.audio_duration}}"</text>
					</view>
				</view>
			</view>
			<u-loadmore :status="loadmoreStatus" @loadmore="loadmore" />
		</block>
		<u-empty class="m-t-40" v-else text="暂无数据" icon-size="300" src="/static/imgs/empty.png"></u-empty>
	</view>
</template>

<script>
	export default {
		name: "accompany-list",
		props: {
			list: {
				type: Array,
				default: () => {
					return []
				}
			},
		},
		data() {
			return {
				loadmoreStatus: "loadmore",
				activeIndex: -1,
				soundIndex: -1,
			};
		},

		methods: {
			loadmore() {
				this.loadmoreStatus = "loading"
				this.$emit("loadmore")
			},
			soundClick(index, item) {
				if (this.activeIndex == index) {
					this.$utils.soundDestroy()
					this.activeIndex = -1
					return
				}
				this.activeIndex = index
				this.$utils.playSound(item.audio_path)
			}
		}
	}
</script>

<style lang="scss">
	.state {
		// background-image: url(/static/imgs/state-icon.png);
		background-repeat: no-repeat;
		background-size: cover;
		position: absolute;
		width: 100%;
		height: 100%;
		text-align: center;
		line-height: 100px;
		color: #fff;
		background-color: #000000;
		opacity: 0.6;
		z-index: 99;
	}

	.order-list {
		position: relative;
	}

	.receiving {
		width: 74px;
		height: 16px;
		line-height: 16px;
		top: 0;
		left: 0;
		background-image: url(@/static/imgs/receiving-icon2.png);
		background-repeat: no-repeat;
		background-size: cover;
		position: absolute;
	}

	.deposit {
		font-size: 25rpx;
	}
</style>