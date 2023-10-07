<template>
	<view class="u-page">
		<view class="u-demo-block">
			<view class="u-demo-block__content p-t-10">
				<u-row customStyle="margin-bottom: 10px">
					<u-col span="12">
						<view class="demo-layout bg-purple">
							<u-search :showAction="true" actionText="搜索" placeholder="输入关键词/用户ID" v-model="keyword"
								@search="search" @custom="search" :animation="true" />
						</view>
					</u-col>
					<!-- <u-col span="2">
						<span @click="search"> 搜索</span>
					</u-col> -->
					<u-col span="6">
						<view class="demo-layout bg-purple-light">
							<view style="display: flex;align-items: center;" class="game-conts">
								<image :src="game.selectedAccompany.image_url" alt="">
									<span class="gameName">{{game.selectedAccompany.name}}</span>
									<u-tag class="changing-over" @click="gameShow = true" text="切换" size="mini"
										type="info" shape="circle"></u-tag>
							</view>
						</view>
					</u-col>

				</u-row>
			</view>
			<filter-dropdown :type="2" :filter="filter" @query="filterQuery" />
			<view class="u-demo-block__content">
				<!-- <view class="m-t-5">
					<tag-list :list="tagList"></tag-list>
				</view> -->

				<!-- <view class="m-t-10 banner">
					<u-grid :col="2" :border="false">
						<u-grid-item :custom-style="{padding: 0}" v-for="(item, index) in bannerList" :index="index"
							@click="officialClick(item.id)">
							<image class="image" :class="item.id == official_certificationId?'active':''"
								mode="widthFix" :src="item.src"></image>
						</u-grid-item>
					</u-grid>
				</view> -->

				<view style="margin-top: 10px;">
					<view class="pweiwan viewFlex">
						<view class="">
							<view style="font-weight: 800; ">派单大厅</view>
							<view style="line-height: 10px;">
								<span style="font-size: 8px; color: #61c9f0 ;font-weight: 600;">{{total}}</span>
								<span style="color: #a8a8a8; font-size: 8px;">个陪玩正在待命</span>
							</view>
						</view>
						<!-- <view class="right">
							<view class="goto">
								<image src="@/static/imgs/go.png" @click="qqGroupClick" />
							</view>
						</view> -->
					</view>
				</view>
			</view>
		</view>

		<u-gap height="10" bg-color="#f4f4f5"></u-gap>
		<accompany-list :list="list" @loadmore="loadmore" ref="list" />

		<u-popup v-model="gameShow" mode="bottom" ref="gameRef">
			<view class="game-popup">
				<view class="title">切换游戏专区</view>
				<u-grid :border="false">
					<u-grid-item :col="3" v-for="(item, index) in game.data" @click="gameClick(item), gameShow = false">
						<view class="item">
							<image class="image" :src="item.image_url"></image>
							<view class="name">{{item.name}}</view>
						</view>
					</u-grid-item>
				</u-grid>
			</view>
		</u-popup>

	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex';
	import {
		filterInit
	} from "@/api/game.js"
	import {
		getList as getListApi,
		adv
	} from "@/api/index.js"
	export default {
		computed: {
			...mapState(['game', "config"]),
			getStateGame() {
				return this.game
			}
		},
		watch: {
			getStateGame: {
				handler(newVal, oldVal) {
					if (newVal.data.length > 0) {
						this.getFilter()
					}
				},
				deep: true,
				immediate: true
			}
		},
		data() {
			return {
				list: [],
				page: 1,
				tagList: [{
					name: "区服",
					id: 1,
				}, ],
				filter: {
					regional: [],
					school: [],
					subject: [],
					sort: {
						news: "最新发布",
						week_rank: "魅力周期",
						month_rank: "魅力月榜",
						hour: "综合（时租）",
						day: "综合（日租）",
						month: "综合（月租）",
						hours_asc: "时租价格从低到高↑",
						hours_dec: "时租价格从高到低↓",
					},
					more: {
						option1: [
							["cw", "jjc"],
							['PVP', "PVE"]
						],
						option2: []
					}
				},
				keyword: "",
				bannerList: [{
						id: 1,
						src: "/static/imgs/dashi.jpg"
					},
					{
						id: 2,
						src: "/static/imgs/shengkong.jpg"
					}
				],
				query: {},
				gameShow: false,
				total: 0,
				advList: [],
				official_certificationId: -1
			}
		},
		onLoad() {
			this.getFilter()
			this.getList()
		},
		onReachBottom() {
			this.$refs.list.loadmoreStatus = "loading"
			this.page = this.page + 1
			this.getList()
		},
		methods: {
			gameClick(item) {
				this.$store.dispatch("game/selectedAccompanyGame", item)
				this.getFilter()
				this.search()
			},
			search() {
				this.page = 1
				this.list = []
				this.getList()
			},
			loadmore() {
				this.page = this.page + 1
				this.getList()
			},
			getFilter() {
				let that = this
				this.$nextTick(function() {
					let gameId = that.game.selectedAccompany.id,
						gameIndex = that.game.data.findIndex(x => {
							return x.value == gameId
						})
					that.filter.regional = that.game.data[gameIndex].children
					filterInit(2, gameId).then(res => {
						const {
							school,
							aclass,
							subject
						} = res.data
						that.filter.school = school
						that.filter.more.option2 = aclass
						that.filter.subject = subject
					})
				})

			},
			getList() {
				let that = this,
					query = this.query
				query.page = this.page
				query.keyword = this.keyword
				query.gameId = this.game.selectedAccompany.id
				query.official_certificationId = that.official_certificationId
				getListApi(2, this.query).then(res => {
					const {
						list,
						total
					} = res.data
					let loadmoreStatus = "loadmore"
					if (list.length > 0) {
						that.list = that.list.concat(list)
					} else {
						this.page = this.page - 1
						loadmoreStatus = "nomore"
					}
					that.$refs.list.loadmoreStatus = loadmoreStatus
					that.total = total
				})
			},
			filterQuery(query) {
				this.query = query
				this.page = 1
				this.list = []
				this.getList()
			},
			officialClick(id) {
				if (this.official_certificationId == id) {
					id = 0
				}
				this.page = 1
				this.list = []
				this.official_certificationId = id
				this.getList()
			},
			qqGroupClick() {
				let that = this
				uni.showModal({
					title: "点单QQ群号",
					content: this.config.data.qqGroupAccompany,
					showCancel: false,
					success: function(res) {
						if (res.confirm) {
							that.$utils.copy(that.config.data.qqGroupAccompany)
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			}
		}
	}
</script>
<style lang="scss">
	@import "@/static/css/index.scss";


	.pweiwan {
		width: 100%;
		height: 70px;
		border-radius: 12px;
		line-height: 30px;
		padding: 15px;
		// background-image: url(../../static/imgs/paidan.png);
		background-size: 100% 70px;
		background-repeat: no-repeat;
		padding-top: 5px;
		justify-content: center;

		.right {
			display: flex;
			margin-top: 4px;

			.goto {
				width: 6px;
				height: 11px;
				margin-top: 10px;
				margin-left: 5px;

				image {
					width: 100%;
					height: 100%;
				}
			}
		}
	}

	image.active {
		border: 2px solid #52bea2;
	}
</style>