<template>
	<view class="answer m-t-15">
		<p class="p-title" style="margin:10px 5px;">更多新手教程</p>
		<block v-for="(item, index) in list">
			<view class="buttom-content p-t-5" v-if="(index % 2) == 0">
				<!-- <image src="@/static/imgs/ask-icon.png" alt="" style="width: 20px;" mode="widthFix" class="m-r-5"> -->
				<h4>{{item}}</h4>
			</view>
			<view class="buttom-content " v-else>
				<!-- <image src="@/static/imgs/answer-icon.png" alt="" style="width: 20px;" mode="widthFix" class="m-r-5"> -->
				<h4>
					<span v-html="item"></span>
				</h4>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		name: "question",
		props: {
			list: {
				type: Array,
				default: () => {
					return []
				}
			},
		},
	}
</script>

<style lang="scss">
	.answer {
		.p-title {
			height: 17px;
			font-size: 15px;
			font-weight: 600;
			color: #222;
			line-height: 17px;

			border-radius: 1px;
			display: inline-block;
		}

		.buttom-content {
			padding: 3px;
			display: flex;
			align-items: center;
		}
	}
</style>