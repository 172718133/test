<template>
	<view class="search">
		<navigator url="../search/search" class="main">
			<view class="text">{{text}}</view>
		</navigator>
	</view>
</template>

<script>
	export default {
		props: {
			text: {
				type: String,
				default: '搜索'
			}
		},
		data() {
			return {
				
			};
		}		
	}
</script>

<style lang="scss">
	.search {
		height: 80rpx;
		background-color: #5cdedb;
		padding: 10rpx;
		box-sizing: border-box;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 9;
		.main {
			.text {
				height: 100%;
				width: 100%;
				line-height: 60rpx;
				text-align: center;
				background-color: #fff;
				border-radius: 8rpx;
				font-size: 28rpx;
				color: #666;
			}
		}
	}
</style>
