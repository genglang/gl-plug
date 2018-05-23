function ChangeToPlayer (date) {
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

console.log(ChangeToPlayer(new Date()))