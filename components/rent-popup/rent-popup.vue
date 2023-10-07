<template>
	<view>
		<u-popup v-model="show" mode="bottom">
			<view class="p-20">
				<view class="title">
					套餐详情
				</view>
				<view>
					<view class="m-t-10 viewFlex" v-if="data.is_hour">
						<text>{{data.release_type == 1?'时租':"按时"}}</text>
						<!-- <text>2</text> -->
						<text class="price">
							¥{{data.hourRent}}/元
						</text>
					</view>
					<view class="m-t-10 viewFlex" v-if="data.is_day">
						<text>{{data.release_type == 1?'日租':"按日"}}</text>
						<!-- <text>{{data.dayRent}}</text> -->
						<text class="price">
							¥{{data.dayRent}}/元
						</text>
					</view>
					<view class="m-t-10 viewFlex" v-if="data.is_month">
						<text>{{data.release_type == 1?'月租':"按月"}}</text>
						<!-- <text>2</text> -->
						<text class="price">
							¥{{data.monthRent}}/元
						</text>
					</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		name: "rent-popup",
		props: {
			data: {
				tyoe: Object,
				default: {}
			}
		},
		data() {
			return {
				show: false
			}
		}
	}
</script>

<style>
	.title {
		border: 0;
		line-height: 50px;
		text-align: center;
		height: 50px;
		width: 100%;
		margin-bottom: 0;
		font-size: 16px;
		font-weight: 600;
		color: #222;
	}

	.viewFlex text:nth-child(1) {
		width: 20%;
	}

	.viewFlex text:nth-child(2) {
		width: 40%;
	}

	.viewFlex text:nth-child(3) {
		width: 40%;
		text-align: right;
		font-weight: 500;
		color: #fa7e12;
		font-size: 14px
	}
</style>