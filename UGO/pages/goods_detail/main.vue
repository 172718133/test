<template>
	<view class="goods_detail">
		<h1>商品详情---{{goods_id}}</h1>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goods_id: ''
			}
		},
		onLoad(option) {
			this.goods_id = option.goods_id
			console.log(this.goods_id);
		},
		methods: {

		}
	}
</script>

<style lang="less" scoped>
</style>
