<template>
	<view class="index">
		<Search :text="'点击搜索'"></Search>
		<!-- 轮播图 -->
		<view class="swiper">
			<swiper indicator-dots circular autoplay interval="3000" duration="500" indicator-active-color="#fff">
				<swiper-item v-for="item in swiperList" :key="item.goods_id">
					<navigator :url="item.navigator_url" class="swiper-item">
						<image :src="item.image_src" mode="widthFix"></image>
					</navigator>
				</swiper-item>
			</swiper>
		</view>
		<!-- 导航 -->
		<view class="cat">
			<navigator url="../category/category" open-type="switchTab" class="catitem" v-for="item in catitemList" :key="item.name">
				<image :src="item.image_src" mode="widthFix"></image>
			</navigator>
		</view>
		<!-- 楼层 -->
		<view class="floor">
			<view class="floor_item" v-for="item in floorList" :key="item.floor_title.name">
				<view class="title">
					<image :src="item.floor_title.image_src" mode="widthFix"></image>
				</view>
				<view class="floor_main">
					<navigator :url="'../goods_list/goods_list?query=' + item1.navigator_url.substr(24, 4)" class="main" v-for="(item1, index) in item.product_list" :key="item1.image_src">
						<image :src="item1.image_src" :mode="index === 0 ? 'widthFix' : 'scaleToFill'"></image>
					</navigator>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { getSwiperAPI, getCatitemAPI, getFloorAPI } from '@/api/index.js'
	
	import Search from '@/components/Search/search.vue'
	export default {
		data() {
			return {
				swiperList: {},
				catitemList: {},
				floorList: {}
			}
		},
		components: {
			Search
		},
		methods: {
			async getSwiper () {
				const {data: res} = await getSwiperAPI()
				this.swiperList = res.message
				console.log(this.swiperList);
			},
			async getCatitem () {
				const {data: res} = await getCatitemAPI()
				this.catitemList = res.message
				console.log(this.catitemList);
			},
			async getFloor () {
				const {data: res} = await getFloorAPI()
				this.floorList = res.message
				console.log(this.floorList);
			}
		},
		onLoad() {
			this.getSwiper()
			this.getCatitem()
			this.getFloor()
		}
	}
</script>

<style lang="less" scoped>
	.swiper swiper {
		margin-top: 80rpx;
		width: 100%;
		height: 340rpx;
		.swiper-item {
			// width: 100%;
			image {
				width: 100%;
			}
		}
	}
	.cat {
		display: flex;
		margin: 20rpx 0;
		.catitem {
			text-align: center;
			flex: 1;
			image {
				width: 140rpx;
			}
		}
	}
	.floor {
		padding: 0 14rpx;
		.floor_item {
			.title {
				margin: 10rpx 0;
			}
			.floor_main {
					overflow: hidden;
				  margin-bottom: 10rpx;
				.main {
					&:nth-child(2), &:nth-child(3) {
						border-bottom: 8rpx solid #fff;
					}
					&:nth-last-child(-n+4) {
						height: 27.3vw;
						border-left: 8rpx solid #fff;
					}
					width: 33.33%;
					float: left;
					image {
						width: 100%;
						height: 100%;
					}
				}
			}
		}
	}
</style>
