<template>
	<u-sticky style="width: 100vw;" h5-nav-height="0">
		<view class="menu-box" :class="(isShowMask?'':'hide')">
			<u-dropdown @open="openEvent" @close="closeEvent" v-if="filter" ref="uDropdown">
				<u-dropdown-item title="区服">
					<view class="slot-content" style="background-color: #FFFFFF;">
						<view class="footer-btn">
							<span class="btn btn-delete" @click="reset">重置</span>
							<span class="btn btn-confirm" @click="confirm">确定</span>
						</view>
						<view class="container">
							<view class="filter-item">
								<view v-for="(ritem, rindex) in filter.regional" class="regional m-b-10">
									<view class="title zf m-b-10">
										{{ritem.name}}
									</view>

									<view class="viewFlex" style="flex-wrap: wrap;">
										<view class="m-r-10 m-b-10" v-for="(citem, cindex) in ritem.children"
											:index="cindex" @click="regionalClick(citem.id)">
											<view class="">
												<span class="label"
													:class="regional_ids.indexOf(citem.id) > -1? 'active': ''">
													{{citem.name}}</span>
											</view>
										</view>
									</view>
								</view>
							</view>

						</view>

					</view>
				</u-dropdown-item>

				<u-dropdown-item title="体型">
					<view class="slot-content" style="background-color: #FFFFFF;">
						<view class="container">
							<view class="filter-item">
								<view class="school">
									<view class="viewFlex">
										<scroll-view scroll-y="true" class="tx-left">
											<view v-for="(item, index) in filter.school"
												@click="sindex = index, body_id = filter.school[sindex].id, school_id = null"
												class="title text" :class="sindex == index? 'active': ''">{{item.name}}
											</view>
										</scroll-view>
										<view class="tx-right">
											<scroll-view style="height: 260px;" scroll-y="true" v-if="sindex > -1">
												<block v-for="(item, index) in filter.school[sindex].children">
													<view class="text" @click="school_id = item.id"
														:class="school_id == item.id? 'active': ''">
														{{item.name}}
													</view>
												</block>
											</scroll-view>
											<view class="footer-btn">
												<span class="btn btn-delete" @click="reset">重置</span>
												<span class="btn btn-confirm" @click="confirm">确定</span>
											</view>
										</view>
									</view>
								</view>

							</view>
						</view>
					</view>
				</u-dropdown-item>

				<u-dropdown-item title="排序">
					<view class="slot-content" style="background-color: #FFFFFF;">
						<view class="container">
							<view class="filter-item">
								<view class="sort tx-right">
									<block v-for="(item, index) in filter.sort">
										<view class="text title" @click="sortClick(index)"
											:class="sortVal == index? 'active': ''">{{item}}</view>
									</block>
								</view>
							</view>
						</view>
					</view>
				</u-dropdown-item>

				<u-dropdown-item title="专题">
					<view class="slot-content" style="background-color: #FFFFFF;">
						<view class="container">
							<view class="filter-item">
								<view class="sort tx-right">
									<block v-for="(item, index) in filter.subject">
										<view class="viewFlex subject" :class="subjectVal == item.id? 'active': ''"
											@click="subjectClick(item.id)">
											<text>
												{{item.name}}
											</text>
											<view class="border-radius-10 oh pos-l-20" style="height: 60px;">
												<img :src="item.image_url" width="60" height="60">
											</view>
										</view>
									</block>
								</view>
							</view>
						</view>
					</view>
				</u-dropdown-item>

				<u-dropdown-item title="筛选">
					<view class="slot-content" style="background-color: #FFFFFF;">
						<view class="container">
							<view class="filter-item">
								<view class="more">
									<view class="more-title">装备</view>
									<view class="margin-bottom-20">
										<view class="name" v-for="(item, index) in filter.more.option1[0]"
											:class="more_type.indexOf(item) > -1? 'active': ''"
											@click="moreTypeClick(item)">
											{{item}}
										</view>
										<view class="pvp-grade">
											<view class="viewFlex">
												<view class="viewFlex" style="align-self: center;">大于</view> <input
													class="input" v-model="moreVal" type="number">
											</view>
										</view>
									</view>
									<view class="margin-bottom-20">
										<view class="name" v-for="(item, index) in filter.more.option1[1]"
											:class="more_type.indexOf(item) > -1? 'active': ''"
											@click="moreTypeClick(item)">
											{{item}}
										</view>
									</view>
									<block v-if="type == 1">
										<view class="more-title">外观</view>
										<view style="margin-top: 20rpx;">
											<view class="" v-for="(item, index) in filter.more.option2">
												<view style="margin-bottom: 20rpx;" v-for="(citem, cindex) in item"
													@click="moreClick(cindex)" :index="cindex" class="name"
													:class="more_ids.indexOf(cindex) > -1? 'active': ''">
													{{citem}}
												</view>
											</view>
										</view>
									</block>
									<block v-else>
										<view class="more-title">接单种类</view>
										<view style="margin-top: 20rpx;">
											<view class="" style="margin-bottom: 20rpx;" @click="moreClick(index)"
												:index="index" class="name"
												:class="more_ids.indexOf(index) > -1? 'active': ''"
												v-for="(item, index) in filter.more.option2">
												{{item}}
											</view>
										</view>
									</block>
								</view>
							</view>
							<view class="footer-btn">
								<span class="btn btn-delete" @click="reset">重置</span>
								<span class="btn btn-confirm" @click="confirm">确定</span>
							</view>
						</view>

					</view>

				</u-dropdown-item>
			</u-dropdown>
		</view>
	</u-sticky>
</template>

<script>
	export default {
		props: {
			filter: {
				type: Object,
				default: () => {
					return {}
				}
			},
			type: {
				type: Number,
				default: 1
			},
		},
		watch: {
			'filter.school': {
				handler(newVal, oldVal) {
					if (newVal.length > 0) {
						this.sindex = 0
					}
				},
				deep: true,
				immediate: true
			},
		},
		data() {
			return {
				isShowMask: false,
				regional_ids: [],
				sindex: -1,
				school_id: null,
				body_id: null,
				sortVal: null,
				more_ids: [],
				more_type: [],
				moreVal: null,
				subjectVal: null
			}
		},
		methods: {
			openEvent() {
				this.isShowMask = true;
			},
			closeEvent() {
				this.isShowMask = false;
			},
			regionalClick(id) {
				let set = new Set(this.regional_ids);
				set.has(id) ? set.delete(id) : set.add(id)
				const array = [...set];
				this.regional_ids = array
			},
			moreTypeClick(id) {
				let set = new Set(this.more_type);

				set.has(id) ? set.delete(id) : set.add(id)
				const array = [...set];

				this.more_type = array
			},
			moreClick(id) {
				let set = new Set(this.more_ids);

				set.has(id) ? set.delete(id) : set.add(id)
				const array = [...set];

				this.more_ids = array
			},
			reset() {
				this.sindex = Object.keys(this.filter.school)[0]
				this.body_id = null
				this.school_id = null
				this.sortVal = null
				this.regional_ids = []
				this.more_ids = []
				this.moreVal = null
				this.subjectVal = null
			},
			query() {
				let query = {
					school_id: this.school_id, // 门派 
					regional_ids: this.regional_ids, // 区服ids
					body_id: this.body_id, // 体型
					more_type: this.more_type, // 装备ids
					more_ids: this.more_ids, // 筛选ids
					sortVal: this.sortVal, // 排序规则
					subjectVal: this.subjectVal, // 专题
				}
				return query;
			},
			confirm() {
				this.$emit("query", this.query())
				this.$refs.uDropdown.close();
			},
			subjectClick(id) {
				if (this.subjectVal == id) {
					id = 0
				}
				this.subjectVal = id
				this.confirm()
			},
			sortClick(id) {
				if (this.sortVal == id) {
					id = 0
				}
				this.sortVal = id
				this.confirm()
			}
		}
	}
</script>

<style lang="scss">
	.menu-box {
		&.hide {
			/deep/ .u-dropdown__content {
				display: none;

			}
		}
	}

	/deep/ .u-sticky {
		width: 100vw !important;
	}

	.menu-box {
		background-color: #ffffff;
		font-size: 24rpx;

		.container {
			// margin-bottom: 40px;

			.filter-item {
				.title:before {
					content: "";
					display: inline-block;
					width: 10rpx;
					height: 10rpx;
					border-radius: 50%;
					// border: 4rpx solid #61c9f0;
					// margin-right: 10rpx;
				}

				.regional {
					width: 90%;
					margin: 0 auto;

					.zf {
						font-size: 28rpx;
						font-weight: bold;
					}
				}

				.subject {
					padding: 0 20px;
					height: 80px;
					display: flex;
					justify-content: center;
					align-items: center;

					text {
						flex: 1;
						font-size: 16px;
						color: #333;
					}
				}

				.school {
					.tx-left {
						width: 30%;
						position: relative;
						background: #f5f5f5;
					}

					.tx-right {
						-webkit-box-flex: 1;
						-ms-flex: 1;
						flex: 1;
						position: relative;
						height: 300px;
					}
				}

				.tx-right {
					.active {
						background: #fafafa;
						color: #61c9f0;
					}
				}

				.text {
					padding-left: 20px;
					background: #fff;
					height: 80rpx;
					line-height: 80rpx;
				}

				.text.active {
					font-weight: 600;
				}

				.label {
					background-color: #f4f4f5;
					border-radius: 50rpx;
					padding: 2px 16rpx;
					color: #666;
				}

				.more {
					padding: 0 20px;

					.more-title {
						font-size: 14px;
						font-weight: 700;
						position: relative;
					}

					.name {
						display: inline-block;
						margin-right: 10px;
						background: #f5f5f5;
						border-radius: 20px;
						padding: 2px 10px;
						color: #666;
					}

					.pvp-grade {
						display: inline-block;
						margin-right: 10px;
						background: #f5f5f5;
						border-radius: 20px;
						padding: 2px 10px;
						margin-top: 10px;
						color: #666;
						width: 60%;
						background: none;

						.input {
							display: inline-block;
							width: 100px;
							height: 24px;
							border-radius: 22px;
							border: 1px solid #61c9f0;
							margin-left: 10px;
							padding: 0 10px
						}
					}
				}

				.label.active,
				.name.active {
					background-color: #61c9f0;
					color: #ffffff;
				}
			}

			.footer-btn {
				text-align: right;
				padding-bottom: 10px;
				padding-right: 10px;
				margin-top: 5px;

				.btn {
					display: inline-block;
					line-height: 26px;
					padding: 0 15px;
					border-radius: 15px;
				}

				.btn-delete {
					background-color: #f5f5f5;
					margin-right: 10px;
				}

				.btn-confirm {
					background-color: #61c9f0;
					color: #fff;
				}
			}
		}

		.footer-btn {
			text-align: right;

			padding-bottom: 10px;
			padding-right: 10px;
			margin-top: 5px;

			.btn {
				display: inline-block;
				line-height: 26px;
				padding: 0 15px;
				border-radius: 15px;
			}

			.btn-delete {
				background-color: #f5f5f5;
				margin-right: 10px;
			}

			.btn-confirm {
				background-color: #61c9f0;
				color: #fff;
			}
		}

		.margin-bottom-20 {
			margin-bottom: 20rpx;
		}
	}
</style>