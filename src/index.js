import {getCalendarData} from './date/calendar/calendar-data'
import {WEEKS, HOURS, MIMUTES, SECONDS,} from './date/date-template/date-data'
import {
	ChangeByDate,
	ChangeBySecond,
	getSelectedWeeksDayDescription,
	getTimeString,
	getFullTimeString,
	getFullTimeStringByTimeString
} from './date/date-change/date-change'

let date = new Date()
console.log(getCalendarData(date))
console.log(WEEKS)
console.log(HOURS)
console.log(MIMUTES)
console.log(SECONDS)
console.log(ChangeByDate(date))
console.log(ChangeBySecond(100))
console.log(getSelectedWeeksDayDescription([1,2,3,4]))
console.log(getTimeString(date))
console.log(getFullTimeString(date))
console.log(getFullTimeStringByTimeString(date.getHours()))
