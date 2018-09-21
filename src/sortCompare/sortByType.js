function sortByType (sortArray) {
	let regCn = new RegExp('^[\\u4E00-\\u9FFF]+')
	let regEn = new RegExp('^[a-zA-Z]+')
	let regNum = new RegExp('[0-9]+')

	groups = {
		cnArry: [],
		enArry: [],
		numArry: [],
		otherArry: [],
	}
	for (let sortItem of sortArray) {
		if (regCn.test(sortItem)) {
			groups.cnArry.push(sortItem)
		} else if (regEn.test(sortItem)) {
			groups.enArry.push(sortItem)
		} else if (regNum.test(sortItem)) {
			groups.numArry.push(sortItem)
		} else {
			groups.otherArry.push(sortItem)
		}
	}
	let sortedArray = []
	for (let groupName of Object.keys(groups)) {
		if (groups[groupName].length > 0) {
			if (groupName === 'numArry') {
				groups[groupName].sort((a, b) => a - b)
			} else {
				groups[groupName].sort()
			}
			sortedArray=sortedArray.concat(groups[groupName])
		}
	}
	return sortedArray
}
