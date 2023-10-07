<template>
	<view>
		<u-top-tips ref="uTips" />
		<u-navbar title="发布陪玩" :custom-back="customBack" :autoBack="true" />
		<view class="release">
			<u-line-progress :percent="percent" :showText="false"></u-line-progress>
			<u-form ref="uForm" label-width="150" label-align="left">
				<block v-if="basicModule">
					<u-form-item label="接单种类" prop="data.aclass_ids" label-position="top">
						<view class="">
							<u-tag class="m-r-10" v-for="(item, index) in aclass" :key="index" :text="item.name"
								:mode="item.checked?'dark':'plain'" type="warning" @click="aclassClick(index, item)" />
						</view>
					</u-form-item>

					<u-form-item label="接单标题" :required="true">
						<u-input v-model="data.name" placeholder="请输入商品标题"></u-input>
					</u-form-item>


					<u-form-item label="封面图" label-position="top" :required="true">
						<u-upload :action="env.uploadUrl" max-count="5" :file-list="data.image"
							@on-remove="(index) => onRemove(index, 'image')"
							@on-uploaded="(lists) => onUploaded(lists, 'image')" ref="imageUpload"></u-upload>
					</u-form-item>


					<u-form-item label="服务简介(上传详情图，不超过1M,不超过10张)" label-position="top" :border-bottom="false"
						:required="true">
						<view style="width: 100%;">
							<view class="note-text">禁止填写微信qq手机等一切外部联系方式，否则不予通过</view>
							<u-input :custom-style="{background: '#f4f4f4', padding: '15px', borderRadius: '10px'}"
								border-color="#dcdfe6" v-model="data.desc" maxlength="-1" type="textarea"
								:auto-height="true" height="200" placeholder="对服务的简介如：是否包胜率，是否开麦，音色等" />
						</view>
					</u-form-item>

					<u-form-item style="padding: 0 0 20rpx">
						<u-upload :action="env.uploadUrl" max-count="10" :file-list="data.images"
							@on-remove="(index) => onRemove(index, 'images')"
							@on-uploaded="(lists) => onUploaded(lists, 'images')" ref="imagesUpload"></u-upload>
					</u-form-item>

					<u-button type="primary" @click="next('basic', 'info')">下一步</u-button>
				</block>
				<block v-if="infoModule">
					<u-form-item label="区服" :required="true">
						<view class="select-cell" :class="zoneTitle?'':'mint-cell-value'" @click="selectZoneClick">
							{{zoneTitle? zoneTitle: "请选择区服"}}
						</view>
						<u-icon slot="right" name="arrow-right"></u-icon>
					</u-form-item>

					<u-form-item label="接单QQ群" :required="true">
						<u-input v-model="config.data.qqGroupAccompany" placeholder="接单QQ群" disabled=""></u-input>
					</u-form-item>

					<u-form-item label="进群暗号" :required="true">
						<u-input v-model="config.data.qqGroupSecretAccompany" placeholder="请输入进群暗号"
							disabled=""></u-input>
					</u-form-item>

					<u-form-item label="角色名" prop="data.rolename" :required="true">
						<u-input v-model="data.rolename" placeholder="请输入角色名"></u-input>
					</u-form-item>

					<u-form-item label="阵营" prop="data.camp_id" v-if="is_camp==1">
						<view class="select-cell" :class="campIndex > -1?'':'mint-cell-value'"
							@click="selectClick('camp')">{{campIndex > -1? campList[campIndex].label:"请选择阵营"}}</view>
						<u-icon slot="right" name="arrow-right"></u-icon>
					</u-form-item>

					<u-form-item :label="ailas" prop="data.school_id" :required="true">
						<view class="select-cell" :class="schoolTitle?'':'mint-cell-value'" @click="selectSchoolClick">
							{{schoolTitle? schoolTitle:"请选择"+ailas}}
						</view>
						<u-icon slot="right" name="arrow-right"></u-icon>
					</u-form-item>

					<block v-for="(item, index) in equipmentList" :key="index">
						<u-form-item :label="'装备名称' + (index + 1)" :ref="'item1' + index" :required="true">
							<view class="select-cell" :class="item.fitoutIndex > -1?'':'mint-cell-value'"
								@click="selectFitoutClick(index)">
								{{item.fitoutIndex > -1? fitoutList[item.fitoutIndex].label:"请选择装备名称"}}
							</view>
							<u-icon slot="right" name="arrow-right"></u-icon>
						</u-form-item>
						<u-form-item :label="'装备类型' + (index + 1)" :ref="'item2' + index" :required="true">
							<view class="select-cell" :class="item.fitoutTypeIndex > -1?'':'mint-cell-value'"
								@click="selectFitoutTypeClick(index)">
								{{item.fitoutTypeIndex > -1? fitoutTypeList[item.fitoutTypeIndex].label:"请选择装备类型"}}
							</view>
							<u-icon slot="right" name="arrow-right"></u-icon>
						</u-form-item>
						<u-form-item :label="'装分' + (index + 1)" :ref="'item3' + index" :border-bottom="false"
							:required="true">
							<u-input v-model="item.score" placeholder="请输入装分"></u-input>
						</u-form-item>
						<u-divider class="m-b-10">
							<u-icon @click="equipmentList.splice(index, 1)" name="close" color="red" size="30"></u-icon>
						</u-divider>
					</block>
					<view style="text-align: center;">
						<u-button class="m-t-5" type="warning" size="medium" @click="addEquipment">继续添加装备</u-button>
					</view>

					<u-form-item label="是否可全服接单" label-position="top" :required="true">
						<u-radio-group v-model="data.full_service">
							<u-radio name="1">是</u-radio>
							<u-radio name="0">否</u-radio>
						</u-radio-group>
					</u-form-item>

					<u-form-item label="是否JJC陪玩" prop="data.jjc" label-position="top" :required="true">
						<u-radio-group v-model="data.jjc">
							<u-radio name="1">允许</u-radio>
							<u-radio name="0">不允许</u-radio>
						</u-radio-group>
					</u-form-item>

					<u-button type="primary" @click="next('info', 'price')">下一步</u-button>
				</block>


				<block v-if="priceModule">
					<u-form-item @click="uTipsClick(tip.rentDesc)" left-icon="error-circle" label="设置接单价格"
						label-position="top">
						<view>
							<view class="note-text">禁止填写微信qq手机等一切外部联系方式，否则不予通过</view>
							<text>
							</text>
						</view>

					</u-form-item>

					<u-form-item label="按时" prop="data.hourRent" :required="true">
						<u-switch size="35" v-model="data.is_hour"></u-switch>
						<u-input class="m-l-10" placeholder="输入金额" type="number" v-model="data.hourRent" />
						<view slot="right">
							元
						</view>
					</u-form-item>

					<u-form-item label="按日" prop="data.dayRent">
						<u-switch size="35" v-model="data.is_day"></u-switch>
						<u-input class="m-l-10" placeholder="输入金额" type="number" v-model="data.dayRent" />
						<view slot="right">
							元
						</view>
					</u-form-item>

					<u-form-item label="按月" prop="data.monthRent">
						<u-switch size="35" v-model="data.is_month"></u-switch>
						<u-input class="m-l-10" placeholder="输入金额" type="number" v-model="data.monthRent" />
						<view slot="right">
							元
						</view>
					</u-form-item>

					<u-form-item v-if="data.is_hour" label="时租最短下单时间" prop="data.minHour" :required="true"
						label-width="220">
						<view class="m-l-5">
							<u-input placeholder="输入最短下单时间" v-model="data.minHour" />
						</view>
					</u-form-item>

					<!-- <u-form-item v-if="data.is_month" label="月租租客显示联系方式" label-position="top" :required="true">
						<u-input v-model="data.contact" placeholder="填写您的QQ号"></u-input>
					</u-form-item> -->

					<u-form-item label="开通前X单半价" label-width="200">
						<view class="viewFlex item-space-between">
							<text>
								<text class="p-5 m-r-5 recommend">荐</text>
								<u-icon name="error-circle" @click="uTipsClick(tip.half)"></u-icon>
							</text>
							<u-switch size="40" v-model="data.is_half"></u-switch>
						</view>
					</u-form-item>

					<u-form-item v-if="data.is_half" label="设置半价单数(最先几单)" label-width="320">
						<u-number-box style=" margin-left: 40%;" v-model="data.halfNum"></u-number-box>
					</u-form-item>

					<block v-if="data.is_hour || data.is_day || data.is_month">
						<u-form-item label="设置满赠活动" label-width="180">
							<view class="viewFlex item-space-between">
								<text>
									<text class="p-5 m-r-5 recommend">荐</text>
									<u-icon name="error-circle" @click="uTipsClick(tip.gift)"></u-icon>
								</text>
								<u-switch size="40" v-model="data.is_gift"></u-switch>
							</view>
						</u-form-item>

						<block v-if="data.is_gift">
							<u-form-item v-for="(item, index) in giftList" :key="index">
								<view class="viewFlex" style="width: 100%;">
									<view class="viewFlex" style="width: 50%;">
										<text class="m-r-10">满</text>
										<u-input v-model="item.full_val" type="number"></u-input>
										<text class="m-r-10" :class="item.fullIndex > -1?'':'mint-cell-value'"
											@click="selectFullClick(index)">
											{{item.fullIndex > -1? timeGiftList[item.fullIndex].label:"请选择"}}
										</text>
									</view>
									<view class="viewFlex" style="width: 50%;">
										<text class="m-l-10 m-r-10">赠</text>
										<u-input v-model="item.gift_val" type="number"></u-input>
										<text class="m-r-10" :class="item.giftIndex > -1?'':'mint-cell-value'"
											@click="selectGiftClick(index)">
											{{item.giftIndex > -1? timeGiftList[item.giftIndex].label:"请选择"}}
										</text>
									</view>
									<u-icon class="m-l-5" @click="giftList.splice(index, 1)" name="close" color="red"
										size="30"></u-icon>
								</view>
							</u-form-item>
							<view style="text-align: center;">
								<u-button class="m-t-5" type="warning" size="medium" @click="addGift">继续添加活动</u-button>
							</view>
						</block>
					</block>
					<u-form-item label="是否开启不满意包退款" label-width="300">
						<view class="viewFlex item-space-between">
							<text>
								<text class="p-5 m-r-5 recommend">荐</text>
								<u-icon name="error-circle" @click="uTipsClick(tip.guarantee)"></u-icon>
							</text>
							<u-switch size="40" v-model="data.guarantee"></u-switch>
						</view>
					</u-form-item>

					<u-form-item label="出租到期设置" label-width="250" label-position="top" :required="true">
						<u-radio-group v-model="data.expireRent">
							<u-radio name="0">完成下架（精细管理）</u-radio>
							<u-radio name="1">自动接单（懒人适用）</u-radio>
						</u-radio-group>
					</u-form-item>

					<p style="font-size: 14px; margin: 30px 15px">点击确认发布陪玩，默认同意 <span
							style=" color: #61c9f0;text-decoration: underline;"
							@click="$utils.handleNavigate('/pages/common/xieyi?name=playWithAgreement')">《服务协议》</span>
					</p>
					<u-button class="submit" type="success" style="background-color: #61c9f0;"
						@click="submit">确定发布</u-button>
				</block>
			</u-form>

		</view>
		<u-select v-model="selectZoneShow" :default-value="selectZoneDefaultVal" :list="selectList"
			v-if="selectList.length > 0" @confirm="selectZoneConfirm" mode="mutil-column-auto"></u-select>

		<u-select v-model="selectSchoolShow" :default-value="selectSchoolDefaultVal" :list="selectList"
			v-if="selectList.length > 0" @confirm="selectSchoolConfirm" mode="mutil-column-auto"></u-select>

		<u-select v-model="selectFitoutShow" :default-value="[selectDefaultVal]" :list="selectList"
			v-if="selectList.length > 0" @confirm="selectFitoutConfirm" mode="single-column"></u-select>

		<u-select v-model="selectShow" :default-value="[selectDefaultVal]" :list="selectList"
			v-if="selectList.length > 0" @confirm="selectConfirm" mode="single-column"></u-select>

		<u-select v-model="timeGiftShow" :default-value="[selectDefaultVal]" mode="" :list="selectList"
			@confirm="timeGiftConfirm"></u-select>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex';
	import env from "@/util/env.js"
	import {
		skillSubmit,
		releaseInit,
		repeated
	} from "@/api/account"
	let infoModule_ = false

	function selectMutilConfirm(dataList, e) {

		let arr = [],
			title = "",
			index, index1, id, id1
		const fun = function(list, id = 0) {
			return findIndex(list, id)
		}
		index = fun(dataList, e[0])
		title += dataList[index].name
		id = dataList[index].id
		arr.push(index)

		index1 = fun(dataList[index].children, e[1])
		title += "-" + dataList[index].children[index1].name
		id1 = dataList[index].children[index1].id
		arr.push(index1)

		return {
			title: title,
			defaultVal: arr,
			defaultVal: arr,
			id: id,
			id1: id1,
		}
	}

	function findIndex(list, id) {
		if (list.length < 1) {
			throw Error("list 暂无数据")
		}
		return list.findIndex(x => {
			return x.value == id
		})
	}

	function selectGift(list) {
		let t = {
				1: "时",
				2: "日",
				3: "月"
			},
			arr = list.sort().map(item => {
				return {
					value: item,
					id: item,
					label: t[item],
					name: t[item]
				};
			});

		return arr
	}

	export default {
		watch: {
			"data.is_hour": {
				handler(newVal, oldVal) {
					this.formatTimeGiftList(newVal, 1)
				}
			},
			"data.is_day": {
				handler(newVal, oldVal) {
					this.formatTimeGiftList(newVal, 2)
				}
			},
			"data.is_month": {
				handler(newVal, oldVal) {
					this.formatTimeGiftList(newVal, 3)
				}
			},
			basicModule: {
				handler(newVal, oldVal) {
					if (newVal) {
						this.$set(this.data, "image", this.imageList)
						this.$set(this.data, "images", this.imagesList)
						if (!infoModule_) {
							this.$nextTick(function() {
								this.imageList = this.$refs.imageUpload.lists
								this.imagesList = this.$refs.imagesUpload.lists
							})
							infoModule_ = true
							console.log(infoModule_)
						}
					}

				},
				deep: true,
				immediate: true
			},
		},
		computed: {
			...mapState(['game', "config"]),
			percent: function() {
				let percent = 33;
				if (this.infoModule) {
					percent = 66;
				} else if (this.priceModule) {
					percent = 100;
				}
				return percent;
			},
		},
		data() {
			return {
				id: null,
				game_id: null,
				env: env,
				selectZoneShow: false,
				selectSchoolShow: false,
				selectFitoutShow: false,
				selectShow: false,
				timeGiftShow: false,
				selectList: [],
				selectDefaultVal: -1,
				selectZoneDefaultVal: [],
				selectSchoolDefaultVal: [],
				selectField: "",

				zoneTitle: "",
				zoneList: [],

				campIndex: -1,
				campList: [],

				currentIndex: -1,
				fitoutList: [],
				fitoutTypeList: [],
				fitout_type: "",

				schoolTitle: "",
				schoolList: [],

				bodyIndex: -1,
				bodyList: [],

				imageList: [],
				imagesList: [],

				basicModule: true,
				infoModule: false,
				priceModule: false,

				giftList: [],
				timeGiftSet: [],
				timeGiftList: [],

				data: {
					image: [],
					id: null,
					full_service: 0,
					jjc: 0,
				},
				aclass: [],
				equipmentList: [],

				tip: {
					gift: "设置满赠活动的好处：\n\n 提高账户的曝光和出租率 \n\n 满赠陪玩是什么? 即租号可以赠送号主本人陪玩，陪玩类型不限制(可以是代练小技能或者陪打等)，适合时间较多，有社交需求的号主。前提是需要有已上架的陪玩技能 \n\n 前X单半价和满赠活动若同时勾选，优先显示前X单半价",
					half: "按时/按日价格，可设置前X单半价",
					rentDesc: "平台收取15%手续费，包月续租无手续 \n 包月模式下，仅收首月手续费8%续单无手续",
					guarantee: "因号主方过错导致订单中途取消(如中途卖号导致租期中断)租金将全部退回给租方",
				},
				storeZone: [],
				fixedFee: 0,
				is_camp: '1',
				ailas: ''
			}
		},
		onLoad(options) {
			if (options.id) {
				this.id = options.id
				this.data.id = options.id
			}
			if (options.game_id) this.data.game_id = options.game_id
			this.init()
		},
		methods: {
			init() {
				let that = this,
					id = this.id,
					game_id = this.data.game_id,
					storeGame = this.game.data
				releaseInit(id, {
					game_id: game_id,
					releaseType: 2,
				}).then(res => {
					const {
						config,
						school,
						zone,
						aclass,
						game_id,
						account,
						fixedFee,
						is_camp,
						ailas
					} = res.data
					this.ailas = `${ailas?ailas.body_alias:'门派'}/${ailas?ailas.school_alias:'体型'}`
					this.is_camp = is_camp
					that.campList = config.camp
					that.fitoutTypeList = config.fitout_type

					that.storeZone = storeGame.find(item => item.id == game_id).children;
					that.zoneList = zone
					that.schoolList = school
					that.aclass = aclass
					that.fixedFee = fixedFee
					if (id) {
						let confirm

						that.data = account
						that.imageList = account.image
						that.imagesList = account.images

						that.giftList = account.giftList;

						confirm = selectMutilConfirm(zone, [account.zone_id, account.server_id])
						that.zoneTitle = confirm.title
						that.selectZoneDefaultVal = confirm.defaultVal

						that.campIndex = findIndex(config.camp, account.camp_id)

						confirm = selectMutilConfirm(school, [account.school_id, account.body_id])

						let fitout = school[confirm.defaultVal[0]].fitout
						that.fitoutList = fitout
						let equipmentList = account.equipmentList.map((item) => {
							item.fitoutIndex = findIndex(fitout, item.fitout_id);
							item.fitoutTypeIndex = findIndex(config.fitout_type, item.fitoutType_id);
							return item;
						})

						that.equipmentList = equipmentList;

						that.schoolTitle = confirm.title
						that.selectSchoolDefaultVal = confirm.defaultVal

					}
				})
			},
			formatTimeGiftList(newVal, t) {
				let set = new Set(this.timeGiftSet);
				newVal ? set.add(t) : set.delete(t)
				const array = [...set];
				this.timeGiftSet = array
				this.timeGiftList = selectGift(array)

				let giftList = this.giftList.map((item) => {
					item.fullIndex = findIndex(this.timeGiftList, item.full_id);
					item.giftIndex = findIndex(this.timeGiftList, item.gift_id);
					return item;
				})
				this.giftList = giftList
			},
			formatSelect(list) {
				return list.map(item => ({
					value: item.id,
					label: item.name
				}));
			},

			onUploaded(result, type) {
				let lists = [],
					name = `${type}Upload`

				lists = this.$refs[name].lists

				this[`${type}List`] = lists
				this.$forceUpdate()
			},
			onRemove(index, type) {
				this.form[type].splice(index, 1)
				this.$forceUpdate()
			},
			aclassClick(index, item) {
				this.aclass[index].checked = !item.checked

				let set = new Set(this.data.aclass_ids);
				item.checked ? set.add(item.id) : set.delete(item.id)
				const array = [...set];
				this.data.aclass_ids = array.sort()
			},

			basicValidate() {
				let data = this.data,
					that = this
				if (!data.name) {
					this.$throw("请输入标题");
				}
				if (that.imageList.length < 1) {
					this.$throw("请上传封面图");
				}
				if (!data.desc) {
					this.$throw("请输入服务简介");
				}
			},

			infoValidate() {
				let data = this.data,
					that = this
				if (!data.server_id || !data.zone_id) {
					this.$throw("请选择区服");
				}
				if (!data.rolename) {
					this.$throw("请输入角色名");
				}

				if (!data.school_id || !data.body_id) {
					this.$throw("请选择" + this.ailas);
				}
				if (data.is_gift && this.giftList.length < 1)
					this.$throw("请设置满减活动");
				this.equipmentList.forEach(function(item) {
					if (!item.fitout_id || !item.fitoutType_id || !item.score) {
						that.$throw("请完善满减活动");
					}
				})
				if (data.full_service === undefined) {
					this.$throw("请选择是否全服务接单");
				}
				if (data.jjc === undefined) {
					this.$throw("请选择是否允许JJC");
				}
			},

			priceValidate() {
				let data = this.data,
					that = this

				if (this.timeGiftSet.length < 1) {
					this.$throw("请至少选择一种接单方式");
				}
				if (data.is_hour) {
					if (!this.$validate.checkIsPositiveEx0(data.hourRent)) {
						this.$throw("请输入按时金额");
					}
					if (!this.$validate.checkIsPositiveEx0(data.minHour)) {
						this.$throw("请输入按时最短单数");
					}
				}

				if (data.is_day && !this.$validate.checkIsPositiveEx0(data.dayRent)) {
					this.$throw("请输入按日金额");
				}

				if (data.is_month) {
					if (!this.$validate.checkIsPositiveEx0(data.monthRent)) {
						this.$throw("请输入按月金额");
					}
					// if (!data.contact) {
					// 	this.$throw("请输入包月联系方式");
					// }
				}

				if (data.is_gift && this.giftList.length < 1)
					this.$throw("请设置满减活动");

				this.giftList.forEach(function(item) {
					if (!item.full_val || !item.gift_val || !item.full_id || !item.gift_id) {
						that.$throw("请完善活动信息");
					}
				})

				if (data.expireRent === undefined) {
					this.$throw("请选择出租到期设置");
				}
			},

			async next(cur, m) {
				let res = await repeated(this.data.game_id, this.id, 2)
				if (res.code != 1)
					this.$throw(res.msg)
				let name = m + "Module"

				if (cur == "basic") {
					this.basicValidate()
				}
				if (cur == "info") {
					this.infoValidate()
				}
				this.basicModule = false;
				this.infoModule = false;
				this.priceModule = false;
				this[name] = true
				this.commonBack()
			},
			customBack() {
				if (this.basicModule) {
					this.$utils.comeback()
				} else if (this.infoModule) {
					this.basicModule = true
					this.infoModule = false;
					this.priceModule = false;
				} else if (this.priceModule) {
					this.infoModule = true;
					this.basicModule = false;
					this.priceModule = false;
				}
				this.commonBack()

			},
			commonBack() {
				uni.pageScrollTo({
					scrollTop: 0, //滚动到页面的目标位置
					duration: 300
				});
			},
			selectClick(field) {
				let list = this[field + "List"],
					id = this.data[field + "_id"]

				let index = findIndex(list, id)
				this.selectField = field
				this.selectShow = true
				this.selectDefaultVal = index == -1 ? 0 : index

				this.selectList = list
			},

			selectFitoutClick(i) {
				let list = this.fitoutList,
					id = this.equipmentList[i].fitout_id,
					index = findIndex(list, id)

				this.selectList = list
				this.selectFitoutShow = true
				this.currentIndex = i
				this.selectDefaultVal = index
				this.fitout_type = "fitout"
			},
			selectFitoutTypeClick(i) {
				let list = this.fitoutTypeList,
					id = this.equipmentList[i].fitoutType_id,
					index = findIndex(list, id)

				this.selectList = list
				this.selectFitoutShow = true
				this.currentIndex = i
				this.selectDefaultVal = index
				this.fitout_type = "fitoutType"
			},

			selectZoneClick() {

				this.selectList = this.zoneList
				this.selectZoneShow = true
			},

			selectSchoolClick() {
				this.selectList = this.schoolList
				this.selectSchoolShow = true
			},
			selectFullClick(i) {
				this.selectList = this.timeGiftList

				this.fitout_type = "full"
				this.currentIndex = i
				this.selectFitoutShow = true

				let index = findIndex(this.timeGiftList, this.giftList[i].gift_id)
				this.selectDefaultVal = index
			},
			selectGiftClick(i) {
				this.selectList = this.timeGiftList
				this.fitout_type = "gift"
				this.currentIndex = i
				this.selectFitoutShow = true

				let index = findIndex(this.timeGiftList, this.giftList[i].gift_id)
				this.selectDefaultVal = index
			},

			selectConfirm(e) {
				let id = e[0].value,
					field = this.selectField

				let index = findIndex(this[field + "List"], id)

				this[field + "Index"] = index

				this.data[field + "_id"] = id
			},
			selectZoneConfirm(e) {

				let confirm = selectMutilConfirm(this.zoneList, [e[0].value, e[1].value])

				this.zoneTitle = confirm.title
				this.data.zone_id = confirm.id
				this.data.server_id = confirm.id1
				this.selectZoneDefaultVal = confirm.defaultVal

			},
			selectSchoolConfirm(e) {
				let confirm = selectMutilConfirm(this.schoolList, [e[0].value, e[1].value])

				this.schoolTitle = confirm.title
				this.data.school_id = confirm.id
				this.data.body_id = confirm.id1
				this.selectSchoolDefaultVal = confirm.defaultVal

				this.fitoutList = this.schoolList[confirm.defaultVal[0]].fitout
			},

			selectFitoutConfirm(e) {
				let id = e[0].value,
					list

				if (this.fitout_type == "fitout") {
					list = this.fitoutList
				} else if (this.fitout_type == 'fitoutType') {
					list = this.fitoutTypeList
				} else {
					list = this.timeGiftList
				}

				if (!id)
					id = list[0].id

				let index = findIndex(list, id)
				if (this.fitout_type == "fitout") {
					this.equipmentList[this.currentIndex].fitout_id = id
					this.equipmentList[this.currentIndex].fitoutIndex = index
				} else if (this.fitout_type == 'fitoutType') {
					this.equipmentList[this.currentIndex].fitoutType_id = id
					this.equipmentList[this.currentIndex].fitoutTypeIndex = index
				} else if (this.fitout_type == 'full') {
					this.giftList[this.currentIndex].full_id = id
					this.giftList[this.currentIndex].fullIndex = index
				} else if (this.fitout_type == 'gift') {
					this.giftList[this.currentIndex].gift_id = id
					this.giftList[this.currentIndex].giftIndex = index
				}
			},
			addEquipment() {
				this.equipmentList.push({
					fitoutIndex: -1,
					fitout_id: -1,
					fitoutTypeIndex: -1,
					fitoutType_id: -1,
					score: '',
				});
			},
			addGift() {
				this.giftList.push({
					full_val: 0,
					fullIndex: -1,
					full_id: -1,
					gift_val: 0,
					giftIndex: -1,
					gift_id: -1,
				});
				console.log(this.giftList)
			},
			submit() {
				let that = this,
					image = this.$utils.formatImage(that.imageList),
					images = this.$utils.formatImage(that.imagesList),
					data = this.data

				this.priceValidate()

				uni.showToast({
					title: "正在发布...",
					icon: "loading",
				});
				data.image = image
				data.images = images
				data.giftList = this.giftList
				data.equipmentList = this.equipmentList

				skillSubmit(data).then(res => {
					this.$u.toast(res.msg);
					if (res.code == 1) {
						setTimeout(function() {
							uni.reLaunch({
								url: "/pages/tabBar/user"
							})
						})
					}
				})

			},
			uTipsClick(val) {
				this.$refs.uTips.show({
					title: val,
					type: 'primary',
					duration: '5300',
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "@/static/css/release.scss";
</style>