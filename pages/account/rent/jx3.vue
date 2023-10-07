<template>
	<view class="">
		<customNavbar :title="'九天' + (type=='attribute'?'属性':type=='recent'?'战绩':'副本') + '查询'" />
		<block v-if="data">
			<view class="title">
				{{data.serverName}}
				{{data.forceName}}
				{{data.bodyName}}
				{{data.campName}}
			</view>
			<block v-if="type == 'attribute'">
				<u-grid :col="4" v-if="data.panelList">
					<u-grid-item v-for="(item, index) in data.panelList.panel">
						<view>{{item.value}}{{item.percent?"%":''}}</view>
						<view class="grid-text">{{item.name}}</view>
					</u-grid-item>
				</u-grid>
				<view class="panelList-score" v-if="data.panelList">
					<text>装备总分：{{data.panelList.score}}</text>
				</view>
				<view v-for="(item, index) in data.equipList" class="equipList">
					<view class="viewFlex">
						<view class="icon">
							<image :src="item.icon"></image>
						</view>
						<view style="flex: 1;">
							<view>
								<text class="name" style="font-weight: bold;">{{item.name}}</text>
								<text>（{{item.quality}}）</text>
								<u-rate :count="Number(item.maxStrengthLevel)" v-model="item.strengthLevel"></u-rate>
							</view>
							<view>
								<text class="m-r-5" v-for="(mitem, mindex) in item.modifyType">{{mitem.name}}</text>
							</view>
							<view class="equip viewFlex ">
								<view v-if="item.colorStone">
									<image class="colorStone-icon" :src="item.colorStone.icon"></image>
									{{item.colorStone.name}}
								</view>
								<view v-for="(pitem, pindex) in item.permanentEnchant">
									<image class="colorStone-icon" v-if="pitem.icon" :src="pitem.icon"></image>
									{{pitem.name}}
								</view>
								<view v-if="item.commonEnchant">
									{{item.commonEnchant.name}}
								</view>
							</view>
							<view class="equip viewFlex ">
								<view v-for="(fitem, findex) in item.fiveStone">
									<image class="colorStone-icon m-r-5" :src="fitem.icon"></image>
								</view>
							</view>
							<view class="viewFlex ">
								{{item.source}}
							</view>
						</view>
					</view>
				</view>
			</block>
			<block v-if="type == 'recent'">
				<view class="">
					<u-grid :col="7" v-for="(item, index) in data.performance">
						<block v-if="Object.keys(data.performance[index]).length > 0">
							<u-grid-item>
								<view>{{index}}</view>
								<view class="grid-text">{{item.grade}}段</view>
							</u-grid-item>
							<u-grid-item>
								<view>{{item.totalCount}}</view>
								<view class="grid-text">场次</view>
							</u-grid-item>
							<u-grid-item>
								<view>{{item.winCount}}</view>
								<view class="grid-text">胜场</view>
							</u-grid-item>
							<u-grid-item>
								<view>{{item.winRate}}</view>
								<view class="grid-text">胜率</view>
							</u-grid-item>
							<u-grid-item>
								<view>{{item.mmr}}</view>
								<view class="grid-text">评分</view>
							</u-grid-item>
							<u-grid-item>
								<view>{{item.mvpCount}}</view>
								<view class="grid-text">最佳</view>
							</u-grid-item>
							<u-grid-item>
								<view>{{item.ranking}}</view>
								<view class="grid-text">周排名</view>
							</u-grid-item>
						</block>
					</u-grid>
				</view>
				<u-table>
					<u-tr>
						<u-th>使用心法</u-th>
						<u-th>比赛模式</u-th>
						<u-th>比赛评分</u-th>
						<u-th>比赛时长</u-th>
						<u-th>结束时间</u-th>
						<u-th>比赛结果</u-th>
					</u-tr>
					<u-tr v-for="(item, index) in data.history">
						<u-td style="text-align: center;">
							<img :src="item.kungfuimg" style="width: 50px; height: 50px; margin: 0 auto;" alt="">
						</u-td>
						<u-td>{{item.avgGrade}}段局({{item.pvpType}}v{{item.pvpType}})</u-td>
						<u-td>{{item.totalMmr}}{{item.mmr > 0?"+":""}}{{item.mmr}}</u-td>
						<u-td>{{item.duration}}</u-td>
						<u-td>{{item.difference}}</u-td>
						<u-td width="20">{{item.won?'胜利':'失败'}}</u-td>
					</u-tr>
				</u-table>
			</block>
		</block>
		<block v-if="type == 'teamCdList'">
			<u-table>
				<u-tr>
					<u-th>副本名称</u-th>
					<u-th>副本类型</u-th>
					<u-th>完成进度</u-th>
				</u-tr>
				<u-tr v-for="(item, index) in data.data">
					<u-td>{{item.mapName}}</u-td>
					<u-td>{{item.mapType}}</u-td>
					<u-td>
						<text v-for="(bitem, bindex) in item.bossProgress">
							{{bitem.name}}
						</text>
					</u-td>
				</u-tr>
			</u-table>
		</block>
	</view>
</template>

<script>
	import {
		jx3
	} from "@/api/index.js"
	export default {
		data() {
			return {
				data: {
					data: {},
					type: ""
				},
			}
		},
		onLoad(options) {
			let that = this
			that.type = options.name
			jx3(options.id, options.name).then(res => {
				if (res.code == 1) {
					that.data = res.data
				} else {
					that.$throw(res.msg)
				}
			})
		},
	}
</script>

<style lang="scss">
	.title {
		margin: 20rpx;
		text-align: center;
		font-weight: bold;
	}

	.panelList-score {
		text-align: center;
		margin: 20rpx;
		font-weight: bold;
	}

	.equipList {
		margin: 20rpx;
		border: 1rpx solid #61c9f0;
		padding: 20rpx;

		.icon {
			width: 120rpx;
			height: 120rpx;
			margin-right: 20rpx;
			display: flex;
			align-self: center;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.equip {
			flex-wrap: wrap;

			.colorStone-icon {
				width: 30rpx;
				height: 30rpx;
			}
		}

	}

	.u-td {
		// border-bottom: 0 !important;
		height: auto;
	}
</style>