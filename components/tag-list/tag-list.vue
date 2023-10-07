<template>
	<u-grid :col="6" :border="false">
		<u-grid-item :custom-style="{padding:'6rpx 0'}"  v-for="(item, index) in list"
		 :index="index" 
		 @click="click" >
		 <span class="label">{{item.name}}</span>
		</u-grid-item>
	</u-grid>
</template>

<script>
	export default {
		name:"tag-list",
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
	.label {
		font-size: 28rpx;
		background-color: #f4f4f5;
		border-radius: 50rpx;
		padding: 2rpx 18rpx;
	}
</style>