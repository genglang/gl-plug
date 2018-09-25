import {WEEKS} from '../date-template/date-data'

/**
 * 把date对象转换成字符串
 * @param date
 * @returns {string}
 * @constructor
 */
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

/**
 * 把秒数转换为字符串对象
 * @param second
 * @returns {string}
 * @constructor
 */
function ChangeBySecond (second) {
	let hour = Math.floor(second / 3600)
	let min = Math.floor((second % 3600) / 60)
	let sec = Math.floor(second % 60)
	hour = hour < 10 ? '0' + hour : hour
	min = min < 10 ? '0' + min : min
	sec = sec < 10 ? '0' + sec : sec
	return `${hour} : ${min} : ${sec}`
}


/**
 * 整理选中的星期整理成文字形式
 * @param weeks
 * @returns {string}
 */
export function getSelectedWeeksDayDescription(weeks) {
	//拼接选中日子的描述
	let total = 0;
	let repeatDescription = '';
	for (let i = 0; i < 7; i++) {
		let day = weeks[i];
		if (day) {
			repeatDescription = repeatDescription + WEEKS[i].title + ',';
			total = total + Math.pow(2, i);
		}
	}
	if (total === 0) {
		repeatDescription = '仅今天，';
	} else if (total === 96) {
		repeatDescription = '周末，';
	} else if (total === 31) {
		repeatDescription = '工作日，';
	} else if (total === 127) {
		repeatDescription = '每天，';
	}

	return repeatDescription;
}

/**
 * 把日期对象转换为xx:xx格式
 * @param date
 * @returns {string}
 */
export function getTimeString(date) {
	let hours = date.getHours();
	let minutes = date.getMinutes();
	hours = hours >= 10 ? hours : '0' + hours;
	minutes = minutes >= 10 ? minutes : '0' + minutes;
	return hours + ':' + minutes;
}

/**
 * 转换字符串对象为文字描述形式
 * @param date
 * @returns {string}
 */
export function getFullTimeString(date) {
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let moonString;
	if (hours > 6 && hours <= 11) { // 获取前缀
		moonString = '上午';
	} else if (hours > 11 && hours <= 14) {
		moonString = '中午';
	} else if (hours > 14 && hours <= 18) {
		moonString = '下午';
		hours > 12 ? hours = hours - 12 : hours;
	} else if (hours > 18 && hours <= 24) {
		moonString = '晚上';
		hours = hours - 12;
	} else {
		moonString = '凌晨';
	}
	hours = hours >= 10 ? hours : '0' + hours;
	minutes = minutes >= 10 ? minutes : '0' + minutes;
	return moonString + hours + ':' + minutes;
}

/**
 * 将xx:xx格式的时间补全文字描述
 * @param timeString
 */
export function getFullTimeStringByTimeString(timeString) {
	let hours = parseInt(timeString);
	let moonString;
	if (hours > 6 && hours <= 11) { // 获取前缀
		moonString = '上午';
	} else if (hours > 11 && hours <= 14) {
		moonString = '中午';
	} else if (hours > 14 && hours <= 18) {
		moonString = '下午';
		hours > 12 ? hours = hours - 12 : hours;
	} else if (hours > 18 && hours <= 24) {
		moonString = '晚上';
		hours = hours - 12;
	} else {
		moonString = '凌晨';
	}
	return moonString + timeString;
}
