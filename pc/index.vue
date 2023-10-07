<template>
	<view class="rent_home">
		<view class="home">
			<view class="logo">
				<img src="@/static/imgs/logo.png" alt="" style="width: 240px;color: azure;padding-top: 3px;">
			</view>
			<view id="header">
				<ul style="height: 100%;">
					<view class="menu">
						<li><a href="javascript:;" @click="$utils.handleSwitchTab('/pages/tabBar/rent')">租号</a></li>
						<li><a href="javascript:;" @click="$utils.handleSwitchTab('/pages/tabBar/accompany')">陪玩</a>
						</li>
						<li><a href="javascript:;" @click="$utils.handleSwitchTab('/pages/tabBar/training')">代练</a></li>
						<li><a href="javascript:;" @click="$utils.handleNavigate('/pc/audio')">语音上传</a></li>
						<li><a href="#">下载</a></li>
					</view>
				</ul>
			</view>
		</view>
		<view>
			<img src="@/static/imgs/home.png" alt="" style="width: 100%;">
		</view>

		<view
			style="background-image: url(https://oss-img.mengzuhao.cn/section2.png); background-repeat: no-repeat; background-size: cover;">
		</view>

		<view class="filings">
			<view class="copyright">
				版权所有：湖北九天互娱科技有限公司
			</view>
			<p class="icp" style="cursor: pointer;" @click="openExternalPage">备案号：鄂ICP备2023010448号-1</p>
			<p class="call">联系我们:jiutianhuyu@163.com</p>
			<p style="cursor: pointer;" class="icp" @click="handleClick">
				<img src="@/static/icons/office.png">鄂公网安备
				420303020004号
			</p>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			openExternalPage() {
				window.open('https://beian.miit.gov.cn/#/Integrated/index');
			},
			handleClick() {
				window.open('https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=420303020004');
			}

		},
		onLoad() {

		}
	}
</script>

<style lang="less" scoped>
	body {
		font-family: 'MyFont', sans-serif;
	}

	@font-face {
		font-family: 'MyFont';
		src: url('/fonts/FZFWZZTJW.TTF') format('truetype');
	}

	.copyright {
		font-size: 17px;
		font-weight: 400;
		color: #fff;
		line-height: 24px;
		margin-top: 35px;
		margin-bottom: 16px;
	}

	.filings {
		background-color: #30453e;
		width: 100%;
		color: #fff;
		overflow: hidden;
		margin-top: -5px;
		padding-left: 100px;
	}

	.home {
		width: 100%;
		height: 100%;
		height: 100px;
		background-color: #30453e;
		display: flex;
	}

	* {
		margin: 0;
		padding: 0;
	}

	.logo {
		padding-left: 2vw;
	}

	/* 去掉所有列表前面的黑色圆点 */
	li {
		list-style: none;
	}

	/* 去掉链接的下划线 */
	a {
		text-decoration: none;
	}

	/* 接下来开始设置局部样式，看着代码有点多，其实只要明白逻辑，书写并不是很困难。
有心的读者可以发现，博主一直在强调逻辑，因为代码是多变的，而逻辑是固定的，我们以后在书写网页代码的时候，一定是有目的的书写，而不是用 Google 开发者工具一个个试  */

	/* 设置 header（导航栏）的宽高以及背景色，一般我们会指定一个高度，方便内部元素继承这个属性 */
	#header {
		padding-left: 3vw;
		background-color: #30453e;
		width: 100%;
		height: 100px;
	}

	/* 设置列表样式，注意这里的 menu 并不是指代 ul 标签，而是 ul 下面的 div 块标签 */
	#header .menu {
		display: flex;
		/* display: flex：弹性盒子，很适合多个元素按一行或者一列排开 */
		height: 100%;
		/* 设置和导航栏 header 相同的高度 */
		line-height: 50px;
		/* 设置行高，注意不要使用 inherit（继承），因为 menu 的父标签不是 header，而是 ul，我们并没有设置 ul 的行高，无法继承 */

		/* 最大宽度 */

		/* 左右内边距均为 20 像素 */
	}

	/* 设置 ul 中每一个 li 的样式*/
	#header .menu li {
		line-height: 100px;
		height: 100%;
		/* 设置高度，让每一个标签的高度也等于 header 高度 */
	}

	/* 设置 li 的鼠标移过动画 */
	#header li:hover {
		background: #4c9e9e;
		transition: 0.5s;
		/* 持续 0.5 秒 */
	}

	/* 设置 li 中 a 标签样式，可以发现我们严格按照从外到内的原则编写样式 */
	#header .menu li a {
		font-family: 'MyFont', sans-serif;
		font: normal 16px;
		font-size: 24px;
		color: #FFEDE3;
		/* 不解释，看不懂的补 CSS 知识去 */
		padding: 14px 4vw;
	}
</style>