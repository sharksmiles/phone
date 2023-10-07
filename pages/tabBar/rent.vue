<template>
	<view class="u-page">
		<view class="u-demo-block">
			<view class="u-demo-block__content p-t-10">
				<u-row customStyle="margin-bottom: 10px">
					<u-col span="12">
						<view class="demo-layout bg-purple">
							<u-search :showAction="true" actionText="搜索" placeholder="输入关键词/账号ID" v-model="keyword"
								@search="search" @custom="search" :animation="true" />
						</view>
					</u-col>
					<!-- <u-col span="2">
						<span @click="search"> 搜索</span>
					</u-col> -->
					<u-col span="6">
						<view class="demo-layout bg-purple-light">
							<view style="display: flex;align-items: center;" class="game-conts">
								<image :src="game.selectedRent.image_url">
									<span class="gameName">{{game.selectedRent.name}}</span>
									<u-tag class="changing-over" size="mini" @click="gameShow = true" text="切换"
										type="info" shape="circle"></u-tag>
							</view>
						</view>
					</u-col>

				</u-row>
			</view>
			<filter-dropdown :type="1" :filter="filter" @query="filterQuery" />
			<view class="u-demo-block__content">
				<!-- <view class="m-t-5">
					<tag-list :list="tagList"></tag-list>
				</view> -->

				<!-- <view class="m-t-10 banner">
					<u-grid :col="3" :border="false">
						<u-grid-item :custom-style="{padding: 0}" v-for="(item, index) in bannerList"
						 :index="index" 
						 @click="click" >
							<image class="image" mode="widthFix" :src="item.src"></image>
						</u-grid-item>
					</u-grid>
				</view> -->

				<!-- <view class="m-t-15">
					<view class="pweiwan"><span style="padding-left: 20px; color: #f0f0f0;">待填充</span>
					</view>
				</view> -->
			</view>
		</view>
		<u-gap height="20" bg-color="#f4f4f5"></u-gap>
		<rent-list :list="list" @loadmore="loadmore" ref="list" />

		<u-popup v-if="game.data.length > 0" v-model="gameShow" mode="bottom" ref="gameRef">
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
		getList as getListApi,
		adv
	} from "@/api/index.js"
	import {
		filterInit
	} from "@/api/game.js"
	export default {
		computed: {
			...mapState(['game']),
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
				total: 0,
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
						week_rank: "出租周榜",
						month_rank: "出租月榜",
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
						src: "../../static/imgs/zq1.jpeg"
					},
					{
						src: "../../static/imgs/zq2.jpeg"
					},
					{
						src: "../../static/imgs/zq3.jpeg"
					}
				],
				query: {},
				gameShow: false,
				advList: []
			}
		},
		onLoad() {
			this.getList()
		},
		onReachBottom() {
			this.$refs.list.loadmoreStatus = "loading"
			this.page = this.page + 1
			this.getList()
		},
		methods: {
			gameClick(item) {
				this.$store.dispatch("game/selectedRentGame", item)
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
					let gameId = that.game.selectedRent.id

					let gameIndex = that.game.data.findIndex(x => {
						return x.value == gameId
					})
					that.filter.regional = that.game.data[gameIndex].children

					filterInit(1, gameId).then(res => {
						const {
							school,
							bright,
							subject
						} = res.data
						that.filter.school = school
						that.filter.more.option2 = bright
						that.filter.subject = subject
					})
				})
			},
			getList() {
				let that = this,
					query = this.query
				query.page = this.page
				query.keyword = this.keyword
				query.gameId = this.game.selectedRent.id

				getListApi(1, query).then(res => {
					const {
						list,
						total
					} = res.data
					let loadmoreStatus = "loadmore"
					if (list.length > 0) {
						that.list = that.list.concat(list)
					} else {
						that.page = that.page - 1
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
			}
		}
	}
</script>
<style lang="scss">
	@import "@/static/css/index.scss";
</style>