<template>
	<view>
		<div v-html="content"></div>
		<!-- <u-parse :content="content" @preview="preview" @navigate="navigate" noData="正在加载中..." /> -->
	</view>
</template>

<script>
	import { mapState } from 'vuex';
	import uParse from '@/components/u-parse/u-parse.vue'
	export default {
        components: {
            uParse  //注册组件
        },
		computed: {
			...mapState(["config"]),
		},
        data() {
            return {
                content:''
            }
        },
        onLoad(options) {
            this.content = this.config.data[options.name]
        },
        methods: {
            preview(src, e) {  //事件：点击富文本里的图片
                  // do something
            },
            navigate(href, e) {  //事件：点击富文本里的链接
                // do something
            }
        }
    }
</script>

<style>
</style>