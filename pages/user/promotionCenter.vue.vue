<template>
	<view>
		<customNavbar title="推广中心" />
		<view class="promotion_my">
			<u-card :title="title" :sub-title="subTitle" padding="30" :head-border-bottom="false"
				:foot-border-top="false" :show-foot='false' :head-style="{'padding-bottom':0}"
				:body-style="{'padding-top':0}">
				<view slot="body">
					<view class="u-body-item u-flex  u-col-between u-p-t-0">
						<view style="width: 500rpx;">
							<u-row gutter="16">
								<u-col span="5" class="demo-layout">
									<view style="font-size: 48rpx; font-weight: bold;">
										00
									</view>
									<view style=' font-size: 18rpx; color: #b5b5b5;'>
										账户余额
									</view>
								</u-col>
								<u-col span="5" class="demo-layout">
									<view style="font-size: 48rpx; font-weight: bold;">
										00
									</view>
									<view style=' font-size: 18rpx; color: #b5b5b5;'>
										累计获得
									</view>
								</u-col>
							</u-row>
						</view>
						<view class="toCash">
							<u-button type="primary" size="mini">去提现</u-button>
						</view>
					</view>

				</view>
			</u-card>
		</view>

		<view class="promotion_link">
			<view class="promotion_link_title">
				推广任务
			</view>
			<u-button type="primary" shape='circle'>邀请链接</u-button>
			<view class="promotion_link_desc">
				任何人通过您的专属链接进入注册即计入您名下
			</view>
		</view>
		<view class="promotion_my">
			<u-card title="我推荐的" sub-title="明细>" padding="30" :head-border-bottom="false" :foot-border-top="false"
				:show-foot='false' :head-style="{'padding-bottom':0}" :body-style="{'padding-top':0}">
				<view slot="body">
					<view class="u-body-item u-flex  u-col-between u-p-t-0">
						<view style="width: 500rpx;">
							<u-row gutter="16">
								<u-col span="5" class="demo-layout">
									<view style="font-size: 48rpx; font-weight: bold;">
										00
									</view>
									<view style=' font-size: 18rpx;color: #b5b5b5;'>
										累计
									</view>
								</u-col>

							</u-row>
						</view>

					</view>

				</view>
			</u-card>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '我的账户',
				subTitle: '账户明细>',
				thumb: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
			};
		}
	};
</script>

<style scoped lang="scss">
	.promotion_link {
		padding: 30rpx;
		border: 1rpx solid #eee;
		margin: 30rpx;
		border-radius: 6rpx;
	}

	.promotion_link_title {
		margin-bottom: 10rpx;
	}

	.promotion_link_desc {
		margin-top: 20rpx;
		font-size: 16rpx
	}

	.u-card-wrap {
		background-color: $u-bg-color;
		padding: 1px;
	}

	.u-body-item {
		font-size: 32rpx;
		color: #333;
		padding: 20rpx 10rpx;
	}

	.u-body-item .toCash {
		width: 120rpx;
		flex: 0 0 120rpx;
		height: 120rpx;
		margin-left: 12rpx;
		margin-top: 60rpx;
	}

	.wrap {
		padding: 24rpx;
	}

	.u-row {
		margin: 40rpx 0;
	}

	.demo-layout {
		height: 100rpx;
		text-align: center !important;

	}
</style>