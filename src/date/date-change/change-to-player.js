function ChangeByDate (date) {
	let hour = date.getHours()
	let min = date.getMinutes()
	let sec = date.getSeconds()
	if (hour < 10) {
		hour = '0' + hour
	}
	if (min < 10) {
		min = '0' + min
	}
	if (sec < 10) {
		sec = '0' + sec
	}
	return `${hour} : ${min} : ${sec}`
}

function ChangeBySecond (second) {
	let hour = Math.floor(second / 3600)
	let min = Math.floor((second % 3600) / 60)
	let sec = Math.floor(second % 60)
	hour = hour < 10 ? '0' + hour : hour
	min = min < 10 ? '0' + min : min
	sec = sec < 10 ? '0' + sec : sec
	return `${hour} : ${min} : ${sec}`
}
