<template>
	<view class="goods_list">
		<h1>商品列表关键字---{{query}}</h1>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				query: ''
			}
		},
		onLoad(option) {
			this.query = option.query
			console.log(this.query);
		},
		methods: {

		}
	}
</script>

<style lang="less" scoped>
</style>
