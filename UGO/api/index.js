import {request} from '@/util/request.js'

/**
 * 获取轮播图
 */
export const getSwiperAPI = () => {
	return request({
		url: '/home/swiperdata'
	})
}

/**
 * 获取导航
 */
export const getCatitemAPI = () => {
	return request({
		url: '/home/catitems'
	})
}

/**
 * 获取楼层
 */
export const getFloorAPI = () => {
	return request({
		url: '/home/floordata'
	})
}

/**
 * 搜索列表
 */
export const getSearchListAPI = (query) => {
	return request({
		url: '/goods/qsearch',
		data: {
			query
		}
	})
}