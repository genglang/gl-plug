export function getCalendarData (date) {
	let pages = new Array()
	for (var i = 0; i < 6; i++) {
		pages[i] = new Array();
		for (var j = 0; j < 7; j++) {
			pages[i][j] = ''
		}
	}
	let today = {
		year: date.getFullYear(),
		month: date.getMonth() + 1,
		date: date.getDate(),
		day: date.getDay()
	}
	let firstDayThisMonth = getFirstDayThisMonth(date)
	let lastDayThisMonth = getLastDayThisMonth(date)
	let lastMonthDaysInThisPage = firstDayThisMonth.day - 1

	// 获取本月第一天
	function getFirstDayThisMonth (baseDay) {
		let firstDayThisMonth = new Date(baseDay.setDate(1))
		return {
			year: firstDayThisMonth.getFullYear(),
			month: firstDayThisMonth.getMonth() + 1,
			date: firstDayThisMonth.getDate(),
			day: firstDayThisMonth.getDay()
		}
	}

	// 获取本月最后一天
	function getLastDayThisMonth (baseDay) {
		let lastDayNum = getDaysFromDate(baseDay)
		let lastDayThisMonth = new Date(baseDay.setDate(lastDayNum))
		return {
			year: lastDayThisMonth.getFullYear(),
			month: lastDayThisMonth.getMonth() + 1,
			date: lastDayThisMonth.getDate(),
			day: lastDayThisMonth.getDay()
		}
	}

	// 判断本月有几天
	function getDaysFromDate (date) {
		let year = date.getFullYear()
		let month = date.getMonth() + 1
		let yearType, days
		if (year % 4 === 0) {
			if (year % 100 === 0 && year % 400 === 0) {
				yearType = 'leepYear'
			} else {
				yearType = 'nonleepYear'
			}
		} else {
			yearType = 'nonleepYear'
		}
		switch (month) {
			case 1:
				days = 31
				break
			case 2:
				if (yearType === 'leepYear') {
					days = 29
				} else {
					days = 28
				}
				break
			case 3:
				days = 31
				break
			case 4:
				days = 30
				break
			case 5:
				days = 31
				break
			case 6:
				days = 30
				break
			case 7:
				days = 31
				break
			case 8:
				days = 31
				break
			case 9:
				days = 30
				break
			case 10:
				days = 31
				break
			case 11:
				days = 30
				break
			case 12:
				days = 31
				break
		}
		return days
	}

	for (let row = 0; row < 6; row++) {
		for (let col = 0; col < 7; col++) {
			if (row === 0) { // 日历第一行
				if (col < lastMonthDaysInThisPage) { //上个月
					pages[row][col] = `*`
				} else {
					pages[row][col] = {
						year: firstDayThisMonth.year,
						month: firstDayThisMonth.month,
						date: col + lastMonthDaysInThisPage,
						day: col + 1
					}
				}
			} else if (row === Math.floor(31/7)) { // 日历最后一行
				if ((row) * 7 + col + 1 - lastMonthDaysInThisPage <= lastDayThisMonth.date) {
					pages[row][col] = pages[row][col] = {
						year: firstDayThisMonth.year,
						month: firstDayThisMonth.month,
						date: col + lastMonthDaysInThisPage,
						day: col + 1
					}
				} else {
					pages[row][col] = '*'
				}
			} else if ((row) * 7 + lastMonthDaysInThisPage > lastDayThisMonth.date) { // 超出这个月的最后一天
				pages[row][col] = '*'
			} else {
				pages[row][col] = {
					year: firstDayThisMonth.year,
					month: firstDayThisMonth.month,
					date: 7 * (row) + col + 1 - lastMonthDaysInThisPage,
					day: col + 1
				}
			}
		}
	}
	return pages
}

