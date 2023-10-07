<template>
	<view>
		<customNavbar :title="`我的收藏(${total})`" />
		<block class="" v-if="list.length > 0">
			<view class="order-list m-t-10"  v-for="(item, index) in list" 
				@click="$utils.handleNavigate('/pages/account/' + (item.release_type == 1?'rent':item.release_type == 2?'accompany':'training') + '/detail?id=' + item.id)"
			>
				<view class="listTop viewFlex p-10">
					<view class="avatar-img border-radius-10 pull-left oh text-center">
						<img :src="item.cover_image" width="88" height="110">
						<div class="state" v-if="item.status != 2">{{item.status_text}}</div>
					</view>
					
					<view class="listText pull-left m-l-10" style="width: 98%; flex: 1 1 0%;">
						<h3 class="listTitle">
							<div class="account-item-game-icon" style="background-image: url(&quot;https://oss-img.mengzuhao.cn/account-game-icon.png&quot;); background-repeat: no-repeat; background-size: cover;">
								{{item.game_name}}
							</div>
							{{item.name}}
						</h3>
						<view class="listCon m-t-5">
							<span>{{item.zone_name}}</span>
							<text class="m-l-5">{{item.school_name}}/{{item.body_name}}</text>
						</view>
						<view class="userId m-t-5">{{item.release_type == 1?"账号":"技能"}}ID：{{item.id}}</view>
						<div class="order-list-cost m-t-5">
							<span class="h">
								¥ <text class="price">{{item.hourRent}}</text>/时
							</span> 
							<span class="d">
								¥ <text class="price">{{item.dayRent}}</text>/时
							</span> 
							<span class="m">
								¥ <text class="price">{{item.monthRent}}</text>/时
							</span> 
						</div>
					</view>
				</view>
			</view>
			<u-loadmore :status="loadmoreStatus" @loadmore="loadmore"/>
		</block>
		<u-empty v-else mode="list"></u-empty>
	</view>
</template>

<script>
	import {
		collectList,
	} from "@/api/user"
	export default {
		data() {
			return {
				page: 1,
				loadmoreStatus: "loadmore",
				list: [],
				total: 0,
			}
		},
		onReachBottom(){
			this.loadmore()
		},
		onLoad(options) {
			this.getList()
		},
		methods: {
			loadmore(){
				this.loadmoreStatus = "loading"
				this.page = this.page + 1
				this.getList()
			},
			getList(){
				let that =this
				collectList({
					page: this.page,
				}).then(res=>{
					const { list, total } = res.data
					if(list.length > 0){
						that.list = that.list.concat(list)
						that.loadmoreStatus = "loadmore"
					}else{
						this.page = this.page - 1
						that.loadmoreStatus = "nomore"
					}
					that.total = total
				})
			}
		}
	}
</script>

<style lang="scss">
	.state{
		background-image: url(/static/imgs/state-icon.png);
		background-repeat: no-repeat; background-size: cover;
		position: absolute;
		width: 70px;
		height: 70px;
		text-align: center;
		line-height: 56px;
		color: #fff;
	}
</style>