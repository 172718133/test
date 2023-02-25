// 定义接口根路径
const BASE_URL = 'https://api-hmugo-web.itheima.net/api/public/v1'

// 封装request请求方法
export const request = (option) => {
	// 返回Promise方法，异步请求，有resolve, reject两个方法
	return new Promise((resolve, reject) => {
		// 请求接口API
		uni.request({
			// 让根路径和传进来的路径进行拼接
			url: BASE_URL + option.url,
			// 请求方法，若没有传则为GET
			method: option.method || 'GET',
			// 请求数据，若没有传则为空对象
			data: option.data || {},
			// 请求成功后的回调
			success: (res) => {
				// 请求数据成功data.meta.status为200
				if(res.data.meta.status !== 200) {
					uni.showToast({
						title: '获取数据失败！',
						icon: "error"
					})
				}
				// resolve返回成功的数据
				resolve(res)
			},
			// 请求失败的回调
			fail: (err) => {
				uni.showToast({
					icon: "error",
					title: '接口请求失败！'
				})
				reject(err)
			}
		})
	})
}