<template>
	<view>
		<view class="good-frame">
			<u-navbar title="我的等级" :custom-back="comeback" :autoBack="true">
				<u-icon class="m-r-10" size="40" 
					@click="$utils.handleNavigate('/pages/common/xieyi?name=levelDesc')"
				color="rgb(96, 98, 102)" slot="right" name="question-circle"></u-icon>
			</u-navbar>
		</view>

		<view class="list-wrap">
			<view style="display: flex;">
				<view class="item" v-for="(item ,index) in levelList">
					<view class="img-wrap" >
						<image :src="item.image" alt=""/>
						<view class="name">{{item.name}}</view>
					</view>
					<view class="dash" v-if="levelList.length != index + 1"> </view>
				</view>
			</view>
		</view>

		<view class="flex">
			<view class="big-img">
				<img :src="userLevel.image" alt="" style="width: 150px; height:150px;">
			</view>

			<view class="current-level">
				当前等级：{{userLevel.name}}
			</view>

		</view>

		<view class="flex next-level-tip" v-if="nextLevel" style=" flex-direction: row;">
			还需消费{{nextLevel.money - currConsume}}元可升级至
			<span style="olor: #61c9f0;">{{nextLevel.name}}</span>
		</view>

	</view>
</template>

<script>
	import { list } from "@/api/level.js"
	export default {
		data() {
			return {
				levelList: [],
				userLevel: {},
				nextLevel: {},
				currConsume: 0
			}
		},
		onLoad() {
			let that = this
			list().then(res=>{
				const { list, userLevel, nextLevel, currConsume } = res.data
				that.levelList = list
				that.userLevel = userLevel
				that.nextLevel = nextLevel
				that.currConsume = currConsume
			})
		},
		methods: {
			comeback(){
				this.$utils.comeback()
			}
		}
	}
</script>

<style lang="less" scoped>
	.next-level-tip {
		margin-top: 30px;
		height: 17px;
		font-size: 12px;
		font-weight: 700;
		color: #363636;
		line-height: 17px;
	}

	.flex {
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
	}

	.left {
		color: #61c9f0;
		font-size: 14px;
	}

	.right {
		color: #d2d2d2;
		font-size: 14px;
	}

	.exp-num {
		margin-bottom: 16px;
	}

	.current-level {
		height: 36px;
		margin-bottom: 16px;
		font-size: 24px;
		font-weight: 500;
		color: #363636;
		line-height: 36px;
	}

	.big-img {
		width: 155px;
	}

	.dash {
		width: 14px;
		height: 2px;
		background-color: #ececec;
		border-radius: 4px;
		margin: 0 10px;
	}

	.name {
		position: absolute;
		text-align: center;
		bottom: -20px;
		font-size: 12px;
		width: 48px;
	}

	.img-wrap {
		display: flex;
		position: relative;
		-webkit-box-pack: center;
		justify-content: center;
		width: 35px;
		height: 35px;
		background: #e5e5e5;
		border-radius: 50%;
		align-items: center;
		image{
			width: 22px;
			height: 22px;
		}
	}

	.item {
		display: flex;
		-webkit-box-align: center;
		align-items: center;
	}

	.list-wrap {
		display: flex;
		margin-top: 50px;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		margin-bottom: 48px;
	}
</style>