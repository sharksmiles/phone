<template>
	<view>
		<block v-if="list.length > 0">
			<view class="order-list m-t-10" v-for="(item, index) in list"
				@click="$utils.handleNavigate('/pages/account/rent/detail?id=' + item.id)">
				<view class="listTop viewFlex p-10">
					<view class="avatar-img border-radius-10 pull-left oh text-center">
						<view class="state" v-if="item.orderStatus">出租中</view>
						<img :src="item.cover_image" width="88" height="110">
					</view>

					<view class="listText pull-left m-l-10" style="width: 71%;">
						<h3 class="listTitle">{{item.name}}</h3>
						<view class="listCon m-t-5">
							<span>{{item.zone_name}}{{item.server_name}}</span>
							<text class="m-l-5">{{item.school_name}}/{{item.body_name}}</text>
						</view>
						<view class="listCon m-t-5">
							<span class="rentalsNum m-t-5">近期出租{{item.rentNum}}次</span>
							<span v-if="item.is_gift == 1" class="tagMZ m-t-5">满赠</span>
						</view>
						<view class="listCon m-t-5">
							<span class="rentalsNum m-t-5"
								v-if="item.auth_text&&item.auth_label">{{item.auth_text}}:{{item.auth_label.join('、')}}</span>
						</view>
						<div class="order-list-cost m-t-5">
							<span class="h" v-if="item.hourRent && item.is_hour">
								¥ <text class="price">{{item.showHourRent}}</text>/时
							</span>
							<span class="d" v-if="item.dayRent && item.is_day">
								¥ <text class="price">{{item.showDayRent}}</text>/日
							</span>
							<span class="m" v-if="item.monthRent && item.is_month">
								¥ <text class="price">{{item.showMonthRent}}</text>/月
							</span>
						</div>
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
		name: "rent-list",
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
			};
		},

		methods: {
			loadmore() {
				this.loadmoreStatus = "loading"
				this.$emit("loadmore")
			},
		}
	}
</script>

<style>
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
</style>