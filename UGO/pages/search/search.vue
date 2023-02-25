<template>
	<view class="search">
		<view class="top">
			<view class="top_main">
				<uni-icons class="icon" type="shop-filled" size="24"></uni-icons>
				<input v-model="value" type="text" placeholder="请输入要搜索的内容" @input="input">
				<view class="cancel" @click="cancel">取消</view>
			</view>
		</view>
		<view class="search_list">
			<view class="search_item" v-for="item in searchList" :key="item.id">
				<navigator :url="'../goods_detail/main?goods_id=' + item.goods_id">
					<view class="search_main">
						<uni-icons class="icon_link" color="#b2b2b2" type="search" size="20"></uni-icons>
						<view class="name">{{item.goods_name}}</view>
						<uni-icons class="icon_r" color="#b2b2b2" type="right" size="18"></uni-icons>
					</view>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	import {getSearchListAPI} from '@/api/index.js'
	import { debounce } from '@/util/debounce.js'
	export default {
		data() {
			return {
				searchList: [],
				value: ''
			};
		},
		methods: {
			// 发起搜索请求，获得搜索列表内容
			async getSearchList (query) {
				const { data: res } = await getSearchListAPI(query)
				this.searchList = res.message
			},
			// 搜索输入框，输入内容后的回调函数，每次输入框的内容发生变化都会触发
			input (e) {
				let {value} = e.detail
				// 判断输入框的内容是否为空，为空就置空搜索列表
				if (!value.trim() && this.value === '') {
					this.searchList = []
					return
				}
				// 发送请求，增加防抖
				debounce(this.getSearchList, 500)(value)
				// this.getSearchList(value)
			},
			// 取消按钮点击事件
			cancel () {
				this.value = ''
				this.searchList = []
				uni.navigateBack(-1)
			}
		}
	}
</script>

<style lang="less" scoped>
	.search {
		// box-sizing: border-box;
		.top {
			height: 100rpx;
			padding: 10rpx;
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			background-color: #ededed;
			border-bottom: 1rpx solid #ededed;
			.top_main {
				display: flex;
				height: 100%;
				// justify-content: center;
				align-items: center;
				text-align: center;
				// background-color: aqua;
				.icon {
					flex: 1;
				}
				input {
					height: 60rpx;
					line-height: 60rpx;
					flex: 5;
					text-align: left;
					background-color: #fff;
					border-radius: 30rpx;
					padding: 0 30rpx;
					font-size: 26rpx
				}
				.cancel {
					font-size: 26rpx;
					flex: 1.6;
				}
			}
		}
		.search_list {
			margin-top: 100rpx;
			margin-left: 40rpx;
			.search_item {
				height: 90rpx;
				line-height: 90rpx;
				.search_main {
					display: flex;
					border-bottom: 1rpx solid #ededed;
					.icon_link {
						flex: 1;
					}
					.name {
						flex: 8;
						font-size: 26rpx;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 1;
						overflow: hidden;
					}
					.icon_r {
						flex: 1;
					}
				}
			}
		}
	}
</style>
