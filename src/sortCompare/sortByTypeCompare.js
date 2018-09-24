export default function sortByTypeCompare() {
	let regCn = new RegExp('^[\\u4E00-\\u9FFF]+', 'g');
	let regEn = new RegExp('^[a-zA-Z]+', 'g');
	let regNum = new RegExp('^[0-9]+', 'g');
	return function (a, b) {
		let sortItemArry = [a, b];
		let typeOfArry = [];
		let typeOfA, typeOfB; // 3中文 2英文 1数字 0其他字符串
		for (let index in sortItemArry) {
			if (regCn.test(sortItemArry[index])) {
				typeOfArry[index] = 3;
			} else if (regEn.test(sortItemArry[index])) {
				typeOfArry[index] = 2;
			} else if (regNum.test(sortItemArry[index])) {
				typeOfArry[index] = 1;
			} else {
				typeOfArry[index] = 0;
			}
		}
		typeOfA = typeOfArry[0];
		typeOfB = typeOfArry[1];
		console.log(sortItemArry[0],typeOfA)
		if (typeOfA > typeOfB) {
			return -1;
		} else if (typeOfA < typeOfB) {
			return 1;
		} else {
			if (typeOfA === 3) {
				return b.charCodeAt() - a.charCodeAt();
			} else if (typeOfA === 2) {
				return b.charCodeAt() - a.charCodeAt();
			} else if (typeOfA === 1) {
				// return parseInt(sortItemArry[0], 10) - parseInt(sortItemArry[1], 10);
				return 1
			} else {
				return b.charCodeAt() - a.charCodeAt();
			}
		}
	};
}