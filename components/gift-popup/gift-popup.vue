<template>
	<view>
		<u-popup v-model="show" mode="bottom">
			<view class="p-15">
				<view class="title">
					活动
				</view>
				<view class="each-item">
					<view class="theme">
						满赠
					</view>
					<view class="desc" v-for="(item, index) in list">
						满{{item.full_val}}{{item.full_name}}送{{item.gift_val}}{{item.gift_name}}
					</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		name: "gift-popup",
		props:{
			list: {
				tyoe: Array,
				default: function(){
					return []
				}
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
	.title{
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
	.each-item{
		position: relative;
		padding-left: 52px;
	}
	.theme{
		position: absolute;
		top: 0;
		left: 0;
		padding: 0;
		margin: 0;
		height: 22px;
		font-size: 16px;
		font-weight: 500;
		color: #666;
		line-height: 22px;
	}
	.desc{
		padding: 0;
		font-size: 16px;
		font-weight: 400;
		color: #999;
		line-height: 22px;
		margin: 0 0 15px;
	}
</style>