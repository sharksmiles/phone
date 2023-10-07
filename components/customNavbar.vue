<template>
	<u-navbar
		:title="title"
		:autoBack="true"
		:background="background"
		:border-bottom="false"
		:isFixed="isFixed"
		:isBack="isBack"
		:custom-back="comeback"
	/>
</template>

<script>
	export default {
		props:{
			isBack: {
				type: Boolean,
				default: true
			},
			title: {
				type: String,
				default: ""
			},
			isFixed: {
				type: Boolean,
				default: true
			},
		},
		data() {
			return {
				background: {
					background: "#ffffff",
					color: "#000000"
				}
			}
		},
		methods:{
			comeback() {
				this.$utils.comeback()
			}
		}
	}
</script>