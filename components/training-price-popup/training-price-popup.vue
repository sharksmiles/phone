<template>
	<view>
		<u-popup v-model="show" mode="bottom">
			<view class="p-20">
				<view class="title">
					代练项目详情
				</view>
				<view>
					<view class="m-t-10 viewFlex" v-for="(item, index) in data.trainingPrice">
						<text>{{item.name}}</text>
						<!-- <text>2</text> -->
						<text class="price">
							¥{{item.price}}元
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