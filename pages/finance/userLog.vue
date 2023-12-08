<template>
	<view>
		<customNavbar title="邀请记录" />
		<view class="container">
			<view class="header"></view>
			<view class="commonContainer">
				<view class="mainBlock">
					<view v-if="list.length > 0">
						<view class="list_item" v-for="item in list" :key="item.id">
							<u-row style="margin-bottom: 10rpx; font-size: 24rpx;">
								<u-col span="2">
									<u-avatar :src="item.avatar" :size="60" style="margin-left: 30rpx;"></u-avatar>
								</u-col>
								<u-col span="9">
									<u-row style="margin-bottom: 10rpx; ">
										<u-col span="6">
											<span>名字:{{item.nickname}}</span>
										</u-col>
										<u-col span="6">
											<span>电话:{{item.username}}</span>
										</u-col>

									</u-row>
									<u-row>
										<u-col span="6">
											<span>累计返利:{{item.return_ratio}}</span>
										</u-col>
										<u-col span="6">
											<span>费率:{{item.invite_ratio}}% </span>
										</u-col>
									</u-row>
								</u-col>
								<u-col span="1">
									<u-icon name="setting" style="font-size: 30rpx;"
										@click="handleRatio(item)"></u-icon>
								</u-col>
							</u-row>
							<u-line color="#ccc" />
						</view>

					</view>
					<u-empty v-else mode="list" />
				</view>
			</view>
		</view>
		<u-modal v-model="ratioShow" title='设置费率' show-cancel-button @confirm="handleBindRatio">
			<view class="slot-content" style="padding: 0 40rpx;">
				<u-field v-model="ratio" label="费率:" placeholder="费率"></u-field>
			</view>
		</u-modal>

	</view>
</template>

<script>
	import {
		intiveList,
		setRatio
	} from '../../api/user';
	export default {
		data() {
			return {
				list: [],
				ratio: '',
				ratioShow: false
			}
		},
		onLoad() {
			this.getList()
		},
		methods: {
			handleRatio(item) {
				this.ratio = item.invite_ratio
				this.ratioShow = true
				this.user_id = item.id
			},
			handleBindRatio() {
				setRatio({
					user_id: this.user_id,
					ratio: this.ratio
				}).then(res => {
					this.getList()
					this.ratioShow = false
					this.ratio = ''
					this.$u.toast(res.msg);
				})
			},
			getList() {
				intiveList().then(res => {
					this.list = res.data
				})
			}

		}
	}
</script>

<style lang="scss">
	.container {
		.header {
			height: 8vh;
		}

		.commonContainer {
			margin-top: -6vh;

			.mainBlock {
				color: #000000;
			}
		}

		.list_item {
			height: 100rpx;
		}
	}
</style>