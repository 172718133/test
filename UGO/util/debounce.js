let timer
export function debounce (func, delay) {
	return function () {
		const context = this
		const args = arguments
		if(timer) {
			clearTimeout(timer)
		}
		timer = setTimeout(() => {
			func.apply(context, args)
		}, delay)
	}
}